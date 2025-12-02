import api from '../config/api'

export const offeringService = {
  getAllOfferings: async () => {
    const response = await api.get('/offerings')
    return response.data
  },

  getOfferingById: async (id) => {
    const response = await api.get(`/offerings/${id}`)
    return response.data
  },

  createOffering: async (data) => {
    const response = await api.post('/offerings', data)
    return response.data
  },

  updateOffering: async (id, data) => {
    const response = await api.put(`/offerings/${id}`, data)
    return response.data
  },

  deleteOffering: async (id) => {
    const response = await api.delete(`/offerings/${id}`)
    return response.data
  }
}
