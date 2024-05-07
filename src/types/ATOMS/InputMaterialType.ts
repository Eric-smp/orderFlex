import { ChangeEventHandler, HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react"

export interface TInputMaterial {
    placeholder:string
    type:HTMLInputTypeAttribute
    label:string
    id:string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
    register?:any
    autoComplete:HTMLInputTypeAttribute
    error?: boolean
    messageError?:string
    prefixIcon?: ReactNode
    
    
}