import { Slider } from "../models/Slider";
import instance from "./Config";
export const getAll = (page: any, limit: any): Promise<Slider[]> => {
  return instance.post("/sliders", { page, limit });
};
export const getAllPost = (): Promise<Slider[]> => {
  return instance.get("/slider");
};
export const remove = (id: string): Promise<Slider> => {
  return instance.delete(`/slider/${id}`);
};

export const add = (slider: Slider): Promise<Slider> => {
  return instance.post("/slider", slider);
};

export const get = (id: string): Promise<Slider> => {
  return instance.get(`/slider/${id}`);
};

export const update = (slider: Slider): Promise<Slider> => {
  return instance.put(`/slider/${slider._id}`, slider);
};
