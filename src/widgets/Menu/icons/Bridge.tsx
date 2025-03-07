import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 455 455" {...props}>
        <path xmlns="http://www.w3.org/2000/svg" d="M455,114.25v-30H0v30h30v40H0v216.5h65.993c0,0,0-59.767,0-59.767c0-35.435,28.768-64.161,64.256-64.161  c35.488,0,64.256,28.726,64.256,64.161L194.5,370.75h65.996v-59.767c0-35.435,28.768-64.161,64.256-64.161  s64.256,28.726,64.256,64.161c0,0,0,59.767,0,59.767H455v-216.5h-30v-40H455z M212.5,154.25H60v-40h152.5V154.25z M395,154.25H242.5  v-40H395V154.25z"/>
    </Svg>
  );
};

export default Icon;
