import React from 'react';

function HelloComponent(props) { // Menerima props sebagai argumen
  return (
    <div>
      <h1>Halo, {props.nama}!</h1> {/* Menggunakan props.nama */}
      <p>{props.pesan}</p> {/* Menggunakan props.pesan */}
    </div>
  );
}

export default HelloComponent;