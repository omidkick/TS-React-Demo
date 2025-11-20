import React, { useState, useCallback } from "react";

// Types
interface User {
  name: string;
  email: string;
}

type UserState = User | null;

// Constants
const DEFAULT_USER: User = {
  name: "Omid",
  email: "omidtest@gmail.com",
};

// Custom hook for user management
const useUser = () => {
  const [user, setUser] = useState<UserState>(null);

  const login = useCallback((userData: User) => {
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    login,
    logout,
    isLoggedIn: user !== null,
  };
};

// Sub-components for better separation of concerns
const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <div className="user-info">
    <p>
      Name: <strong>{user.name}</strong>
    </p>
    <p>
      Email: <strong>{user.email}</strong>
    </p>
  </div>
);

const AuthButtons: React.FC<{
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}> = ({ isLoggedIn, onLogin, onLogout }) => (
  <div className="auth-buttons">
    {!isLoggedIn ? (
      <button
        onClick={onLogin}
        className="btn btn--primary"
        aria-label="Login to account"
      >
        Login
      </button>
    ) : (
      <button
        onClick={onLogout}
        className="btn btn--secondary"
        aria-label="Logout from account"
      >
        Logout
      </button>
    )}
  </div>
);

interface AccountProps {
  containerStyles?: string;
}

// Main Component
const Account: React.FC<AccountProps> = ({ containerStyles }) => {
  const { user, login, logout, isLoggedIn } = useUser();

  const handleLogin = useCallback(() => {
    login(DEFAULT_USER);
  }, [login]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <div className={containerStyles}>
      <header className="account__header">
        <h1>Account Management</h1>
      </header>

      <main className="account__content">
        <AuthButtons
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />

        {isLoggedIn && user && (
          <section className="account__user-info">
            <h2>User Information</h2>
            <UserInfo user={user} />
          </section>
        )}

        {!isLoggedIn && (
          <div className="account__guest-message">
            <p>Please log in to view your account information.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Account;
