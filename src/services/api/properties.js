import axios from "axios";

class PropertiesApis {
  async getAllProperties(queryString) {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/property/all?${queryString}`);
  }


  async getProperty(id){
    return axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/property/${id}`);
  }
}

export default PropertiesApis;
