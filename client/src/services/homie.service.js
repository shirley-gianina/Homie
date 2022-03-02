import axios from "axios";

class HomieService {
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

  getAllLivingPlaces = () => {
    return this.api.get("/living-places");
  };

  getOneLivingPlace = (id) => {
    return this.api.get(`/living-places/${id}`);
  };

  createLivingPlace = (homie) => {
    return this.api.post(`/living-places`, homie);
  };

  editLivingPlace = (id) => {
    return this.api.put(`/living-places/${id}`);
  };

  deleteLivingPlace = (id) => {
    return this.api.delete(`/livingPlaces/${id}`);
  };
}

const homieService = new HomieService();

export default homieService;
