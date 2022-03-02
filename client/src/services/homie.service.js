import axios from "axios";

class homieService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/homie`,
    });
  }

  getAllLivingPlaces = () => {
    return this.api.get("/living-places");
  };

  getOneLivingPlace = (_id) => {
    return this.api.get(`/living-places/${_id}`);
  };

  createLivingPlace = (homie) => {
    return this.api.post(`/living-places`, homie);
  };

  editLivingPlace = (_id) => {
    return this.api.put(`/living-places/${_id}`);
  };

  deleteLivingPlace = (_id) => {
    return this.api.delete(`/living-places/${_id}`);
  };
}

const homieService = new CoastersService();

export default homieService;
