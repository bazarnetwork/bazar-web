import { IToggleProps } from "./interfaces";

const Toggle: React.FC<IToggleProps> = (props) => {
  const { label, name } = props;
  return (
    <>
      <label htmlFor={ name }>{ label }</label>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={ name }
          id={ name }
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