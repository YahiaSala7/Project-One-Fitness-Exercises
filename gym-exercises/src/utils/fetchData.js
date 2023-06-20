import axios from "axios";
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac0f01db2fmsh1c8b0dc31449dd6p139630jsn5aaa2e064364",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac0f01db2fmsh1c8b0dc31449dd6p139630jsn5aaa2e064364",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
