import axios from "axios";
import { store } from "..";
import { setProducts } from "../reducers/productsSlice";
import { getProductsApi } from "../services/getProductsApi";

export async function getProductsAction(skip?: number, limit?: number) {
  try {
    //   store.dispatch(start loading);
    const result = await getProductsApi(skip, limit);
    store.dispatch(setProducts(result));
  } catch (error) {
    //   store.dispatch(bump error);
    alert("something went wrong!!");
  } finally {
    //   store.dispatch(stop loading);
  }
}
