import axiosInstance from "../index";

export const getCometitions = () => {
  const response = axiosInstance.get("/competitions");
  return response;
};
