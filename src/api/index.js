export const API_URLS = {
  jdAPI: "https://api.weekday.technology/adhoc/getSampleJdJSON",
};

export const fetchJobDescription = async () =>
  fetch(API_URLS.jdAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      limit: 10,
      offset: 0,
    }),
  }).then((res) => res.json());
