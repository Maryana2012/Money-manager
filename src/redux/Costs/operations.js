import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:8000';

export const addCost = createAsyncThunk('/costs/addCost',
async({date, sum, category, comment}, thunkAPI)=>{
   try {
     const response = await axios.post(`${BASE_URL}/costs`, {date, sum, category, comment});
     return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
   }
})