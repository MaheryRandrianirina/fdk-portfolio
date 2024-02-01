import { Context, MouseEventHandler, createContext } from "react";

const ClickMenuContext: Context<MouseEventHandler<HTMLLIElement>> = createContext((e)=>{
    console.log(e)
});

export {
    ClickMenuContext
}