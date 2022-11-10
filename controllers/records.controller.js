// show records
import { db, records } from "../data/index.js";
import createError from "http-errors";
export const getRecords = (req, res) => {
  try {
    if (records.length > 0) {
      res.send(records);
    } else {
      res.send("Nothing in database");
      next(createError(401, "No records to show!"));
    }
  } catch (error) {
    next(error);
  }
};
// add record
export const addRecord = async (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const newRecord = { ...req.body, id };
  records.push(newRecord);
  await db.write();
  res.send(records);
};
// update records
export const updateRecords = async (req, res) => {
  //process request data
  const { id, price } = req.body;
  //find requested item to change
  await records.forEach((e) => {
    //change value
    e.id === id ? (e.price = price) : false;
  });
  //send back message to user
  res.send(records);
};

// delete record
export const deleteRecord = async (req, res) => {
  const { title } = req.body;
  records.forEach((e, idx) => {
    if (e.title === title) {
      records.splice(idx, 1);
    }
  });
  await db.write();
  res.send(records);
};

// get specific record
export const getSpecificRecord = (req, res) => {
  db.read;
  const { id } = req.params;
  const selectedRecord = records.filter((e) => e.id === id);
  res.send(selectedRecord);
};
// get delete record
export const deleteSpecificRecord = async (req, res) => {
  await db.read();
  const { id } = req.params;
  records.forEach((e, idx) => {
    if (e.id === id) {
      records.splice(idx, 1);
    }
  });
  res.send(records);
};
// alternatively
// export const deleteSpecificRecord = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const recordIndex = await records.find(records.id === id);
//     if (recordIndex) {
//       records.splice(recordIndex);
//       await db.write();
//       res.send("User deleted");
//     } else {
//       const error = new Error("No user found");
//       error.status = 403;
//       throw error;
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };
