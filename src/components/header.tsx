import { FC, MouseEventHandler, useContext } from "react";
import { activeItemType } from "../types/components-props-types";
import { ClickMenuContext } from "../contexts";

const Header: FC<{
    active: activeItemType
}> = ({active})=>{
    
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <Home isActive={active === "home"}/>
            <Services isActive={active === "services"}/>
            <Technologies isActive={active === "techno"}/>
            <Contact isActive={active === "contact"}/>
        </ul>
      </div>
    </div>
  </nav>
}

const Home: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"home nav-item" + (isActive ? " active" : "")} onClick={clickItemEventHandler}>Accueil</li>
}

const Services: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"services nav-item" + (isActive ? " active" : "")} onClick={clickItemEventHandler}>Services</li>
}

const Technologies: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"techno nav-item"  + (isActive ? " active" : "")} onClick={clickItemEventHandler}>Technologies</li>
}

const Contact: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"contact nav-item" + (isActive ? " active" : "")} onClick={clickItemEventHandler}>Contact</li>
}

export {
    Header
}