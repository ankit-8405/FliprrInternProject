import api from '../config/api'

export const newsletterService = {
  subscribe: async (email) => {
    const response = await api.post('/newsletter/subscribe', { email })
    return response.data
  },

  getAllSubscribers: async () => {
    const response = await api.get('/newsletter/subscribers')
    return response.data
  },

  deleteSubscriber: async (id) => {
    const response = await api.delete(`/newsletter/subscribers/${id}`)
    return response.data
  }
}
