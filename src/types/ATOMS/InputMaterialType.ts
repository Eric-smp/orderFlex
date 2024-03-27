import { ChangeEventHandler, HTMLAttributes, HTMLInputTypeAttribute } from "react"

export interface TInputMaterial {
    placeholder:string
    type:HTMLInputTypeAttribute
    label:string
    id:string
    isAutoComplete?:string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
    register?:any
    
    
}