export const authStorage = {
  getToken() {
    return localStorage.getItem("token");
  },

  setToken(token: string) {
    localStorage.setItem("token", token);
  },

  clear() {
    localStorage.removeItem("token");
  },
};