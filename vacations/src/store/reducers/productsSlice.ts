import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../components/pages/products/product";
import { axiosApi } from "../axios.instance";

interface ProductsState {
  products: Array<IProduct>;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state: ProductsState,
      action: PayloadAction<Array<IProduct>>
    ) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
