import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import komponen React Router
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import GreetingComponent from './GreetingComponent';
import UserProfile from './UserProfile'; // Import komponen UserProfile
import TodoListComponent from './TodoListComponent';

function App() {
  return (
    <BrowserRouter> {/* Bungkus seluruh aplikasi dengan BrowserRouter */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link ke homepage */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Link ke halaman about */}
            </li>
            <li>
              <Link to="/greetings">greetings</Link>
            </li>
            <li>
              <Link to="/user/">Nanti masukan parameternya, misal /users/halo</Link> {/* Link ke halaman profil pengguna dengan ID 1 */}
            </li>
            <li>
              <Link to="/todo">Todo List</Link> {/* Link ke halaman Todo List */}
            </li>

            
          </ul>
        </nav>

        <Routes> {/* Definisikan rute-rute di dalam Routes */}
          <Route path="/" element={<HomePage />} /> {/* Rute untuk path "/" (homepage), render HomePage component */}
          <Route path="/about" element={<AboutPage />} /> {/* Rute untuk path "/about", render AboutPage component */}
          <Route path='/greetings' element={<GreetingComponent />} /> {/* Rute untuk path "/greetings", render GreetingComponent */}
          <Route path="/user/:userId" element={<UserProfile />} /> {/* Rute untuk path "/user/:userId", render UserProfile component */}
          {/* :userId adalah parameter dinamis */}
          <Route path="/todo" element={<TodoListComponent />} /> {/* Rute untuk path "/todo", render TodoListComponent */}
          <Route path="*" element={<div>404 Not Found</div>} /> {/* Rute untuk menangani halaman yang tidak ditemukan */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;