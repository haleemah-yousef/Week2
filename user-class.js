class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  login() {
    console.log(`the user ${this.username} has logged in.`);
  }

  logout() {
    console.log(`the user ${this.username} has logged out.`);
  }
  updateProfile(newEmail, newPassword) {
    this.email = newEmail;
    this.password = newPassword;
    console.log(`the user ${this.username} has updated their profile.`);
  }
}

class Admin extends User {
  constructor(username, email, password, role) {
    super(username, email, password);
    this.role = role;
  }

  login() {
    console.log(`the admin ${this.username} has logged in.`);
  }

  logout() {
    console.log(`the admin ${this.username} has logged out.`);
  }

  updateProfile(newEmail, newPassword) {
    this.email = newEmail;
    this.password = newPassword;
    console.log(`the admin ${this.username} has updated their profile.`);
  }

  viewUser(user) {
    console.log(`Admin ${this.username} is viewing user ${user.username}.`);
  }
}

/*
const user1 = new User("Haleemah", "haleemah@gmail.com", "password123");
user1.login();
user1.updateProfile("haleemah@hotmail.com", "newpassword456");
user1.logout();

const admin1 = new Admin("Alma", "alma@gmail.com", "adminpassword123", "superadmin");
admin1.login();
admin1.viewUser(user1); 
admin1.logout();
*/

module.exports = { User, Admin };
