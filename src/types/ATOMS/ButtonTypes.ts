import { MouseEventHandler } from "react"

export type TButton = {
    width?: string
    height?:string
    text: string
    type?: "button" | "submit" | "reset" | undefined
    backgroundColor:string
    color:string
    onClick?:MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}