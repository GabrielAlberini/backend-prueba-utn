const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Clave a compartir mediante el endpoint
const secretKey = process.env.KEY;

// Habilitar CORS para permitir que el frontend acceda al backend
app.use(cors());

// Ruta para obtener la clave
app.get("/api/key", (req, res) => {
  res.json({ key: secretKey });
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
