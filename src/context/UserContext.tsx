import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import type { User, UserProfile } from "../types/user";

type UserContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  completeProfile: (profile: UserProfile) => Promise<void>;
  logout: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

// Mock database - store users in localStorage
const MOCK_USERS_KEY = "mockUsers";
const CURRENT_USER_KEY = "currentUser";

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  completeProfile: async () => {},
  logout: () => {},
});

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to get users from localStorage
  const getUsers = (): User[] => {
    try {
      const storedUsers = localStorage.getItem(MOCK_USERS_KEY);
      if (storedUsers) {
        return JSON.parse(storedUsers);
      }
      return [];
    } catch (error) {
      console.error("Error loading users from localStorage:", error);
      return [];
    }
  };

  // Helper function to save users to localStorage
  const saveUsers = (users: User[]) => {
    try {
      localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
    } catch (error) {
      console.error("Error saving users to localStorage:", error);
      throw new Error("Failed to save user data");
    }
  };

  // To get current user:
  const getCurrentUser = (): User | null => {
    try {
      const storedUser = localStorage.getItem(CURRENT_USER_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error loading user from localStorage:", error);
      return null;
    }
  };

  // To save current user:
  const saveCurrentUser = (user: User | null) => {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  };

  const login = async (email: string) => {
    setIsLoading(true);
    try {
      // 1. Get users from mock database
      const users = getUsers();

      // 2. Find user by email
      const foundUser = users.find((user) => user.email === email);

      // 3. If user exists, set as current user
      if (foundUser) {
        setUser(foundUser);
        saveCurrentUser(foundUser); // Save to separate current user storage
      } else {
        // 4. If not, throw error "User not found"
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error; // Re-throw to let component handle it
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string) => {
    setIsLoading(true);
    try {
      const users = getUsers();

      // Check if user already exists
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        throw new Error("User already exists");
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name: "", // Empty name until profile is completed
        isProfileComplete: false,
        createdAt: new Date(),
      };

      // Add to users and save
      const updatedUsers = [...users, newUser];
      saveUsers(updatedUsers);

      // Set as current user
      setUser(newUser);
      saveCurrentUser(newUser);
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const completeProfile = async (profile: UserProfile) => {
    setIsLoading(true);
    try {
      if (!user) {
        throw new Error("No user logged in");
      }

      const users = getUsers();

      // Update user in the users array
      const updatedUsers = users.map((u) =>
        u.id === user.id
          ? {
              ...u,
              name: profile.name,
              isProfileComplete: true,
            }
          : u
      );

      // Save updated users
      saveUsers(updatedUsers);

      // Update current user
      const updatedUser = {
        ...user,
        name: profile.name,
        isProfileComplete: true,
      };

      setUser(updatedUser);
      saveCurrentUser(updatedUser);
    } catch (error) {
      console.error("Error completing profile:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    saveCurrentUser(null);
  };

  // Load user from localStorage on app start
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const isAuthenticated = !!user;

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        completeProfile,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export function useUser(): UserContextType {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("UserContext was used outside of UserProvider");

  return context;
}
