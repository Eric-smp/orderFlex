import {Dispatch, ReactNode, SetStateAction} from 'react'
export interface TGlobalProps{
    modalType: number
    setModalType:Dispatch<SetStateAction<number>>
    isModalOpen: string
    setIsModalOpen:Dispatch<SetStateAction<string>>

}

export interface ChildrenType {
    children: ReactNode
}