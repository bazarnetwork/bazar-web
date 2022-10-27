import { TCreateProductFormValidatorShapeKeys } from "../interfaces";
import * as Yup from "yup";

export const createProductFormValidator = Yup.object().shape<TCreateProductFormValidatorShapeKeys>({
  product: Yup.string().trim().required("This input is mandatory"),
  productType: Yup.string().trim().required("This input is mandatory"),
  varieties: Yup.string().trim().required("This input is mandatory"),
  productionCapacity: Yup.number().min(1, "Must be more than 0").required("This input is mandatory"),
  dateInPort: Yup.date().min(new Date()).required("This input is mandatory"),
  sustainabilityCertifications: Yup.array().ensure().compact().of(Yup.string().trim().optional()).required("This input is mandatory"),
  companyAssociation: Yup.string().trim().optional(),
  saleCapacity: Yup.number().min(1, "Must be more than 0").required("This input is mandatory"),
  minimumOrder: Yup.string().trim().required("This input is mandatory"),
  pricePerKg: Yup.number().positive("Must be more than 0").required("This input is mandatory"),
  preferredIncoterms: Yup.array().ensure().compact().of(Yup.string().trim().optional()).required("This input is mandatory"),
  assistanceNeeded: Yup.boolean().required("This input is mandatory"),
  additionalDescription: Yup.string().trim().optional(),
});