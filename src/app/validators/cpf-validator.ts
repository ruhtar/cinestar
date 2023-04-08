import { FormControl } from '@angular/forms';

export function cpfValidator(control: FormControl) {
  const cpf = control.value;

  if (!cpf) {
    return null;
  }

  // Remove caracteres n�o num�ricos do CPF
  const cpfClean = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF possui 11 d�gitos
  if (cpfClean.length !== 11) {
    return { cpfInvalido: true };
  }

  // Verifica se todos os d�gitos s�o iguais
  if (/^([0-9])\1+$/.test(cpfClean)) {
    return { cpfInvalido: true };
  }

  // Calcula os d�gitos verificadores
  let sum = 0;
  let rest = 0;
  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpfClean.substring(i - 1, i)) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }
  if (rest !== parseInt(cpfClean.substring(9, 10))) {
    return { cpfInvalido: true };
  }
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpfClean.substring(i - 1, i)) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }
  if (rest !== parseInt(cpfClean.substring(10, 11))) {
    return { cpfInvalido: true };
  }

  // CPF v�lido
  return null;
}
