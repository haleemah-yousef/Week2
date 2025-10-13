const { User, Admin } = require('./user-class');

describe ('User Class', () => {
    let user;
    beforeEach(() => {
        user = new User('Haleemah', 'haleemah@gmail.com', 'password123');
        console.log = jest.fn(); // Mock console.log
    });
    
    test('username,password and email are set correctly', () => {
        expect(user.username).toBe('Haleemah');
        expect(user.email).toBe('haleemah@gmail.com');
        expect(user.password).toBe('password123');
    });
    test ('login method works correctly', () => {
        user.login();
        expect(console.log).toHaveBeenCalledWith('the user Haleemah has logged in.');  
    });

    test ('logout method works correctly', () => {
        user.logout();
        expect(console.log).toHaveBeenCalledWith('the user Haleemah has logged out.');  
    });

    test ('updateProfile method works correctly', () => {
        user.updateProfile('Haleemah', 'haleemah_new@gmail.com', 'newpassword123');
        expect(console.log).toHaveBeenCalledWith('the user Haleemah has updated their profile.');
    }); 

});

describe ('Admin Class', () => {
    let admin, user;
    beforeEach(() => {
        admin = new Admin('Alma', 'alma@gmail.com', 'adminpassword123');
        user = new User('Haleemah', 'haleemah@gmail.com', 'password123');
        console.log = jest.fn(); // Mock console.log
    });

    test('should create an admin with correct properties', () => {
        expect(admin.username).toBe('Alma');
        expect(admin.email).toBe('alma@gmail.com');
        expect(admin.password).toBe('adminpassword123');
    });

    test('login method works correctly', () => {
        admin.login();
        expect(console.log).toHaveBeenCalledWith('the admin Alma has logged in.');
    });

    test('logout method works correctly', () => {
        admin.logout();
        expect(console.log).toHaveBeenCalledWith('the admin Alma has logged out.');
    });

    test('updateProfile method works correctly', () => {
        admin.updateProfile('Alma', 'alma_new@gmail.com', 'newadminpassword123');
        expect(console.log).toHaveBeenCalledWith('the admin Alma has updated their profile.');
    });

    test ('viewUser method works correctly', () => {
        admin.viewUser(user);
        expect(console.log).toHaveBeenCalledWith('Admin Alma is viewing user Haleemah.');
    });
});
