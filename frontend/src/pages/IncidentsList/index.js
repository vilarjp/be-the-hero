import React, { useState, useEffect } from "react";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function ONGSList() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get("/incidents").then(response => {
      setIncidents(response.data);
    });
  }, []);

  return (
    <div className="incidents-list-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
      </header>

      <h1>Lista de casos</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Título</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>{incident.value}</p>

            <strong>Nome da ONG</strong>
            <p>{incident.ong_name}</p>

            <strong>Contato da ONG</strong>
            <p>
              {incident.ong_email} / {incident.ong_whatsapp}
            </p>

            <strong>Localização da ONG</strong>
            <p>
              {incident.ong_city} / {incident.ong_uf}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
