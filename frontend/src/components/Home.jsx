import React, { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const name = localStorage.getItem('loggedInUser'); 
  const email = localStorage.getItem('email'); 
  const navigate = useNavigate();
  
  const handleLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    navigate('/login')

  }
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token || token === ''){
      navigate('/login')
    }
  
  },[navigate])
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between p-4">
        <div>
          <h1 className="flex text-2xl font-bold mb-6 text-center">Dashboard</h1>
          <nav className="space-y-2">
           
            <button onClick={handleLogout} className=" flex text-center rounded-md hover:bg-gray-700 transition duration-300">
              Logout
            </button>
          </nav>
        </div>
        <div className="text-center">
          <p>&copy; 2024 My Dashboard</p>
        </div>
      </aside>

      <main className="flex-1 p-6">
  <header className="mb-6">
    <h2 className="text-3xl font-semibold text-gray-700">Welcome, {name}  </h2>
  </header>

  <section className="grid  md:grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{name}'s Activity</h3>
      <p className="text-gray-500">Here’s a summary of your latest activities.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{name}'s Profile</h3>
      <p className="text-gray-500">name - {name}</p>
      <p className="text-gray-500">email - {email}</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Notifications</h3>
      <p className="text-gray-500">You have 3 new notifications.</p>
    </div>
  </section>

  <section className="mt-8">
    <h3 className="text-2xl font-bold text-gray-700 mb-4">Statistics Overview</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Total Users</h4>
        <p className="text-4xl font-bold text-cyan-700">1,230</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Total Sales</h4>
        <p className="text-4xl font-bold text-green-600">$9,540</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Completed Tasks</h4>
        <p className="text-4xl font-bold text-indigo-700">86%</p>
      </div>
    </div>
  </section>

  <section className="mt-8">
    <h3 className="text-2xl font-bold text-gray-700 mb-4">{name} Transactions</h3>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <ul className="divide-y divide-gray-200">
        <li className="py-4">
          <p className="text-sm text-gray-700">Transaction ID: <span className="font-bold">#T12345</span></p>
          <p className="text-sm text-gray-500">Amount: $500 | Status: <span className="text-green-600">Completed</span></p>
        </li>
        <li className="py-4">
          <p className="text-sm text-gray-700">Transaction ID: <span className="font-bold">#T12346</span></p>
          <p className="text-sm text-gray-500">Amount: $200 | Status: <span className="text-yellow-600">Pending</span></p>
        </li>
        <li className="py-4">
          <p className="text-sm text-gray-700">Transaction ID: <span className="font-bold">#T12347</span></p>
          <p className="text-sm text-gray-500">Amount: $1,200 | Status: <span className="text-red-600">Failed</span></p>
        </li>
      </ul>
    </div>
  </section>

  <section className="mt-8">
    <h3 className="text-2xl font-bold text-gray-700 mb-4">To-Do List</h3>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <input type="checkbox" className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-500" />
          <span className="text-gray-700">Complete user onboarding</span>
        </li>
        <li className="flex items-center space-x-2">
          <input type="checkbox" className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-500" />
          <span className="text-gray-700">Fix reported bugs</span>
        </li>
        <li className="flex items-center space-x-2">
          <input type="checkbox" className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-500" />
          <span className="text-gray-700">Plan next feature release</span>
        </li>
      </ul>
    </div>
  </section>

  <section className="mt-8">
    <h3 className="text-2xl font-bold text-gray-700 mb-4">Account Settings</h3>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700">Manage your account settings here.</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Update Settings
      </button>
    </div>
  </section>
</main>

    </div>
  );
};

export default Home;
