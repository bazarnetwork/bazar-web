import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { getLocalStorageItem } from "../../../../common/helpers";

const useProductCreationProviders = () => {
  const getProducts = () => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: "/products/basic-products",
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getProductTypesByProduct = (productvalue: string) => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: `/products/product-types/${ productvalue }`,
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getVarietiesByProduct = (productvalue: string) => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: `/products/varieties/${ productvalue }`,
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getSustainabilityCertificationsItems = () => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: "/products/sustainability-certifications",
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getIncoterms = () => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: "/products/incoterms",
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getMinimumOrders = () => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: "/products/minimum-orders",
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
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