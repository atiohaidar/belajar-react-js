import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

function TodoListComponent() {
  const [todos, setTodos] = useState([]); // State untuk menyimpan daftar todos
  const [loading, setLoading] = useState(true); // State untuk status loading
  const [error, setError] = useState(null); // State untuk menyimpan error jika terjadi
 /**
  * ini kalo make fetch biasa
  * useEffect itu hook yang digunakan untuk melakukan side effect. maksutnya adalah
  * kita bisa melakukan request ke API, mengupdate DOM, dan lain-lain
 useEffect(() => {
    setLoading(true); // Set loading menjadi true saat request dimulai
    fetch('https://jsonplaceholder.typicode.com/todos') // URL API endpoint untuk todos
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setTodos(data); // Set state todos dengan data dari API
        setLoading(false); // Set loading menjadi false karena data sudah diterima
    })
    .catch(error => {
        setError(error); // Set state error jika terjadi kesalahan
        setLoading(false); // Set loading menjadi false, meskipun error
        console.error('Error fetching todos:', error);
    });
}, []); // Dependency array kosong [] agar useEffect hanya berjalan sekali saat component mount
*/
// kegunaan useeffect tuh supaya kita bisa melakukan fungsionalitas
// yang dinamis, jadi ini akan berjalan setiap kali component ini di render
//
  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos') // Gunakan axios.get()
      .then(response => {
        setTodos(response.data); // Data dari axios response ada di response.data
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error('Error fetching todos:', error);
      });
  }, []);
  if (loading) {
    return <p>Loading todos...</p>; // Tampilkan pesan loading jika sedang loading
  }

  if (error) {
    return <p>Error fetching todos: {error.message}</p>; // Tampilkan pesan error jika ada error
  }

  return (
    <div>
      <h2>Daftar Todos:</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '(Selesai)' : '(Belum Selesai)'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListComponent;