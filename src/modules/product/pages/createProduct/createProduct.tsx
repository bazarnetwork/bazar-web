import Button from "../../../common/components/button/button";
import { EBtnVisibleType } from "../../../common/components/button/interfaces";
import Checkbox from "../../../common/components/checkbox/checkbox";
import InputText from "../../../common/components/inputText/inputText";
import InputTextarea from "../../../common/components/inputTextarea";
import Toggle from "../../../common/components/toggle";
import { ELarge } from "../../../common/interfaces";
import useCreateProduct from "./hooks/useCreateProduct";

const CreateProduct: React.FC<any> = (props) => {
  const { } = props;
  const {
    control,
    register,
    handleSubmit,
    onSubmitForm,
    assignInputName,
    hasErrorsInput,
    getMessageErrorInput,
    hasError,
  } = useCreateProduct();

  return (
    <div className="createProductContainer">
      <div className="createProductContainer__bg">
        <img src="/assets/images/create-product.png" alt="bazar Auth" />
      </div>
      <div className="createProductContainer__content">
        <h2>Let's create your product</h2>

        <p>This is where we create a contract with terms and conditions that our network of buyers will see once approved</p>
        <form onSubmit={ () => { } } className="createProductContainer__content__row">
          <InputText
            register={ register }
            name={ assignInputName("product") }
            label={ "Product" }
            type={ "text" }
            hasError={ hasErrorsInput("product") }
            errorMessage={ getMessageErrorInput("product") }
            placeholder={ "Select product" }
            required />
          <div className="form-row">
            <div className="form-row__input">
              <label>Product Type</label>
              <input
                name={ "productType" }
                placeholder={ "Select product type" } />
            </div>
            <div className="form-row__input">
              <label>Varieties</label>
              <input
                name={ "varieties" }
                placeholder={ "Select a category" } />
            </div>
          </div>
          <InputText
            register={ register }
            name={ assignInputName("productionCapacity") }
            label={ "What is your production capacity per year? (kg)" }
            type={ "number" }
            hasError={ hasErrorsInput("productionCapacity") }
            errorMessage={ getMessageErrorInput("productionCapacity") }
            placeholder={ "E.g. 1800" }
            required />
          <InputText
            register={ register }
            name={ assignInputName("dateInPort") }
            label={ "Date in port" }
            type={ "date" }
            hasError={ hasErrorsInput("dateInPort") }
            errorMessage={ getMessageErrorInput("dateInPort") }
            required />
          <div className="form-row">
            <div className="form-row__input">
              <label>What sustainability certifications do you have? </label>
            </div>
          </div>
          <div className="form-row">
            <Checkbox
              control={ control }
              label="ISO 140001"
              name={ assignInputName("sustainabilityCertifications") }
            />
            <input name={ "ecoOk" } type="checkbox" />
            <label className="inputTextContainer__label">ECO-OK</label>
          </div>
          <div className="form-row">
            <input name={ "globalGap" } type="checkbox" />
            <label className="inputTextContainer__label">Global Gap</label>
            <input name={ "sa8000" } type="checkbox" />
            <label className="inputTextContainer__label">SA 8000</label>
          </div>
          <div className="form-row">
            <input name={ "eurepgap" } type="checkbox" />
            <label className="inputTextContainer__label">EUREPGAP</label>
            <input name={ "saiPlatform" } type="checkbox" />
            <label className="inputTextContainer__label">SAI-Platform</label>
          </div>
          <div className="form-row">
            <input name={ "rainforestAlliance" } type="checkbox" />
            <label className="inputTextContainer__label">Rainforest Alliance</label>
            <input name={ "haccp" } type="checkbox" />
            <label className="inputTextContainer__label">HACCP</label>
          </div>
          <div className="form-row">
            <input name={ "sasaPlatform" } type="checkbox" />
            <label className="inputTextContainer__label">SASA-Platform</label>
            <input name={ "basc" } type="checkbox" />
            <label className="inputTextContainer__label">BASC</label>
          </div>
          <div className="form-row">
            <input name={ "coleacp" } type="checkbox" />
            <label className="inputTextContainer__label">COLEACP</label>

            <input name={ "noCertificate" } type="checkbox" />
            <label className="inputTextContainer__label">No certificate</label>
          </div>
          <div className="form-row">
            <input name={ "icaBpa" } type="checkbox" />
            <label className="inputTextContainer__label">ICA BPA</label>

            <input name={ "other" } type="checkbox" />
            <label className="inputTextContainer__label">Other</label>
          </div>

          <InputText
            register={ register }
            name={ assignInputName("companyAssociation") }
            label={ "Specify your company's guild or association" }
            type={ "text" }
            hasError={ hasErrorsInput("companyAssociation") }
            errorMessage={ getMessageErrorInput("companyAssociation") }
            placeholder={ "Write your associations" }
            required />

          <InputText
            register={ register }
            name={ assignInputName("saleCapacity") }
            label={ "How much do you have available for sale? (kg)" }
            type={ "number" }
            hasError={ hasErrorsInput("saleCapacity") }
            errorMessage={ getMessageErrorInput("saleCapacity") }
            placeholder={ "E.g. 1.800" }
            required />
          <div className="form-row">
            <div className="form-row__input">
              <label>How much do you have available for sale? (kg)</label>
              <input
                name={ "minimumOrder" }
                type={ "number" }
                placeholder={ "THIS SHOULD BE A DROPDOWN" }
                required />
            </div>
            <div className="form-row__input">
              <InputText
                register={ register }
                name={ assignInputName("pricePerKg") }
                label={ "Expected price per kg (USD)" }
                type={ "number" }
                hasError={ hasErrorsInput("pricePerKg") }
                errorMessage={ getMessageErrorInput("pricePerKg") }
                placeholder={ "E.g. 1.800" }
                required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row__input">
              <label>Choose your preferred INCOTERMS </label>
            </div>
          </div>
          <div className="form-row">
            <input name={ "dap" } type="checkbox" />
            <label className="inputTextContainer__label">Delivery at place (DAP)</label>
            <input name={ "fob" } type="checkbox" />
            <label className="inputTextContainer__label">Free on board (FOB)</label>
          </div>
          <div className="form-row">
            <input name={ "cif" } type="checkbox" />
            <label className="inputTextContainer__label">Cost, insurance and freight</label>
            <input name={ "exw" } type="checkbox" />
            <label className="inputTextContainer__label">Ex works</label>
          </div>
          <div className="form-row">
            <Toggle
              name={ "assistanceNeeded" }
              label={ "Need assistance with logistics?" }
            />
          </div>
          <InputTextarea
            register={ register }
            name={ assignInputName("additionalDescription") }
            label={ "Additional description (opt)" }
            hasError={ hasErrorsInput("additionalDescription") }
            errorMessage={ getMessageErrorInput("additionalDescription") }
            placeholder={ "Write description" }
            rows={ 5 }
            required />
          <div className="form-row">
            <div className="form-row__input">
              <Button visibleType={ EBtnVisibleType.clear } large={ ELarge.full } type="reset">Cancel</Button>
            </div>
            <div className="form-row__input">
              <Button visibleType={ EBtnVisibleType.solid } large={ ELarge.full } type="reset">Next</Button>
            </div>
          </div>
        </form >
      </div >
    </div >
  );
};

export default CreateProduct;

