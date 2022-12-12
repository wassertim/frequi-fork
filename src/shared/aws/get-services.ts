import axios from 'axios';

export const getEcsServices = async (url) => {
  const { data } = await axios.get(url);

  return data;
};
