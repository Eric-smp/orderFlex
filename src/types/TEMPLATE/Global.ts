import {Dispatch, ReactNode, SetStateAction} from 'react'
import {TCreateOders, TCreateLogin, TLoginCoung} from '@/types'
export interface TGlobalProps{
    modalType: number
    setModalType:Dispatch<SetStateAction<number>>
    isModalOpen: string
    setIsModalOpen:Dispatch<SetStateAction<string>>
    handlePostUser: ({name, username,cnpj,password}:TCreateLogin) => void
    loginCount: ({cnpj, senha}:TLoginCoung) => void
    handleOrder: ({nome,nomeProduto, preco}:TCreateOders) => void
    notification:boolean
    setNotification:Dispatch<SetStateAction<boolean>>
    consulta: TCreateOders,
    setConsulta: Dispatch<SetStateAction<TCreateOders>>
    getOrderClient:({nome, nomeProduto, preco}:TCreateOders) => void
    produtos: TCreateOders[]; // Propriedade para armazenar os produtos
    setProdutos: Dispatch<SetStateAction<TCreateOders[]>>; //
    notificationOrder: boolean,
    setNotificationOrder:Dispatch<SetStateAction<boolean>> 
    

}

export interface ChildrenType {
    children: ReactNode
}