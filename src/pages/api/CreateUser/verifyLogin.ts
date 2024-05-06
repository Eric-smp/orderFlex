import {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios'

async function verifyLogin(req:NextApiRequest, res: NextApiResponse){
    try {
        const url = `${process.env.GET_LOGIN}`
        
        const params = {
            cnpj: req.body.cnpj,
            senha: req.body.senha
        }
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
          const result = await Axios.post(url, params, config)
     
          res.status(200)
          res.end(JSON.stringify(result.data))  
    } catch (error) {
        console.log(error)
        res.status(406).json({ message: (error as Error).message })
        
    }
}

export default verifyLogin