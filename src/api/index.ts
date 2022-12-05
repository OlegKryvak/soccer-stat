import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: `http://api.football-data.org/v2/`,
  headers: { "X-Auth-Token": "7b55d8e6d9914fe8bece52abebbe8676" },
});

// Step-2: Create request, response & error handlers
const requestHandler = (request: AxiosRequestConfig<any>) => {
  return request;
};

const responseHandler = (response: AxiosResponse<any, any>) => {
  return response;
};

const errorHandler = (error: any) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
