import { ICatePro } from "../models/CatePro";
import instance from "./Config";

export const getAllCateProduct = (): Promise<ICatePro[]> => {
  const url = "/cateproduct";
  return instance.get(url);
};
export const getAllCateProductadmin = (): Promise<ICatePro[]> => {
  const url = "/cateproducts";
  return instance.get(url);
};
export const readCateProduct = (id: string): Promise<ICatePro> => {
  const url = `/cateproduct/${id}`;
  return instance.get(url);
};

export const createCateProduct = (catepost: ICatePro): Promise<ICatePro> => {
  const url = `/cateproduct`;
  return instance.post(url, catepost);
};

export const updateCateProduct = (catepost: ICatePro): Promise<ICatePro> => {
  const url = `/cateproduct/${catepost._id}`;
  return instance.put(url, catepost);
};

export const removeCateProduct = (id: string): Promise<ICatePro> => {
  const url = `/cateproduct/${id}`;
  return instance.delete(url);
};
