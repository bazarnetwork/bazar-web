import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { getLocalStorageItem } from "../helpers";

const useCommonProviders = () => {
  const getCountries = () => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_AUTH_URL,
      url: "/country",
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getCitiesByCountryId = (countryId: string | number) => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_AUTH_URL,
      url: `/city/${ countryId }`,
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  const getAvatars = () => {
    const request = axios({
      method: "GET",
      baseURL: process.env.REACT_APP_BAZAR_URL,
      url: "/avatars",
      headers: {
        Authorization: `Bearer ${ getLocalStorageItem('accessToken') }`
      },
    });
    return trackPromise(request);
  };

  return {
    getCountries,
    getCitiesByCountryId,
    getAvatars,
  };
};

export default useCommonProviders;