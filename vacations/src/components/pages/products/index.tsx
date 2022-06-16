import react, { useEffect } from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { getProductsAction } from "../../../store/async/getProductsAction";
import { useAppSelector } from "../../../store/hooks";
import Product, { IProduct } from "./product";

export default function ProductsPage() {
  const productsList = useAppSelector((state) => state.products.products);
  //   https://dummyjson.com/products?limit=10&skip=10&select=title,price
  const limit = 5;
  const skip = productsList.length;

  useEffect(() => {
    getProductsAction(skip, limit);
  }, []);

  const brands = getResultsBrands();

  return (
    <div
      style={{
        marginLeft: "40%",
      }}
    >
      <h1>
        Products Page
        <Button
          onClick={() => {
            getProductsAction(skip, limit);
          }}
        >
          Get More
        </Button>
      </h1>
      {brands.map((brand) => {
        return (
          <span>
            {brand}
            <input type="checkbox" />
          </span>
        );
      })}
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {productsList.map((p: IProduct) => {
          return <Product key={p.id} {...p} />;
        })}
      </List>
    </div>
  );
}

function getResultsBrands(productsList: Array<IProduct>) {
  const brandsObj = productsList.reduce((acc: any, item: IProduct) => {
    if (!acc[item.brand]) {
      acc[item.brand] = true;
    }
    return { ...acc };
  }, {});
  const brands = Object.values(brandsObj);
  return brands;
}

// const result = getResultsBrands([{ brand: "paz" }, { brand: "irit" }]);
// result.expect(["paz", "irit"]);
