import axios from "axios";

function shuffleArray(array: []) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

const getProducts = async (limit?: number) => {
  try {
    const response = await axios.get(`/products`);
    if (limit) {
      
      return shuffleArray(response.data).splice(0,limit);
    } else {
      return response.data;
    }
  } catch (error) {
    throw new Error("No data was return.");
  }
};

export { getProducts };
