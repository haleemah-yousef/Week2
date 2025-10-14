const { Admin } = require("./admin-class");
const { User } = require("./user-class");

describe("Admin Class", () => {
  let admin, user;
  beforeEach(() => {
    admin = new Admin("Alma", "alma@gmail.com", "adminpassword123");
    user = new User("Haleemah", "haleemah@gmail.com", "password123");
    console.log = jest.fn(); // Mock console.log
  });

  test("should create an admin with correct properties", () => {
    expect(admin.username).toBe("Alma");
    expect(admin.email).toBe("alma@gmail.com");
    expect(admin.password).toBe("adminpassword123");
  });

  test("login method works correctly", () => {
    admin.login();
    expect(console.log).toHaveBeenCalledWith("The admin Alma has logged in.");
  });

  test("logout method works correctly", () => {
    admin.logout();
    expect(console.log).toHaveBeenCalledWith("The admin Alma has logged out.");
  });

  test("updateProfile method works correctly", () => {
    admin.updateProfile("Alma", "alma_new@gmail.com", "newadminpassword123");
    expect(console.log).toHaveBeenCalledWith(
      "The admin Alma has updated their profile.",
    );
  });

  test("viewUser method works correctly", () => {
    admin.viewUser(user);
    expect(console.log).toHaveBeenCalledWith(
      "Admin Alma is viewing user Haleemah.",
    );
  });
});
