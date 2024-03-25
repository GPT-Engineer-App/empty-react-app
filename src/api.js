export const fetchBreeds = async (limit = 10) => {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}`);
  const data = await response.json();
  return data;
};
