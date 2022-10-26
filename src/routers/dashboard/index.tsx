import { RouteObject } from "react-router-dom";
import CreateProduct from "../../modules/product/pages/createProduct";
import CompanyCreation from "../../modules/dashboard/screens/companyCreation";


const dashboardRoutes: RouteObject[] = [
  {
    path: "complete-registration",
    element: <CompanyCreation />,
  },
  {
    path: "home",
    element: <h1>Home</h1>,
  },
  {
    path: "create-product",
    element: <CreateProduct />
  }
];

export default dashboardRoutes;
