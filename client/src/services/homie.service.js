import axios from "axios";

class homieService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/homie`,
    });
  }

  getAllLivingPlaces = () => {
    return this.api.get("/getAllLivingPlaces");
  };

  getOneLivingPlace = (_id) => {
    return this.api.get(`/getOneLivingPlace/${_id}`);
  };

  createLivingPlace = (homie) => {
    return this.api.post(`/createLivingPlace`, homie);
  };

  editLivingPlace = (_id) => {
    return this.api.put(`/livingPlaces/${_id}/edit`);
  };

  deleteLivingPlace = (_id) => {
    return this.api.delete(`/livingPlaces/${_id}/delete`);
  };
}

const homieService = new CoastersService();

export default homieService;
