import { FC } from "react";
import svg from "../../assets/animated_programming_svg.svg";

export const ProgrammingSvg: FC<{}> = () => {
  return <iframe style={{height: "500px", width: "50%"}} src={svg} title="programming"></iframe>
}

