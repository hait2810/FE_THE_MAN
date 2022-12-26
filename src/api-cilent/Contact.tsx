import { Contact } from "../models/Contact";
import instance from "./Config";
export const getAll = (): Promise<Contact[]> => {
  return instance.get("/contacts");
};
export const remove = (id: string): Promise<Contact> => {
  return instance.delete(`/contact/${id}`);
};

export const add = (contact: Contact): Promise<Contact> => {
  return instance.post("/contact", contact);
};

export const read = (id: string): Promise<Contact> => {
  return instance.get(`/contact/${id}`);
};

export const update = (contact: Contact): Promise<Contact> => {
  return instance.put(`/contact/${contact._id}`, contact);
};
