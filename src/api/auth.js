import instance from "./index";

const getAllItems = async () => {
  try {
    const response = await instance.get("/mini-project/api/items");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getItemById = async (id) => {
  try {
    const response = await instance.get(`/mini-project/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { getAllItems, getItemById };
