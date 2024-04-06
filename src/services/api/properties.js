import axios from "axios";
import { BACKEND_URL } from "../../../config/config";

class PropertiesApis {
  async getAllProperties(queryString) {
    return axios.get(`${BACKEND_URL}/api/v1/property/all?${queryString}`);
  }

  async getProperty(id){
    return axios.get(`${BACKEND_URL}/api/v1/property/${id}`);
  }


  async uploadPropertyImages(formData){
    return axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, formData);
  }

  async createNewProperty(creator,images,values,accessToken){
    console.log(images,creator);
    return await axios.post(`${BACKEND_URL}/api/v1/property/new-property`, {
      ...values,
      creator,
      images,
    }, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    })
  }
}

export default PropertiesApis;
