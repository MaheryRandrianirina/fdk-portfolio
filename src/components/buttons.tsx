import { FC, PropsWithChildren } from "react";

const Button : FC<PropsWithChildren & {
    className: string
}> = ({children, className})=>{
    return <button className={"btn " + className}>{children}</button>
}

const PrimaryButton: FC<PropsWithChildren & {
    className?: string
}> = ({children, className})=>{
    return <Button className={"btn-primary text-light" + (className ? (" " + className) : "")}>{children}</Button>
}

export {
    Button,
    PrimaryButton
}