import instance from "./Config";
import { ICatePost } from "../models/CatePost";
export const getAlls = (): Promise<ICatePost[]> => {
  const url = "/catepost";
  return instance.get(url);
};

export const read = (id: string): Promise<ICatePost> => {
  const url = `/catepost/${id}`;
  return instance.get(url);
};

export const createCatePost = (catepost: ICatePost): Promise<ICatePost> => {
  const url = `/catepost`;
  return instance.post(url, catepost);
};

export const update = (catepost: ICatePost): Promise<ICatePost> => {
  const url = `/catepost/${catepost._id}`;
  return instance.put(url, catepost);
};

export const remove = (id: string): Promise<ICatePost> => {
  const url = `/catepost/${id}`;
  return instance.delete(url);
};
