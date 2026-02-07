import api from "../../lib/axios";

export const getAllEquipments = async () => {
  try {
    const response = await api.get("/equipments");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
