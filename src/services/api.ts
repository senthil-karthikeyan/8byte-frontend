import axios from "./api.config";

class ApiService {
  get = async (resource: string) => {
    try {
      return await axios.get(resource);
    } catch (err: any) {
      throw err;
    }
  };

  post = async (
    resource: string,
    payload: object | string,
  ) => {
    try {
      return await axios.post(resource, payload);
    } catch (err: any) {
      throw err;
    }
  };

  put = async (resource: string, payload: object) => {
    try {
      return await axios.put(resource, payload);
    } catch (err: any) {
      throw err;
    }
  };

  patch = async (resource: string, payload: object) => {
    try {
      return await axios.patch(resource, payload);
    } catch (err: any) {
      throw err;
    }
  };

  delete = async (resource: string) => {
    try {
      return await axios.delete(resource);
    } catch (err: any) {
      throw err;
    }
  };

  fileUpload = async (resource: string, payload: any) => {
    try {
      return await axios.post(resource, payload);
    } catch (err: any) {
      throw err;
    }
  };
}

export default ApiService;
