// Define a base class named 'User'
class User {
  // Constructor initializes user properties
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method to simulate user login
  login() {
    console.log(`The user ${this.username} has logged in.`);
  }

  // Method to simulate user logout
  logout() {
    console.log(`The user ${this.username} has logged out.`);
  }

  // Method to update the user's email and password
  updateProfile(newEmail, newPassword) {
    this.email = newEmail;
    this.password = newPassword;
    console.log(`The user ${this.username} has updated their profile.`);
  }
}




// Example usage:
// const user1 = new User("johnDoe", "john@example.com", "12345");
// user1.login();
// const admin1 = new Admin("adminJane", "admin@example.com", "admin123", "superadmin");
// admin1.viewUser(user1);

module.exports = { User };
