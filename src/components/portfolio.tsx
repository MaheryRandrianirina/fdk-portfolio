import { 
    Dispatch, 
    MouseEventHandler,
    ReactElement, 
    SetStateAction, 
    useEffect,
    useState 
} from "react";
import { Header } from "./header";
import { ClickMenuContext } from "../contexts";
import { activeItemType } from "../types/components-props-types";
import { Banner } from "./sections/banner";
import { ServicesSection } from "./sections/services";
import { useInView } from "react-intersection-observer";

const useCustomInView = (onInView: (entry?: IntersectionObserverEntry)=>void) => {
    const { ref, inView, entry } = useInView({ threshold: 0.65 });
  
    useEffect(() => {
      if (inView) {
        onInView(entry);
      }
    }, [inView, onInView, entry]);
  
    return ref;
};

export function Portfolio(): ReactElement {

    const [activeItem, setActiveItem]: [
        activeItem: activeItemType,
        setActiveItem: Dispatch<SetStateAction<activeItemType>>
    ]  = useState("home" as activeItemType);

    const ref1 = useCustomInView((entry)=>{ 
        console.log("on view 1")
        setActiveItem(i => i !== "home" ? "home" : i);
    });

    const ref2 = useCustomInView((entry)=>{ 
        console.log("on view 2")
        setActiveItem(i => i !== "services" ? "services" : i);
    });

    const clickMenuHandler: MouseEventHandler<HTMLLIElement> = (e)=>{
        setActiveItem(e.currentTarget.classList[0] as activeItemType);
    }

    return <div id="portfolio" className="bg-dark">
        <ClickMenuContext.Provider value={clickMenuHandler}>
            <Header active={activeItem}/>
        </ClickMenuContext.Provider>
        <div className="container">
            <Banner ref={ref1}/>
            <ServicesSection ref={ref2}/>
        </div>
        
    </div>
}
