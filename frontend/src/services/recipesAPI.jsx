const getUser = () => JSON.parse(localStorage.getItem('user'));

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

const getAppThirsty = async (filter = 'recipes', filterState = '', filterCity = '', body = '') => {
  const URL_API_RECEITS = `http://localhost:3001${filter}/?state=${filterState}&city=${filterCity}`;

  const response = await fetch(URL_API_RECEITS, HeaderAuthorization('GET'));
  const data = await response.json();
  return data;
}

export default getAppThirsty;
