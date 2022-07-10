import { validate } from './cpf';

test('Deve retornar true se o CPF é válido', () => {
  expect(validate('010.762.730-25')).toBe(true);
});

test('Deve retornar false se um CPF é inválido', () => {
  expect(validate('111.444.777-05')).toBe(false);
});

test('Deve retornar false se todos os números do CPF são iguais', () => {
  expect(validate('111.111.111-11')).toBe(false);
});

test('Deve retornar false se o CPF é nulo', () => {
  expect(validate(null)).toBe(false);
});

test('Deve retornar false se é CPF é undefined', () => {
  expect(validate('')).toBe(false);
});
