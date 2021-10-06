import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { getChats } from '@/api'

interface IChat {
  id: string
  sentAt: string
  name: string
  text: string
  profile: string
}

export const useChats = (options?: any) =>
  useQuery<{ chats: IChat[] }, AxiosError>('chats', getChats, options)
