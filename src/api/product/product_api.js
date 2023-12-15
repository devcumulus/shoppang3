import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/product`;

export const getProduct = async () => {
  try {
    const res = await axios.get(`${path}?userPk=1&choiceList=0&selectDate=`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const postProduct = async () => {
  try {
    const res = await axios.post(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const putProduct = async () => {
  try {
    const res = await axios.put(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const patchProduct = async () => {
  try {
    const res = await axios.patch(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async () => {
  try {
    const res = await axios.delete(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
