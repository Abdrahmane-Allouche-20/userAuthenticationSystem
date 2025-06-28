import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-blue-400 to-pink-300 px-4">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-4">
          Welcome to TaskOne!
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Organize your tasks, boost your productivity, and achieve your goals with ease.
        </p>
        <a
          href="/login"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Home