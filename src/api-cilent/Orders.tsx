import instance from "./Config";

export const AddOrderApi = (data: any) => {
   return instance.post(`/orders`, data);
}
export const GetOrdersApi = () => {
    return instance.get(`/orders`);
}

export const removeOrderApi = (id: string) => {
    return instance.delete(`/orders/${id}`);
}
export const readOrdertApi = (id: any) => {
    return instance.get(`orders/${id}`)
}

export const updateStatusOrderApi = (data:any) => {
    return instance.put(`/orders/${data._id}`,data);
}

export const UpdateQuantityCart = (data:any) => {
    return instance.put(`/updatequantity`,data)
}