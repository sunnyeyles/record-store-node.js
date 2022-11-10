import { db, shopUsers, orders } from "../data/index.js";
import createError from "http-errors";

// get all shop users
export const getShopUsers = (req, res) => {
  res.send(shopUsers);
};
// get specific user
export const deleteSpecificUser = async (req, res) => {
  await req.read;
  const { id } = req.params;
  shopUsers.forEach((user, idx) => {
    user.id === id ? user.splice(idx, 1) : null;
  });
  res.send(shopUsers);
};

// delete user
// export const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   shopUsers.forEach((e, idx) => {
//     if (e.id === id) {
//       shopUsers.splice(idx, 1);
//     }
//   });
//   await db.write();
//   res.send(shopUsers);
// };

// edit user
// export const
