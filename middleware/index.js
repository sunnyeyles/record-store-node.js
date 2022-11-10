import { records } from "../data/index.js";

//should be called for all requests
export const logger = (req, res, next) => {
  console.log(` ${req.method} ${req.url} ${res.statusCode}`);
  next();
};

export const auth = (req, res, next) => {
  const { title } = req.body;
  const matchedRecord = users.find((record) => {
    records.title === title;
  });
  if (matchedRecord) {
    next();
  } else {
    const error = new Error("Can't find record");
    error.status = 403;
    next(error);
  }
};

export const errorHandler = (error, req, res, next) => {
  res.status(error.status || 403).send(error.message);
};
// page not found error
export const notFound = (req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
};
// throw error if record lacks information
export const checkAllInfoIsThere = (req, res, next) => {
  const info = req.body;
  if (!info.artist || !info.title) {
    const err = new Error();
    throw err;
  }
  next();
};
