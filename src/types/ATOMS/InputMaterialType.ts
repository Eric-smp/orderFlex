import { ChangeEventHandler, HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react"

export type TInputMaterial = {
    placeholder:string
    type:HTMLInputTypeAttribute
    label:string
    id:string
    
    value?: string
    register?:any
    autoComplete:HTMLInputTypeAttribute
    error?: boolean
    messageError?:string
    prefixIcon?: ReactNode
    
    
} & React.HTMLProps<HTMLInputElement>