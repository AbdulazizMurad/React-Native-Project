import instance from "./index";

const getAllCategories = async () => {
  const response = await instance.get("/mini-project/api/categories/");
  return response.data;
};
export { getAllCategories };
