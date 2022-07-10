const FIRST_CHECK_DIGIT = 10;
const SECOND_CHECK_DIGIT = 11;

export function validate(rawCpf: string | null | undefined) {
  if (!rawCpf) return false;
  const cpf = cleanCpf(rawCpf);
  if (isValidLength(cpf)) return false;
  if (isIdenticalDigits(cpf)) return false;
  const calculatedCheckDigit1 = calculateCheckDigit(cpf, FIRST_CHECK_DIGIT);
  const calculatedCheckDigit2 = calculateCheckDigit(cpf, SECOND_CHECK_DIGIT);
  const checkDigit = extractCheckDigits(cpf);
  const calculatedCheckDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;
  return checkDigit === calculatedCheckDigit;
}

function cleanCpf(cpf: string) {
  const regex = /[^\d]/g;
  return cpf.replace(regex, '');
}

function isValidLength(cpf: string) {
  return cpf.length !== 11;
}

function isIdenticalDigits(cpf: string) {
  const [firstDigit] = cpf;
  return [...cpf].every((digit) => digit === firstDigit);
}

function calculateCheckDigit(cpf: string, factor: number) {
  const total = [...cpf].reduce((total, digit) => {
    if (factor > 1) total += parseInt(digit) * factor--;
    return total;
  }, 0);
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function extractCheckDigits(cpf: string) {
  return cpf.slice(-2);
}
