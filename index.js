function factorial(n) {
  if (n < 0) throw new Error("No existe factorial para negativos");
  if (isNaN(n)) throw new Error("Entrada inválida");
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function pedirNumero() {
  let entrada = prompt("Ingresa un número:");
  return Number(entrada);
}

function mostrarResultado(n, resultado) {
  console.log(`El factorial de ${n} es ${resultado}`);
  document.body.innerHTML += `<p>El factorial de ${n} es ${resultado}</p>`;
}

// Manejo de errores
try {
  let n = pedirNumero();
  let resultado = factorial(n);
  mostrarResultado(n, resultado);
} catch (error) {
  console.error(error.message);
  document.body.innerHTML += `<p>${error.message}</p>`;
}
