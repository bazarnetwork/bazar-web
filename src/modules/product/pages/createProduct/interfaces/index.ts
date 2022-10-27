import { AnySchema, string } from "yup";

export interface ICreateProductProps {

}

export interface ICreateProductProps {
  product: string;
  productType: string;
  varieties: string;
  productionCapacity: number;
  dateInPort: Date;
  sustainabilityCertifications: Array<string>;
  companyAssociation?: string;
  saleCapacity: number;
  minimumOrder: string;
  pricePerKg: number;
  preferredIncoterms: Array<string>;
  assistanceNeeded: boolean;
  additionalDescription?: string;
}

export type TCreateProductFormKeys = keyof ICreateProductProps;

export type TCreateProductFormValidatorShapeKeys = {
  [type in TCreateProductFormKeys]: AnySchema
};