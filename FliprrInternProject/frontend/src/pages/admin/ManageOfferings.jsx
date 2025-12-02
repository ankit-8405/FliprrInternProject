import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { offeringService } from '../../services/offeringService'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

const ManageOfferings = () => {
  const [offerings, setOfferings] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    tag: '', image: '', title: '', location: '', description: '',
    totalPrice: '', getPrice: '', securityType: '', investmentMultiple: '',
    maturity: '', minimumInvestment: ''
  })

  useEffect(() => {
    fetchOfferings()
  }, [])

  const fetchOfferings = async () => {
    try {
      const data = await offeringService.getAllOfferings()
      setOfferings(data)
    } catch (error) {
      console.error('Error fetching offerings:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await offeringService.updateOffering(editingId, formData)
      } else {
        await offeringService.createOffering(formData)
      }
      fetchOfferings()
      resetForm()
    } catch (error) {
      console.error('Error saving offering:', error)
    }
  }

  const handleEdit = (offering) => {
    setFormData(offering)
    setEditingId(offering.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this offering?')) {
      try {
        await offeringService.deleteOffering(id)
        fetchOfferings()
      } catch (error) {
        console.error('Error deleting offering:', error)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      tag: '', image: '', title: '', location: '', description: '',
      totalPrice: '', getPrice: '', securityType: '', investmentMultiple: '',
      maturity: '', minimumInvestment: ''
    })
    setEditingId(null)
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/admin/dashboard" className="text-2xl font-bold text-primary">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Offerings</h1>
          <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
            <FaPlus /> Add New Offering
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit' : 'Add'} Offering</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tag"
                value={formData.tag}
                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                className="input-field"
                required
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image (URL or Upload)
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="input-field w-full"
                  />
                  <div className="text-center text-gray-500 text-sm">OR</div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file) {
                        // For demo, we'll use a placeholder. In production, upload to server/cloud
                        const reader = new FileReader()
                        reader.onloadend = () => {
                          setFormData({ ...formData, image: reader.result })
                        }
                        reader.readAsDataURL(file)
                      }
                    }}
                    className="input-field w-full"
                  />
                  {formData.image && (
                    <div className="mt-2">
                      <img src={formData.image} alt="Preview" className="h-32 w-32 object-cover rounded" />
                    </div>
                  )}
                </div>
              </div>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="input-field"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="input-field"
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="input-field md:col-span-2"
                rows="3"
                required
              />
              <input
                type="number"
                placeholder="Total Price"
                value={formData.totalPrice}
                onChange={(e) => setFormData({ ...formData, totalPrice: e.target.value })}
                className="input-field"
                required
              />
              <input
                type="number"
                placeholder="Get Price (Amount Raised)"
                value={formData.getPrice}
                onChange={(e) => setFormData({ ...formData, getPrice: e.target.value })}
                className="input-field"
                required
              />
              <input
                type="text"
                placeholder="Security Type"
                value={formData.securityType}
                onChange={(e) => setFormData({ ...formData, securityType: e.target.value })}
                className="input-field"
                required
              />
              <input
                type="number"
                step="0.1"
                placeholder="Investment Multiple"
                value={formData.investmentMultiple}
                onChange={(e) => setFormData({ ...formData, investmentMultiple: e.target.value })}
                className="input-field"
                required
              />
              <input
                type="number"
                placeholder="Maturity (months)"
                value={formData.maturity}
                onChange={(e) => setFormData({ ...formData, maturity: e.target.value })}
                className="input-field"
                required
              />
              <input
                type="number"
                placeholder="Minimum Investment"
                value={formData.minimumInvestment}
                onChange={(e) => setFormData({ ...formData, minimumInvestment: e.target.value })}
                className="input-field"
                required
              />
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="btn-primary flex-1">
                  {editingId ? 'Update' : 'Create'} Offering
                </button>
                <button type="button" onClick={resetForm} className="btn-secondary flex-1">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {offerings.map((offering) => (
                <tr key={offering.id}>
                  <td className="px-6 py-4">{offering.title}</td>
                  <td className="px-6 py-4">{offering.location}</td>
                  <td className="px-6 py-4">${offering.totalPrice?.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleEdit(offering)} className="text-blue-600 hover:text-blue-800 mr-4">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(offering.id)} className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageOfferings
