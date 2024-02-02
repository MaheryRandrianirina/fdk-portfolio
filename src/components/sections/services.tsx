import { CSSProperties, FC, LegacyRef, PropsWithChildren, forwardRef } from "react";

export const ServicesSection = forwardRef((props, ref:LegacyRef<HTMLElement>)=>{
    return <section ref={ref} id="services" className="text-light px-4"  style={{marginBottom: "48px"}}>
        <h2 style={{marginBottom: "24px"}}>Nos services</h2>
        <div className="d-flex justify-content-between flex-wrap position-relative">
            <Service imgLink={"/vitrine.jpg"} title="Site vitrine">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto porro laboriosam possimus libero omnis laudantium eaque officia et, alias odio saepe nam temporibus, consectetur praesentium optio corporis quas deleniti sed.
            </Service>
            <Service style={{transform: "translateY(50%)"}} imgLink={"/app.jpg"} title="Application web">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi vel reprehenderit dolore, aliquam ipsum voluptas! Fugit corrupti iste obcaecati iusto eos officia adipisci sit nobis dolorum, sequi delectus necessitatibus.</Service>
            <Service imgLink={"/ecommerce.jpg"} title="Site e-commerce">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi vel reprehenderit dolore, aliquam ipsum voluptas! Fugit corrupti iste obcaecati iusto eos officia adipisci sit nobis dolorum, sequi delectus necessitatibus.</Service>
        </div>
    </section>
})

const Service: FC<PropsWithChildren & {
    className?: string,
    title: "Site vitrine" | "Application web" | "Site e-commerce",
    imgLink: string,
    style?: CSSProperties
}> = ({children, className, title, imgLink, style})=>{
    return <div style={style} className={"service position-relative" + (className ? " " + className : "")}>
        <div className="img-container position-relative">
            <h5 className="position-absolute text-light" style={{top: "12px", left: "12px"}}>{title}</h5>
            <img src={imgLink} alt="site vitrine"/>
        </div>
        <p className="bg-light text-dark start-0 end-0 p-3" style={{width: "calc(100% - 10px)"}}>{children}</p>
    </div>
}