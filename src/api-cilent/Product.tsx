import { Product } from "../models/Product";
import instance from "./Config";
export const getAll = (page: any, limit: any): Promise<Product[]> => {
  return instance.post("/products", { page, limit });
};
export const getAllproduct = (page: any, limit: any): Promise<Product[]> => {
  return instance.post("/productadmin", { page, limit });
};
export const remove = (id: string): Promise<Product> => {
  return instance.delete(`/product/${id}`);
};

export const add = (product: Product): Promise<Product> => {
  return instance.post("/product", product);
};
export const filter = (product: any): Promise<any> => {
  return instance.post("/product/filter", product);
};

export const get = (id: string): Promise<Product> => {
  return instance.get(`/product/${id}`);
};

export const update = (product: Product): Promise<Product> => {
  return instance.put(`/product/${product._id}`, product);
};
export const thongke = (data: any): Promise<Product[]> => {
  return instance.post("/thongke", data);
};
export const searchs = (data: any): Promise<Product[]> => {
  return instance.post("/products/search", data);
};
