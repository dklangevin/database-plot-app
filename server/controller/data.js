import * as model from '../model/data.js';

export const getData = async (req, res) => {
  try {
    const users = await model.getData();
    res.json(users);
  } catch (err) {
    console.error(err.message);
  }
};

export const getData1 = async (req, res) => {
  try {
    const users = await model.getData1();
    res.json(users);
  } catch (err) {
    console.error(err.message);
  }
};
