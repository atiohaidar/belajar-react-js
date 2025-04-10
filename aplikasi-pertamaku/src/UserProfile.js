import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams Hook

function UserProfile() {
  const { userId } = useParams(); // Gunakan useParams untuk mendapatkan parameter rute

  // Di sini kita bisa melakukan fetching data pengguna berdasarkan userId
  // Misalnya, memanggil API untuk mendapatkan data pengguna dengan ID userId

  return (
    <div>
      <h1>Profil Pengguna</h1>
      <p>User ID: {userId}</p>
      {/* Di sini bisa ditambahkan detail profil pengguna lainnya */}
    </div>
  );
}

export default UserProfile;