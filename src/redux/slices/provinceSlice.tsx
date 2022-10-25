import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../store";

type Province = {
  province: [],
  district: [],
  ward: []
};

const initialState: Province = {
    province: [],
    district: [],
    ward: []

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
export const getWards = createAsyncThunk("province/getwards", async (id: number) => {
        const district = {
          'district_id': id
        }       
        const res = await axios.post('https://online-gateway.ghn.vn/shiip/public-api/master-data/ward', JSON.stringify(district), {
          headers: {
            'Content-Type': 'application/json',
            'token': '422b151b-4b63-11ed-8008-c673db1cbf27'
          },
        })
        return res.data.data
        
})

export const getSevicePackage = createAsyncThunk("province/getsevicepackage", async (data: number) => {
      const param = {
        'shop_id': 3348656,
        'from_district': 3440,
        'to_district': data
      }
      const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services", param ,
      {
        headers: {
          'token': '422b151b-4b63-11ed-8008-c673db1cbf27'
      }
      });
      return res.data.data
      
})


export const getFee = createAsyncThunk("province, getfee", async (data: any) => { 
        const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee", data , {
          headers: {
            'token': '422b151b-4b63-11ed-8008-c673db1cbf27',
            'shop_id': 3348656
        }
        })      
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
      builder.addCase(getSevicePackage.fulfilled, (state, { payload }) => {
        
      });
      builder.addCase(getFee.fulfilled, (state, { payload }) => {
        
      });
  },
});

export default provinceSlice.reducer;
export const { setPage } = provinceSlice.actions;
