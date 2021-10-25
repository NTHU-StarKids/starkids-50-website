import axios, { Method } from 'axios'
import * as humps from 'humps'

type paramProps = {
  url: string
  method?: Method
  body?: any
}

const instance = axios.create({
  baseURL: 'https://starkids-50-nodejs.herokuapp.com/',
})

export const callAPI = async ({ url, method = 'POST', body }: paramProps) => {
  const data = humps.decamelizeKeys(body)
  const res = await instance({ url, method, data })
  const result = humps.camelizeKeys(res.data)
  return result
}

export const getChats = () => callAPI({ url: '/chats', method: 'GET' })

export const createChat = (name: string, text: string, profile: string) =>
  callAPI({ url: '/chats', method: 'POST', body: { name, text, profile } })

export const signup = (body: any) =>
  callAPI({ url: '/signup', method: 'POST', body })
