// AuthService.js
const AuthService = {
  registeredUsers: [],
  currentUser: null, // Track the current logged-in user

  login: async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = AuthService.registeredUsers.find(
          (u) => u.username === credentials.username && u.password === credentials.password
        );
        if (user) {
          AuthService.currentUser = user; // Set the currentUser
          resolve();
        } else {
          reject(new Error('Invalid credentials. Please register...!'));
        }
      }, 1000); // Simulate delay
    });
  },

  logout: () => {
    AuthService.currentUser = null; // Clear the currentUser on logout
  },

  register: async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUser = AuthService.registeredUsers.find(
          (u) => u.username === credentials.username
        );
        if (existingUser) {
          reject(new Error('Username already exists. Please choose a different username.'));
        } else {
          AuthService.registeredUsers.push(credentials);
          resolve();
        }
      }, 1000); // Simulate delay
    });
  }
};

export default AuthService;
