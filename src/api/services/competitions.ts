import axiosInstance from "../index";


export const getCometitions  = async () => {
  const response = await axiosInstance.get("/competitions");
  return response;
};
