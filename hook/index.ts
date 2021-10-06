import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { getChats } from '@/api'

export const useChats = () =>
  useQuery<{ chats: IChat[] }, AxiosError>('chats', getChats, {
    refetchInterval: 30000,
  })
