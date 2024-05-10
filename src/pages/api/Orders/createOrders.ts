import {NextApiResponse, NextApiRequest} from 'next'
import Axios from 'axios'
import { headers } from 'next/headers'

async function createOrders(req:NextApiRequest, res:NextApiResponse){
    try {
        const url = `${process.env.CREATE_ORDER}`
        const params ={
            nome: req.body.nome,
            nomeProduto: req.body.nomeProduto,
            preco: req.body.preco
        }
        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const result = await Axios.post(url,params,config)
        res.status(200)
        res.end(JSON.stringify(result.data))
    } catch (error:any) {
        console.log(error.res.data)
        res.status(406).json({message: (error as Error).message})
    }
}

export default createOrders