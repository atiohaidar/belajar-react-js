import React, { useState } from 'react'; // Import useState Hook

function CounterComponent() {
  // Deklarasi state menggunakan useState Hook
  const [count, setCount] = useState(0); // Initial state adalah 0

  const incrementCount = () => {
    setCount(count + 1); // Fungsi untuk mengubah state count
  };

  return (
    <div>
      <h2>Counter: {count}</h2> {/* Menampilkan nilai state count */}
      <button onClick={incrementCount}>Tambah</button> {/* Tombol untuk menambah count */}
    </div>
  );
}

export default CounterComponent;