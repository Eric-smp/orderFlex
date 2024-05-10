import {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios'


async function pullOrder(req:NextApiRequest, res:NextApiResponse){
    try {
        const url = `${process.env.GET_ORDERS}`

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
          const response = await Axios.get(url, config)
          res.status(200)
          res.end(JSON.stringify(response.data))

    } catch (error) {
        res.end(JSON.stringify(error))
    }
}

export default pullOrder