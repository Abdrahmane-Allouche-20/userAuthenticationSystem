import { useState } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await axios.post('/login', { email, password })
      localStorage.setItem('token', response.data.token)
      setEmail('')
      setPassword('')
      navigate('/')
    } catch (error) {
      setError(error.response?.data?.msg || error.message || 'Failed To Login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-blue-400 to-pink-300 px-4">
      <div className="w-full max-w-md p-8 space-y-3 bg-white bg-opacity-90 rounded-lg shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full p-2 text-sm border rounded-md bg-purple-100 outline-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-2 text-sm border rounded-md bg-purple-100 outline-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-sm hover:from-purple-500 hover:to-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <a href="/register" className="font-medium text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login