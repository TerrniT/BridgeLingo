import axios, { AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse } from 'axios'

class API {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create()
  }

  setBaseURL(baseURL: string): void {
    this.axiosInstance.defaults.baseURL = baseURL
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get<T>(url, config)
      .then((response: AxiosResponse<T>) => {
        return response.data
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.post<T>(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.put<T>(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data
      })
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.delete<T>(url, config)
      .then((response: AxiosResponse<T>) => {
        return response.data
      })
  }
}

const api = new API()
export default api
