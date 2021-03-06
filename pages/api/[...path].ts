// when going to api, except hello, all will be matched with AAA
import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

// type Data = {
//   name: string;
// };

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }
    // don't send cookies to API server
    req.headers.cookie = ''

    // enter path /api/students
    // http://localhost:3000/api/students -> https://js-post-api.herokuapp.com/api/students
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    proxy.once('proxyReq', () => {
      resolve(true)
    })
  })
}
