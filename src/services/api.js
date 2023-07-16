const apiUrl = 'https://restcountries.com/v3.1/';

const getRequest = async (endpoint) => {
  const url = `${apiUrl}/${endpoint}`;

  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('error', error);
  }
};




export {
    getRequest
}

