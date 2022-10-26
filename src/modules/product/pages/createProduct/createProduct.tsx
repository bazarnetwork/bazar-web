import Toggle from "../../../common/components/toggle";
import { ICreateProductProps } from "./interfaces";

const CreateProduct: React.FC<ICreateProductProps> = (props) => {
  const { } = props;

  return (
    <div className="createProductContainer">
      <div className="createProductContainer__bg">
        <img src="/assets/images/create-product.png" alt="bazar Auth" />
      </div>
      <div className="createProductContainer__content">
        <h2>Let's create your product</h2>
        <p>This is where we create a contract with terms and conditions that our network of buyers will see once approved</p>
        <form onSubmit={ () => { } } className="createProductContainer__content__row">
          <div className="form-row">
            <div className="form-row__input">
              <label>Product</label>
              <input
                name={ "product" }
                placeholder={ "Select product" } />
            </div>
          </div>
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
          <div className="form-row">
            <div className="form-row__input">
              <label>What is your production capacity per year? (kg)</label>
              <input
                name={ "productionCapacity" }
                type={ "number" }
                placeholder={ "E.g. 1.800" }
                required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row__input">
              <label>Date in port</label>
              <input
                name={ "dateInPort" }
                type={ "date" }
                placeholder={ "dd mm, yyyy" }
                required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__input">
              <label>What sustainability certifications do you have? </label>
            </div>
          </div>
          <div className="form-row">
            <input name={ "iso140001" } type="checkbox" />
            <label className="inputTextContainer__label">ISO 140001</label>
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
          <div className="form-row">
            <div className="form-row__input">
              <label>Specify your company's guild or association</label>
              <input
                name={ "companyAssociation" }
                type={ "text" }
                placeholder={ "Write your associations" } />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row__input">
              <label>How much do you have available for sale? (kg)</label>
              <input
                name={ "saleCapacity" }
                type={ "number" }
                placeholder={ "E.g. 1.800" }
                required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row__input">
              <label>Minimum order</label>
              <input
                name={ "minimumOrder" }
                placeholder={ "Select option" }
                required />
            </div>
            <div className="form-row__input">
              <label>Expected price per kg (USD)</label>
              <input
                name={ "pricePerKg" }
                type={ "number" }
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
          <div className="form-row">
            <div className="form-row__input">
              <label>Additional description (opt)</label>
              <input
                name={ "additionalDescription" }
                type={ "textarea" }
                placeholder={ "Write description" } />
            </div>
          </div>
        </form >
      </div >
    </div >
  );
};

export default CreateProduct;

