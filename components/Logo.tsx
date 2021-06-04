import React from "react";

interface LogoProps {
  width: string;
}

const Logo: React.FC<LogoProps> = ({ width }) => {
  return <img src="/assets/logo/white.png" width={width} />;
};

export default Logo;
