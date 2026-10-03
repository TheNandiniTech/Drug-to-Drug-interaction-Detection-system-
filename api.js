import axios from 'axios'
import toast from 'react-hot-toast'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/v1'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 300000 // 5 minutes (to allow multi-page PDF & multi-image heavy OCR processing)
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('auth-token')

    if (!token) {
      const persistedAuth = localStorage.getItem('auth-storage')
      if (persistedAuth) {
        try {
          const parsed = JSON.parse(persistedAuth)
          token = parsed?.state?.token || null
        } catch (error) {
          token = null
        }
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      'An error occurred'
    
    // Handle specific error codes
    if (error.response?.status === 401) {
      // Unauthorized - clear auth and redirect to login
      localStorage.removeItem('auth-token')
      localStorage.removeItem('auth-storage')

      if (window.location.pathname !== '/auth') {
        window.location.href = '/auth'
      }
      return Promise.reject(error)
    }
    
    if (error.response?.status === 403) {
      toast.error('Access denied')
    } else if (error.response?.status === 404) {
      toast.error('Resource not found')
    } else if (error.response?.status >= 500) {
      toast.error('Server error. Please try again later.')
    } else if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
      toast.error('Cannot reach the API server. Confirm the backend is running and the API URL is configured.')
    } else {
      toast.error(message)
    }
    
    return Promise.reject(error)
  }
)

export default api