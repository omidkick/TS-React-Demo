export type User = {
  id: string;
  email: string;
  name: string;
  isProfileComplete: boolean;
  createdAt: Date;
};

export type UserProfile = {
  name: string;
  // We can add more profile fields later
};
