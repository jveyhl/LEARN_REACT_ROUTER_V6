const animalsApi = "/animals";
const typesApi = "/types";

export const getPets = async (type = "", query = "") => {
  const searchParams = new URLSearchParams({ type, query });
  const requestUrl = `${animalsApi}?${searchParams}`;

  const response = await fetch(requestUrl, { method: "GET" });

  return response.json();
};

export const getPetDetails = async (id) => {
  const requestUrl = `${animalsApi}/${id}`;
  const response = await fetch(requestUrl, { method: "GET" });

  if (!response.ok) {
    throw new Error("Pet not found");
  }

  return response.json();
};

export const getPetTypes = async () => {
  const response = await fetch(typesApi, { method: "GET" });
  return response.json();
};
