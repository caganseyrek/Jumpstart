/*
 * Request method using axios
 */
import axios from "axios";

async function http_requester_axios(payload: any) {
  const METHOD = "";
  const URL = "";

  const options = {
    method: METHOD,
    url: URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer <token>",
    },
    data: JSON.stringify(payload),
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`HTTP Request Error: ${error.response.status}`);
      return;
    } else {
      console.error(error);
      return;
    }
  }
}

/*
 * Request method using fetch api
 */
async function http_requester_fetch(payload: any) {
  const METHOD = "";
  const URL = "";

  const options = {
    method: METHOD,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer <token>",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(URL, options);

    if (!response.ok) {
      console.log(response);
      throw new Error(`Failed to fetch. (${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`HTTP Request Error: ${error}`);
    return 500;
  }
}
