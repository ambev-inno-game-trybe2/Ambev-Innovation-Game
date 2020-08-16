export const getUser = () => JSON.parse(localStorage.getItem('user'));

function HeaderAuthorization(method = 'GET', body = '') {
  const token = getUser().token;
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body,
  }
}

export const getAppThirsty = async (filter = 'recipes', method, body = '') => {
  const URL_API_RECEITS = `http://localhost:3001${filter}`;

  const response = await fetch(URL_API_RECEITS, HeaderAuthorization(method, body));
  const data = await response.json();
  return data;
}

export const getFilterRecipes = async (filter = 'recipes', filterState = '', filterCity = '') => {
  const URL_API_RECEITS = `http://localhost:3001${filter}/?state=${filterState}&city=${filterCity}`;

  const response = await fetch(URL_API_RECEITS, HeaderAuthorization('GET'));
  const data = await response.json();
  return data;
}
