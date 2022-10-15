import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../store";

type Province = {
  province: [],
  district: [],
  ward: [],
  fee: {}
};

const initialState: Province = {
    province: [],
    district: [],
    ward: [],
    fee: {}

};


export const getProvince  = createAsyncThunk("provinces/getprovinces", async () => {
    const res = await axios.get("https://online-gateway.ghn.vn/shiip/public-api/master-data/province", {
        headers: {
            'token': '422b151b-4b63-11ed-8008-c673db1cbf27'
        }
    })
    return res.data.data
            
})
export const getDistrict  = createAsyncThunk("provinces/getdistrict", async (id: number) => {
   
    const province = {
        'province_id': id
    }  
   
   const res = await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/district', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'token': '422b151b-4b63-11ed-8008-c673db1cbf27'
      },
      body: JSON.stringify(province),
    }).then((response) => response.json())
    .then((data) => {
        return data
    }
    );
    return res.data
    
            
})
export const getWards  = createAsyncThunk("provinces/getwards", async (id: number) => {
  const province = {
      'district_id': id
  }  
  const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/master-data/ward", JSON.stringify(province),  {
    headers: {
            'Content-Type': 'application/json',
            'token': '422b151b-4b63-11ed-8008-c673db1cbf27',
          }, 
  })
  return res.data.data          
})
export const getCharge = createAsyncThunk("provinces/getcharge", async (address:any) => {
            const info = {
              ...address,
              "coupon": null,
              "service_id":53321,
              "from_district_id": 3440,
              "height":15,
              "length":15,
              "weight":1000,
              "width":15
            }
            const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee", JSON.stringify(info), {
              headers: {
                'Content-Type': 'application/json',
                'token': '422b151b-4b63-11ed-8008-c673db1cbf27',
                'shop_id': 	3348656
              }, 
            })
            console.log("res",res);
            return res.data.data
            
})


const provinceSlice = createSlice({
  name: "provinces",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(getProvince.fulfilled, (state, { payload }) => {
      state.province = payload as any;
    });
    builder.addCase(getDistrict.fulfilled, (state, { payload }) => {
        state.district = payload as any;      
      });
      builder.addCase(getWards.fulfilled, (state, { payload }) => {
        state.ward = payload as any;
      });
      builder.addCase(getCharge.fulfilled, (state, { payload }) => {
        state.fee = payload as any;
        console.log("load", payload);
        
      });
  },
});

export default provinceSlice.reducer;
export const { setPage } = provinceSlice.actions;
