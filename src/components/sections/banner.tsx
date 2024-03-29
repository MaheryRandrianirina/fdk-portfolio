import { LegacyRef, forwardRef } from "react";
import { ProgrammingSvg } from "../svg/ProgrammingSvg";
import { PrimaryButton } from "../buttons";


export const Banner = forwardRef((props, ref: LegacyRef<HTMLElement>)=>{
    return <section ref={ref} id="banner" className="bg-dark d-flex justify-content-between align-items-center" style={{marginBottom: "48px", paddingTop: "60px"}}>
        <div style={{width: "350px"}} className="ms-2">
            <h1 className="text-light" style={{marginBottom: "24px"}}>FDK - Fast Data Keys</h1>
            <p className="text-light" style={{marginBottom: "24px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi expedita sint autem, voluptatum tempora mollitia at, omnis, voluptatem dolores deleniti vitae facilis? Autem deserunt fugit fuga possimus sequi dolorem?</p>
            <PrimaryButton className="cta">Nous contacter</PrimaryButton>            
        </div>
        <ProgrammingSvg/>
    </section>
})