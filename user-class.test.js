const { User } = require("./user-class");

describe("User Class", () => {
  let user;
  beforeEach(() => {
    user = new User("Haleemah", "haleemah@gmail.com", "password123");
    console.log = jest.fn(); // Mock console.log
  });

  test("username,password and email are set correctly", () => {
    expect(user.username).toBe("Haleemah");
    expect(user.email).toBe("haleemah@gmail.com");
    expect(user.password).toBe("password123");
  });
  test("login method works correctly", () => {
    user.login();
    expect(console.log).toHaveBeenCalledWith(
      "The user Haleemah has logged in.",
    );
  });

  test("logout method works correctly", () => {
    user.logout();
    expect(console.log).toHaveBeenCalledWith(
      "The user Haleemah has logged out.",
    );
  });

  test("updateProfile method works correctly", () => {
    user.updateProfile("Haleemah", "haleemah_new@gmail.com", "newpassword123");
    expect(console.log).toHaveBeenCalledWith(
      "The user Haleemah has updated their profile.",
    );
  });
});
