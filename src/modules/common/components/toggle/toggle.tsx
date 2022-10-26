import { IToggleProps } from "./interfaces";

const Toggle: React.FC<IToggleProps> = (props) => {
  const { label, } = props;

  return (
    <div className="container">
      { label }{ " " }
      No
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox"
          name={ label } id={ label } />
        <label className="label" htmlFor={ label }>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      Yes
    </div>
  );
};

export default Toggle;