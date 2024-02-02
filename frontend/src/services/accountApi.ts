import axios from "axios";
import { Account } from "../models/account-types";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const createNewAccount = async (
  account: Account
): Promise<Account | null> => {
  try {
    return (await axios.post(`${baseUrl}/account`, account)).data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getAccountByUuid = async (
  uuid: string
): Promise<Account | null> => {
  try {
    return (await axios.get(`${baseUrl}/account/${encodeURIComponent(uuid)}`))
      .data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
