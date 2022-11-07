import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useProductCreationProviders = () => {
  const getProducts = () => {
    // const request = axios({
    //   method: "GET",
    //   baseURL: process.env.REACT_APP_BAZAR_URL,
    //   url: "/products/basic-products"
    // });
    // return trackPromise(request);
    return {
      data: {
        data: [
          {
            "basic_product": "Coffe",
            "uuid": "edd4f3cd-b2c8-49ea-8b7d-39e4903a306b"
          },
          {
            "basic_product": "Cocoa",
            "uuid": "b1dce6aa-90cd-43cc-abd3-27272933e9df"
          },
          {
            "basic_product": "Avocado",
            "uuid": "6ebb797c-b204-46f0-8086-f3ca298f1b5a"
          }
        ]
      }
    };
  };

  const getProductTypesByProduct = (productvalue: string) => {
    // const request = axios({
    //   method: "GET",
    //   baseURL: process.env.REACT_APP_BAZAR_URL,
    //   url: `/products/product-types/${ productvalue }`
    // });
    // return trackPromise(request);
    return {
      data: {
        data: [
          {
            "product_type": "Arabica Coffe",
            "uuid": "28c44271-39ae-4719-b18f-24dd4d648391"
          },
          {
            "product_type": "Robusta Coffe",
            "uuid": "28c44271-39ae-4719-b18f-24dd4d648392"
          }
        ]
      }
    };
  };

  const getVarietiesByProduct = (productvalue: string) => {
    // const request = axios({
    //   method: "GET",
    //   baseURL: process.env.REACT_APP_BAZAR_URL,
    //   url: `/products/varieties/${ productvalue }`
    // });
    // return trackPromise(request);
    return {
      data: {
        data: [
          {
            "variety": "Arabica Coffe",
            "uuid": "28c44271-39ae-4719-b18f-24dd4d648393"
          },
          {
            "variety": "Robusta Coffe",
            "uuid": "28c44271-39ae-4719-b18f-24dd4d64839f"
          }
        ]
      }
    };
  };

  const getSustainabilityCertificationsItems = () => {
    // const request = axios({
    //   method: "GET",
    //   baseURL: process.env.REACT_APP_BAZAR_URL,
    //   url: "/products/sustainability-certifications"
    // });
    // return trackPromise(request);
    return {
      data: {
        data: [
          {
            "certification": "ISO 14001",
            "uuid": "b354a70c-5600-4e37-89a3-35b4ddef01fc"
          },
          {
            "certification": "ECO-OK",
            "uuid": "c4d82cfb-a0e1-4a7a-8c27-20172d482476"
          },
          {
            "certification": "Global GAP",
            "uuid": "2d326650-de5c-4aa9-9d8e-8b353799153c"
          },
          {
            "certification": "SA8000",
            "uuid": "1e6725df-b5bf-47e6-a73c-3ab715c77550"
          },
        ]
      }
    };
  };

  const getIncoterms = () => {
    // const request = axios({
    //   method: "GET",
    //   baseURL: process.env.REACT_APP_BAZAR_URL,
    //   url: "/products/incoterms"
    // });
    // return trackPromise(request);
    return {
      data: {
        data: [
          {
            "incoterm": "Delivery at place (DAP)",
            "uuid": "be657d4c-9b6f-44c7-aa78-bfae7b8325c1"
          },
          {
            "incoterm": "Free on board (FOB)",
            "uuid": "4ed2d718-ae7b-4df7-baf6-b4f69b433c51"
          },
          {
            "incoterm": "Cost, insurance and freight (CIF)",
            "uuid": "e31a655d-b244-425d-b47b-96da5ef56a51"
          },
          {
            "incoterm": "Ex works (EXW)",
            "uuid": "53d87d43-fdf4-4c12-9ba9-2a02a941f557"
          }
        ]
      }
    };
  };

  const getMinimumOrders = () => {
    // const request = axios({
    //   method: "GET",
    //   baseURL: process.env.REACT_APP_BAZAR_URL,
    //   url: "/products/minimum-orders"
    // });
    // return trackPromise(request);
    return {
      data: {
        data: [
          {
            "minimum_order": "Bags (DHL)",
            "uuid": "f4a537bf-6f8f-46a0-99a6-51eb078006bd"
          },
          {
            "minimum_order": "A Continer",
            "uuid": "c4d11103-06f8-4dc1-84fa-514599a12769"
          },
          {
            "minimum_order": "Multiple Continers",
            "uuid": "a61fc673-59a1-4b15-89a1-cd446d2575b1"
          }
        ]
      }
    };
  };

  return {
    getProducts,
    getProductTypesByProduct,
    getVarietiesByProduct,
    getSustainabilityCertificationsItems,
    getIncoterms,
    getMinimumOrders,
  };
};

export default useProductCreationProviders;