import axios from "axios";
import { IProduct } from "../../components/pages/products/product";

export async function getProductsApi(
  skip?: number,
  limit?: number
): Promise<Array<IProduct>> {
  const skipQuery = skip || limit ? `?limit=${limit}&&skip=${skip}` : ``;
  const result = await axios.get(`https://dummyjson.com/products${skipQuery}`);
  return result.data.products;
}
