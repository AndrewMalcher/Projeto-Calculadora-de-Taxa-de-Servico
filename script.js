// script.js
// Cache dos elementos do DOM
const form           = document.getElementById('form');
const inputValor     = document.getElementById('valor');
const inputQual      = document.getElementById('servicequal');
const inputQtd       = document.getElementById('qtd');

const resultadoTip   = document.getElementById('tip');
const boxTotalTip    = document.getElementById('totaltip');
const eachTip        = document.getElementById('eachTip');

const resultadoBill  = document.getElementById('billpp');
const boxTotalBill   = document.getElementById('totalbill');
const eachBill       = document.getElementById('eachBill');

const resultadoTotal = document.getElementById('totalpp');
const boxTotalWithTip= document.getElementById('totalwithtip');
const eachTotal      = document.getElementById('eachTotal');

// Esconde tudo inicialmente
[boxTotalTip, boxTotalBill, boxTotalWithTip].forEach(el => el.style.display = 'none');
[eachTip, eachBill, eachTotal].forEach(el => el.style.display = 'none');

form.addEventListener('submit', calculateTip);

function calculateTip(event) {
  event.preventDefault();

  // 1. Parsear valores
  const taxa        = parseFloat(inputValor.value.replace(',', '.'));
  const serviceQual = parseFloat(inputQual.value);
  let   qtd         = parseInt(inputQtd.value, 10);

  // 2. Validações
  if (isNaN(taxa) || taxa <= 0) {
    alert('Por favor, insira um valor válido para a conta.');
    inputValor.focus();
    return;
  }
  if (isNaN(serviceQual) || serviceQual <= 0) {
    alert('Selecione a qualidade do serviço.');
    inputQual.focus();
    return;
  }
  if (isNaN(qtd) || qtd < 1) {
    qtd = 1;
  }

  // Mostrar/ocultar "para cada um"
  eachTip.style.display   = qtd > 1 ? 'inline' : 'none';
  eachBill.style.display  = qtd > 1 ? 'inline' : 'none';
  eachTotal.style.display = qtd > 1 ? 'inline' : 'none';

  // 3. Cálculo da taxa por pessoa
  const totalTip = taxa * serviceQual;
  const tipEach  = totalTip / qtd;
  const formattedTip = tipEach.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  resultadoTip.textContent = formattedTip;
  boxTotalTip.style.display = 'block';

  // 4. Cálculo da conta por pessoa (sem taxa)
  const billPerPerson = taxa / qtd;
  const formattedBill = billPerPerson.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  resultadoBill.textContent = formattedBill;
  boxTotalBill.style.display = 'block';

  // 5. Cálculo do total por pessoa (conta + taxa)
  const totalEach = billPerPerson + tipEach;
  const formattedTotal = totalEach.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  resultadoTotal.textContent = formattedTotal;
  boxTotalWithTip.style.display = 'block';
}
