import type {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios'

async function loginUser(req:NextApiRequest, res:NextApiResponse){
    try{
        const url = `${process.env.POST_CREATE_LOGIN}`

        const params = {
            name: req.body.name,
            username: req.body.username,
            cnpj: req.body.cnpj,
            password: req.body.password
        }

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }

          const result = await Axios.post(url, params, config)
          res.status(200)
          res.end(JSON.stringify(result.data))
    }
    catch (error: any) {
        console.log(error.res.data)
        res.status(406).json({ message: (error as Error).message })
      }
}

export default loginUser