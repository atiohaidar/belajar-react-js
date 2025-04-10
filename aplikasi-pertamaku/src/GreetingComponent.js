import React, { useState } from 'react';

function GreetingComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let tampilanGreeting; // Variabel untuk menyimpan tampilan greeting

  // Conditional rendering menggunakan if/else
  if (isLoggedIn) {
    tampilanGreeting = (
      <div>
        <p>Selamat datang kembali!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    tampilanGreeting = (
      <div>
        <p>Silakan login untuk melanjutkan.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Greeting:</h2>
      {tampilanGreeting} {/* Menampilkan tampilanGreeting yang sudah ditentukan */}
    </div>
  );
}

export default GreetingComponent;