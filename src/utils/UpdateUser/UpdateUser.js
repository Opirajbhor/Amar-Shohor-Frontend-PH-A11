import useAxiosSecure from "../../Hooks/useAxiosSecure";

// save or update user in db
export const saveOrUpdateUser = async (userData) => {
  const { data } = await useAxiosSecure.post("/user", userData);
  return data;
};
