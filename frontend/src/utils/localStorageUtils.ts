import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_ENCRYPTION_KEY || "CHECK ENV LOCAL FILE";
const userUuidKey = "userUuid";

const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

const decryptData = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const getEncryptedDataFromLocalStorage = (): string | null => {
  const storedUuid = localStorage.getItem(userUuidKey);
  return storedUuid ? decryptData(storedUuid) : null;
};

export const saveEncryptedDataToLocalStorage = (uuid: string): void => {
  const encryptedUuid = encryptData(uuid);
  localStorage.setItem(userUuidKey, encryptedUuid);
};

export const removeEncryptedDataFromLocalStorage = (): void => {
  localStorage.removeItem(userUuidKey);
};
