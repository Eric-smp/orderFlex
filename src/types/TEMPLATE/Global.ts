import {Dispatch, ReactNode, SetStateAction} from 'react'
import {TCreateOders} from '@/types'
export interface TGlobalProps{
    modalType: number
    setModalType:Dispatch<SetStateAction<number>>
    isModalOpen: string
    setIsModalOpen:Dispatch<SetStateAction<string>>
    testeFomr: ({nome, pedido}:TCreateOders) => void

}

export interface ChildrenType {
    children: ReactNode
}