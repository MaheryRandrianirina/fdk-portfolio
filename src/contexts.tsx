import { Context, MouseEventHandler, createContext } from "react";
import { ClassNamesType } from "./components/portfolio";

const ClickMenuContext: Context<MouseEventHandler<HTMLLIElement>> = createContext((e)=>{
    console.log(e)
});

const ClassnamesContext: Context<ClassNamesType> = createContext({
    banner: "",
    services: "",
    technos: ""
});

export {
    ClickMenuContext,
    ClassnamesContext
}