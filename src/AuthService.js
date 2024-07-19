const users = [
  { id: 1, username: "user1", password: "password1", name: "User One" },
  { id: 2, username: "user2", password: "password2", name: "User Two" },
];

const localStorageKey = "user";

const fakeApiCall = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

const AuthService = {
  login: async (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem(localStorageKey, JSON.stringify(user));
      return fakeApiCall(user);
    } else {
      throw new Error("Invalid username or password");
    }
  },

  signup: async (username, password, name) => {
    const newUser = {
      id: users.length + 1,
      username,
      password,
      name,
    };

    users.push(newUser);
    localStorage.setItem(localStorageKey, JSON.stringify(newUser));
    return fakeApiCall(newUser);
  },

  logout: async () => {
    localStorage.removeItem(localStorageKey);
    return fakeApiCall(null);
  },

  getUser: async () => {
    const userData = localStorage.getItem(localStorageKey);
    return fakeApiCall(JSON.parse(userData));
  },

  isAuthenticated: () => {
    return localStorage.getItem(localStorageKey) !== null;
  },
};

export default AuthService;
