import axios from "axios";

const getProducts = async (limit?: number) => {
  try {
    const response = await axios.get(`http://localhost:3003/products`);
    if (limit) {
      return response.data.splice(0,limit);
    } else {
      return response.data;
    }
  } catch (error) {
    throw new Error("No data was return.");
  }
};

export { getProducts };
