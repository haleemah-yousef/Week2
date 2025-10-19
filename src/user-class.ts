// Define a base class named 'User'
class User {

    username: string;
    email: string;
    password: string;
  // Constructor initializes user properties
  constructor(username : string, email:string, password: string) {
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
  updateProfile(newEmail : string, newPassword :string) {
    this.email = newEmail;
    this.password = newPassword;
    console.log(`The user ${this.username} has updated their profile.`);
  }
}




// Example usage:
const user1 = new User("johnDoe", "john@example.com", "12345");
user1.login();

export default User;
