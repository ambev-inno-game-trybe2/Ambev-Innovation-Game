export const getStates = async (state = '', city = '') => {
  const API_BRAZILLIAN_STATES =
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/${city}`;

  const response = await fetch(API_BRAZILLIAN_STATES);
  const data = await response.json();
  return data.sort((a, b) => {
    if (a.nome > b.nome) return 1;
      return -1;
  });
}
