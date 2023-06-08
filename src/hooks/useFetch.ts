import { useState } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { api } from '@/lib/axios'

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

const useFetch = () => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchData = async (
    url: string,
    method: HttpMethod = 'get',
    config?: AxiosRequestConfig
  ) => {
    setIsLoading(true)
    try {
      const response: AxiosResponse = await api.request({
        url,
        method,
        ...config
      })
      setData(response.data)
      setError('')
      return response.data
    } catch (error) {
      setError('Ocorreu um erro ao obter os dados.')
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchData, data, isLoading, error }
}

export default useFetch
