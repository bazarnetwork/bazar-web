import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useProductCreationProviders from "../providers";
import { IProductCreationProps, TProductCreationFormKeys } from "../interfaces";
import { productCreationFormValidator } from "../validators";

const useCreateProduct = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [products, setProducts] = useState<Array<{ label: string; value: string; }>>([]);
  const [productTypes, setProductTypes] = useState<Array<{ label: string; value: string; }>>([]);
  const [varieties, setVarieties] = useState<Array<{ label: string; value: string; }>>([]);
  const [sustainabilityCertificationsItems, setsustainabilityCertificationsItems] = useState<Array<{ label: string; value: string; }>>([]);
  const [incotermsItems, setIncotermsItems] = useState<Array<{ label: string; value: string; }>>([]);
  const [minimumOrders, setMinimumOrders] = useState<Array<{ label: string; value: string; }>>([]);

  const [displayPicture, setDisplayPicture] = useState<string>();
  const [assistanceNeeded, setAssistanceNeeded] = useState<boolean>(false);
  const [productPictures, setProductPictures] = useState<Array<Blob>>();
  const [certifications, setCertifications] = useState<Array<string>>([]);
  const [incoterms, setIncoterms] = useState<Array<string>>([]);
  const [certificationsFiles, setCertificationsFiles] = useState<any>([]);
  const [hasError, setHasError] = useState(false);

  //Providers
  const { getProducts, getProductTypesByProduct, getVarietiesByProduct, getSustainabilityCertificationsItems, getMinimumOrders, getIncoterms } = useProductCreationProviders();

  // Form
  const methods = useForm<IProductCreationProps>({
    resolver: yupResolver(productCreationFormValidator),
    mode: "all",
  });
  const { control, register, watch, handleSubmit, getValues, formState: { errors: createProductErrors } } = methods;

  const watchProduct = watch("product");

  const assignInputName = (inputName: TProductCreationFormKeys): string => {
    return inputName.toString();
  };

  const hasErrorsInput = (inputName: TProductCreationFormKeys): boolean => {
    return createProductErrors[inputName] !== undefined;
  };

  const getMessageErrorInput = (inputName: TProductCreationFormKeys): string => {
    return createProductErrors[inputName]?.message || "This input is mandatory";
  };

  const submitForm = (data: IProductCreationProps) => {
    setHasError(false);
    data.uuid = localStorage.getItem("uuid") || "";
    data.sustainabilityCertifications = certifications;
    data.incoterms = incoterms;
    data.assistanceNeeded = assistanceNeeded;
    try {
      let formData = new FormData();
      const body = {
        basic_product_uuid: data.product,
        product_type_uuid: data.productType,
        variety_uuid: data.varieties,
        capacity_per_year: data.saleCapacity,
        date_in_port: data.dateInPort,
        guild_or_association: data.companyAssociation,
        available_for_sale: data.saleCapacity,
        minimum_order_uuid: data.minimumOrder,
        expected_price_per_kg: data.pricePerKg,
        incoterm_uuid: data.incoterms,
        assistance_logistic: data.assistanceNeeded,
        additional_description: data.additionalDescription,
        uuid_user: data.uuid,
        sustainability_certifications_uuid: data.sustainabilityCertifications,
      };
      formData.append("body", JSON.stringify(body));
      console.log(`Product created: ${ formData }`);
    } catch (error) {
      console.log(`Failed: ${ error }`);
      setHasError(true);
    }
  };

  const handleTabSwitch = (index: number) => {
    if (index === 0) {
      setActiveTabIndex(1);
    } else {
      setActiveTabIndex(0);
    }
  };

  const onGetProducts = async () => {
    const resp = await getProducts();
    const productList = resp.data.data.map((product: any) => ({
      label: product.basic_product,
      value: product.uuid,
    }));
    setProducts(productList);
  };

  const onGetProductTypes = async () => {
    const resp = await getProductTypesByProduct(watchProduct);
    const productTypeList = resp.data.data.map((productType: any) => ({
      label: productType.product_type,
      value: productType.uuid,
    }));
    setProductTypes(productTypeList);
  };

  const onGetVarieties = async () => {
    const resp = await getVarietiesByProduct(watchProduct);
    const varietiesList = resp.data.data.map((variety: any) => ({
      label: variety.variety,
      value: variety.uuid,
    }));
    setVarieties(varietiesList);
  };

  const onGetsustainabilityCertificationsItems = async () => {
    const resp = await getSustainabilityCertificationsItems();
    const certificationsList = resp.data.data.map((certification: any) => ({
      label: certification.certification,
      value: certification.uuid,
    }));
    setsustainabilityCertificationsItems(certificationsList);
  };

  const onGetIncotermsItems = async () => {
    const resp = await getIncoterms();
    const incotermsList = resp.data.data.map((incoterm: any) => ({
      label: incoterm.incoterm,
      value: incoterm.uuid,
    }));
    setIncotermsItems(incotermsList);
  };

  const onGetMinimumOrders = async () => {
    const resp = await getMinimumOrders();
    const minimumOrderList = resp.data.data.map((minimumOrder: any) => ({
      label: minimumOrder.minimum_order,
      value: minimumOrder.uuid,
    }));
    setMinimumOrders(minimumOrderList);
  };

  const onChangeCertificationCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(productPictures);
    const value = event.target.value;
    const newCertifications = [...certifications];
    const index = newCertifications.indexOf(value);
    if (index === -1) {
      newCertifications.push(value);
    } else {
      newCertifications.splice(index, 1);
    }
    setCertifications(newCertifications);
  };

  const onChangeIncotermCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newIncoterms = [...incoterms];
    const index = newIncoterms.indexOf(value);
    if (index === -1) {
      newIncoterms.push(value);
    } else {
      newIncoterms.splice(index, 1);
    }
    setIncoterms(newIncoterms);
  };

  const OnChangeAssistanceNeeded = () => {
    setAssistanceNeeded(!assistanceNeeded);
  };

  const onChangeCertificationFile = (certification: string) => (fileObj: any) => {
    const newCertificationsFiles = { ...certificationsFiles };
    newCertificationsFiles[certification] = fileObj;
    setCertificationsFiles(newCertificationsFiles);
  };

  useEffect(() => {
    onGetProducts();
    onGetsustainabilityCertificationsItems();
    onGetIncotermsItems();
    onGetMinimumOrders();
  }, []);

  useEffect(() => {
    watchProduct !== (null || undefined) && onGetProductTypes();
    watchProduct !== (null || undefined) && onGetVarieties();
  }, [watchProduct]);

  useEffect(() => {
    if (productPictures && productPictures?.length > 0)
      setDisplayPicture(URL.createObjectURL(productPictures[0]));
  }, [productPictures]);

  return {
    methods,
    control,
    register,
    getValues,
    handleSubmit,
    submitForm,
    assignInputName,
    hasErrorsInput,
    getMessageErrorInput,
    hasError,
    handleTabSwitch,
    activeTabIndex,
    products,
    productTypes,
    varieties,
    sustainabilityCertificationsItems,
    incoterms: incotermsItems,
    minimumOrders,
    certifications,
    assistanceNeeded,
    OnChangeAssistanceNeeded,
    productPictures,
    displayPicture,
    setProductPictures,
    onChangeCertificationCheckbox,
    onChangeIncotermCheckbox,
    onChangeCertificationFile,
  };
};

export default useCreateProduct;