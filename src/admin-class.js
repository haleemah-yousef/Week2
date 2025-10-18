const { User } = require('./user-class');


// Define a subclass named 'Admin' that extends 'User'

class Admin extends User {
  // Constructor initializes admin-specific properties, including 'role'
  constructor(username, email, password, role) {
    // Call the parent class constructor to initialize shared properties
    super(username, email, password);
    this.role = role; // Additional property for admin
  }

  // Override the login method with admin-specific behavior
  login() {
    console.log(`The admin ${this.username} has logged in.`);
  }

  // Override the logout method with admin-specific behavior
  logout() {
    console.log(`The admin ${this.username} has logged out.`);
  }

  // Override updateProfile for admin-specific messaging
  updateProfile(newEmail, newPassword) {
    this.email = newEmail;
    this.password = newPassword;
    console.log(`The admin ${this.username} has updated their profile.`);
  }

  // New method: allows admin to view information about another user
  viewUser(user) {
    console.log(`Admin ${this.username} is viewing user ${user.username}.`);
  }
}
module.exports = { Admin };