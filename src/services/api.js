import axios from "axios";

const key = "20415428-bf9b7db865d7d385cdf74d6e6";

export const getImages = (query = "", page = 1) => {
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};
