import axios from "axios";

class PropertiesApis {
  async getAllProperties(queryString) {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/property/all?${queryString}`);
  }

  async getProperty(id){
    return axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/property/${id}`);
  }


  async uploadPropertyImages(formData){
    return axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, formData);
  }

  async createNewProperty(creator,images,values,accessToken){
    console.log(images,creator);
    return await axios.post("http://localhost:3000/api/v1/property/new-property", {
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
