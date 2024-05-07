import {Dispatch, ReactNode, SetStateAction} from 'react'
import {TCreateOders, TCreateLogin, TLoginCoung} from '@/types'
export interface TGlobalProps{
    modalType: number
    setModalType:Dispatch<SetStateAction<number>>
    isModalOpen: string
    setIsModalOpen:Dispatch<SetStateAction<string>>
    testeFomr: ({nome, pedido}:TCreateOders) => void
    handlePostUser: ({name, username,cnpj,password}:TCreateLogin) => void
    loginCount: ({cnpj, senha}:TLoginCoung) => void
    notification:boolean
    setNotification:Dispatch<SetStateAction<boolean>>
    

}

export interface ChildrenType {
    children: ReactNode
}