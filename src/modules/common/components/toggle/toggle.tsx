import { IToggleProps } from "./interfaces";

const Toggle: React.FC<IToggleProps> = (props) => {
  const { label, name, checked, onChange } = props;
  return (
    <>
      <label className="productLabel f1" htmlFor={ name }><span className="required">* </span>{ label }</label>
      <div className="toggle-switch small-switch jcCenter">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={ name }
          id={ name }
          checked={ checked }
          onChange={ onChange }
        />
        <label className="toggle-switch-label" htmlFor={ name }>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </>
  );
  // return (
  //   <div className="container">
  //     { label }{ " " }
  //     No
  //     <div className="toggle-switch">
  //       <input type="checkbox" className="checkbox"
  //         name={ label } id={ label } />
  //       <label className="label" htmlFor={ label }>
  //         <span className="inner" />
  //         <span className="switch" />
  //       </label>
  //     </div>
  //     Yes
  //   </div>
  // );
};

export default Toggle;