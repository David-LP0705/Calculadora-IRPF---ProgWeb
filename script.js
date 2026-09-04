//Faixas da tabela do IRPF

function calcularFaixa1(salario) {
  return 0;
}

function calcularFaixa2(salario) {
  const inicio = 2112.00, fim = 2826.65, aliquota = 0.075;
  if (salario <= inicio) return 0;
  const base = Math.min(salario, fim) - inicio;
  return base * aliquota;
}

function calcularFaixa3(salario) {
  const inicio = 2826.65, fim = 3751.05, aliquota = 0.15;
  if (salario <= inicio) return 0;
  const base = Math.min(salario, fim) - inicio;
  return base * aliquota;
}

function calcularFaixa4(salario) {
  const inicio = 3751.05, fim = 4664.68, aliquota = 0.225;
  if (salario <= inicio) return 0;
  const base = Math.min(salario, fim) - inicio;
  return base * aliquota;
}

function calcularFaixa5(salario) {
  const inicio = 4664.68, aliquota = 0.275;
  if (salario <= inicio) return 0;
  const base = salario - inicio;
  return base * aliquota;
}

// Soma o Taxad devido em cada faixa
function calcularImpostoDevido(salario) {
  const f1 = calcularFaixa1(salario);
  const f2 = calcularFaixa2(salario);
  const f3 = calcularFaixa3(salario);
  const f4 = calcularFaixa4(salario);
  const f5 = calcularFaixa5(salario);
  return f1 + f2 + f3 + f4 + f5;
}

// Calculo a alíquota
function calcularAliquotaEfetiva(salario, ir) {
  if (salario <= 0) return 0;
  return (ir / salario) * 100;
}

function calcular() {
  const salarioInput = document.getElementById("salario").value;
  const salario = parseFloat(salarioInput);

  if (isNaN(salario) || salario < 0) {
    alert("Digite um salário válido.");
    return;
  }

  const ir = calcularImpostoDevido(salario);
  const aliquota = calcularAliquotaEfetiva(salario, ir);

  document.getElementById("valorIR").textContent = ir.toFixed(2).replace(".", ",");
  document.getElementById("valorAliquota").textContent = aliquota.toFixed(2).replace(".", ",");
  document.getElementById("resultado").style.display = "block";
}

function limpar() {
  document.getElementById("salario").value = "";
  document.getElementById("resultado").style.display = "none";
}
