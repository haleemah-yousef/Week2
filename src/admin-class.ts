// src/admin.ts
import User from "./user-class"; // Import the User class from user-class.ts

// Define a subclass named 'Admin' that extends 'User'
export class Admin extends User {
  role: string; // Admin-specific property

  // Constructor initializes admin-specific properties, including 'role'
  constructor(username: string, email: string, password: string, role: string) {
    // Call the parent class constructor to initialize shared properties
    super(username, email, password);
    this.role = role;
  }

  // Override the login method with admin-specific behavior
  override login(): void {
    console.log(`The admin ${this.username} has logged in.`);
  }

  // Override the logout method with admin-specific behavior
  override logout(): void {
    console.log(`The admin ${this.username} has logged out.`);
  }

  // Override updateProfile for admin-specific messaging
  override updateProfile(newEmail: string, newPassword: string): void {
    this.email = newEmail;
    this.password = newPassword;
    console.log(`The admin ${this.username} has updated their profile.`);
  }

  // New method: allows admin to view information about another user
  viewUser(user: User): void {
    console.log(`Admin ${this.username} is viewing user ${user.username}.`);
  }
}

// Example usage:
const user1 = new User("johnDoe", "john@example.com", "12345");
//user1.login();
const admin1 = new Admin("adminJane", "admin@example.com", "admin123", "superadmin");
admin1.viewUser(user1);

