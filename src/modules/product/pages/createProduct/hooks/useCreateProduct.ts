import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ICreateProductProps, TCreateProductFormKeys } from "../interfaces";
import { createProductFormValidator } from "../validators";

const useCreateProduct = () => {
  // States
  const [hasError, setHasError] = useState(false);

  // Form
  const { control, register, handleSubmit, formState: { errors: createProductErrors } } = useForm<ICreateProductProps>({
    resolver: yupResolver(createProductFormValidator),
    mode: "all",
  });

  const assignInputName = (inputName: TCreateProductFormKeys): string => {
    return inputName.toString();
  };

  const hasErrorsInput = (inputName: TCreateProductFormKeys): boolean => {
    return createProductErrors[inputName] !== undefined;
  };

  const getMessageErrorInput = (inputName: TCreateProductFormKeys): string => {
    return createProductErrors[inputName]?.message || "This input is mandatory";
  };

  const handleCreateProduct = async (formData: ICreateProductProps) => {
    setHasError(false);
    try {
      console.log(`Product created: ${ formData }`);
    } catch (error) {
      setHasError(true);
    }
  };

  const onSubmitForm = (formData: ICreateProductProps) => {
    handleCreateProduct(formData);
  };

  return {
    control,
    register,
    handleSubmit,
    onSubmitForm,
    assignInputName,
    hasErrorsInput,
    getMessageErrorInput,
    hasError,
  };
};

export default useCreateProduct;