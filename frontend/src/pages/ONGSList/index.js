import React, { useState, useEffect } from "react";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function ONGSList() {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    api.get("/ongs").then(response => {
      setOngs(response.data);
    });
  }, []);

  return (
    <div className="ongs-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
      </header>

      <h1>Lista de ONGS</h1>

      <ul>
        {ongs.map(ong => (
          <li key={ong.id}>
            <strong>Nome</strong>
            <p>{ong.name}</p>

            <strong>E-mail</strong>
            <p>{ong.email}</p>

            <strong>WhatsApp</strong>
            <p>{ong.whatsapp}</p>

            <strong>Localização</strong>
            <p>
              {ong.city} / {ong.uf}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
