import { FC } from "react";
import { ProgrammingSvg } from "../svg/ProgrammingSvg";
import { PrimaryButton } from "../buttons";

export const Banner: FC<{}> = ()=>{
    return <section id="banner" className="d-flex justify-content-around align-items-center px-4" style={{marginBottom: "48px"}}>
        <div style={{width: "350px"}} className="ms-2">
            <h1 className="text-light" style={{marginBottom: "24px"}}>FDK - Fast Data Keys</h1>
            <p className="text-light" style={{marginBottom: "24px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi expedita sint autem, voluptatum tempora mollitia at, omnis, voluptatem dolores deleniti vitae facilis? Autem deserunt fugit fuga possimus sequi dolorem?</p>
            <PrimaryButton className="cta">Nous contacter</PrimaryButton>            
        </div>
        <ProgrammingSvg/>
    </section>
}