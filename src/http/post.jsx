import { $host } from ".";

export const createItem = async (item) => {
  const { data } = await $host.post("api/ticket", item);
  return data;
};
