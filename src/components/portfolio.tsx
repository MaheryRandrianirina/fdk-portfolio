import { 
    Dispatch, 
    MouseEventHandler, 
    ReactElement, 
    SetStateAction, 
    useState 
} from "react";
import { Header } from "./header";
import { ClickMenuContext } from "../contexts";
import { activeItemType } from "../types/components-props-types";
import { Banner } from "./sections/banner";
import { ServicesSection } from "./sections/services";

export function Portfolio(): ReactElement {

    const [activeItem, setActiveItem]: [
        activeItem: activeItemType,
        setActiveItem: Dispatch<SetStateAction<activeItemType>>
    ]  = useState("home" as activeItemType);

    const clickMenuHandler: MouseEventHandler<HTMLLIElement> = (e)=>{
        console.log(e.currentTarget.classList[0])
        setActiveItem(e.currentTarget.classList[0] as activeItemType);
    }
    
    return <div id="portfolio" className="bg-dark">
        <ClickMenuContext.Provider value={clickMenuHandler}>
            <Header active={activeItem}/>
        </ClickMenuContext.Provider>
        <Banner/>
        <ServicesSection/>
    </div>
}