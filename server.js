function mostrarMensaje(texto, tipo) {
  const box = document.getElementById("registroMensaje");
  box.className = `registro-mensaje ${tipo}`;
  box.textContent = texto;
}

mostrarMensaje("✅ Registro completado correctamente", "success");

import express from "express";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(3000, () => {
  console.log("Servidor activo");
});


// auth.js
import jwt from "jsonwebtoken";

export function login(req, res) {
  if (req.body.user === "admin") {
    const token = jwt.sign({ role: "admin" }, "CLAVESECRETA");
    res.json({ token });
  }
}

