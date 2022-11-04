import React from "react";
import IconLogo from "../../../../assets/svg/icons/iconLogo";

const Login: React.FC = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon_content">
        <p className="coming-soon_content_title">
            Coming Soon
        </p> 

        <p className="coming-soon_content_text">
          We are working building the first sustainable network of buyers and sellers of sourced commodities.
        </p>
        <IconLogo></IconLogo>
      </div>
    </div>
  );
};

export default Login;
