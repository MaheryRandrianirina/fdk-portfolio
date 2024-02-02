import { FC, PropsWithChildren } from "react";

export const ServicesSection: FC<{}> = ()=>{
    return <section id="services" className="text-light"  style={{marginBottom: "48px"}}>
        <h2 style={{marginBottom: "24px"}}>Nos services</h2>
        <div className="d-flex justify-content-between">
            <Service title="Site vitrine">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto porro laboriosam possimus libero omnis laudantium eaque officia et, alias odio saepe nam temporibus, consectetur praesentium optio corporis quas deleniti sed.
            </Service>
            <Service title="Application web">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi vel reprehenderit dolore, aliquam ipsum voluptas! Fugit corrupti iste obcaecati iusto eos officia adipisci sit nobis dolorum, sequi delectus necessitatibus.</Service>
            <Service title="Site e-commerce">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi vel reprehenderit dolore, aliquam ipsum voluptas! Fugit corrupti iste obcaecati iusto eos officia adipisci sit nobis dolorum, sequi delectus necessitatibus.</Service>
        </div>
    </section>
}

const Service: FC<PropsWithChildren & {
    className?: string,
    title: "Site vitrine" | "Application web" | "Site e-commerce"
}> = ({children, className, title})=>{
    return <div className={"service" + (" " + className)}>
        <h3>{title}</h3>
        <p>{children}</p>
    </div>
}