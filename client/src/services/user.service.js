import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/homie`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  goToUserProfile = () => {
    return this.api.get(`/profile`);
  };
  getUserProfile = (id) => {
    return this.api.get(`/profile/${id}`);
  };

  createUserProfile = (user) => {
    return this.api.post(`/profile`, user);
  };

  updateUserProfile = (id) => {
    return this.api.put(`/profile/${id}`);
  };

  deleteUserProfile = (id) => {
    return this.api.delete(`/profile/${id}`);
  };
}

const userService = new UserService();

export default userService;
