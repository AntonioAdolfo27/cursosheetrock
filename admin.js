// auth.js
// auth.js
import jwt from "jsonwebtoken";

export function login(req, res) {
  if (req.body.user === "admin") {
    const token = jwt.sign({ role: "admin" }, "CLAVESECRETA");
    res.json({ token });
  }
}
 
function validarAdmin() {
  if (!localStorage.getItem("token")) {
    location.href = "login.html";
  }
}
validarAdmin();

