// Cache dos elementos do DOM
const form         = document.getElementById('form');
const inputValor   = document.getElementById('valor');
const inputQual    = document.getElementById('servicequal');
const inputQtd     = document.getElementById('qtd');
const resultadoTip = document.getElementById('tip');
const boxTotal     = document.getElementById('totaltip');
const boxEach      = document.getElementById('each');

// Esconde inicialmente
boxTotal.style.display = 'none';
boxEach.style.display  = 'none';

form.addEventListener('submit', calculateTip);

function calculateTip(event) {
  event.preventDefault();

  // 1. Parsear valores
  const taxa        = parseFloat(inputValor.value.replace(',', '.'));
  const serviceQual = parseFloat(inputQual.value);
  let   qtd         = parseInt(inputQtd.value, 10);

  // 2. Validar entradas
  if (isNaN(taxa) || taxa <= 0) {
    alert('Por favor, insira um valor válido para a conta.');
    return;
  }
  if (isNaN(serviceQual) || serviceQual <= 0) {
    alert('Selecione a qualidade do serviço.');
    return;
  }
  if (isNaN(qtd) || qtd < 1) {
    qtd = 1;
  }

  // 3. Mostrar/ocultar seção “cada um”
  if (qtd > 1) {
    boxEach.style.display = 'block';
  } else {
    boxEach.style.display = 'none';
  }

  // 4. Cálculo
  const totalTip = taxa * serviceQual;
  const tipEach  = totalTip / qtd;

  // 5. Formatar como moeda brasileira
  const formattedTip = tipEach
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // 6. Exibir resultado
  resultadoTip.textContent   = formattedTip;
  boxTotal.style.display     = 'block';
}
