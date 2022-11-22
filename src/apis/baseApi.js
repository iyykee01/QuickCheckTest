import axios from "axios";
const baseURL = "";

export const requestAPI = async ({ url, data, method, queryParams }) => {
  let res = await axios(
    { url: `${baseURL}${url}`, data: data, method },
    {
      params: queryParams,
    }
  ).catch((error) => {
    if (error.response) {
      if (JSON.stringify(error).includes("Network")) {
        throw "Sorry, there seam to be a problem with the network connection. Please check the network and try again after some time.";
      } else if (Array.isArray(error.response.data.message)) {
        throw error.response.data.message[0];
      } else {
        throw "Something went wrong!";
      }
    }
  });

  res = res.data.data;
  return res;
};
