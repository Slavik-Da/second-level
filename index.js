const API_URL = 'https://api.github.com/';
const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('loading-overlay');
const fightersDetailsMap = new Map();


async function startApp() {
    try {
      loadingElement.style.visibility = 'visible';
      
      const endpoint = 'repos/sahanr/street-fighter/contents/fighters.json';
      const fighters = await callApi(endpoint, 'GET');
      const fightersElement = createFighters(fighters);
      
      rootElement.appendChild(fightersElement);
    } catch (error) {
      console.warn(error);
      rootElement.innerText = 'Failed to load data';
    } finally {
      loadingElement.style.visibility = 'hidden';
    }
  }
  
  function callApi(endpoind, method) {
    const url = API_URL + endpoind
    const options = {
      method
    };
  
    return fetch(url, options)
      .then(response => 
        response.ok 
          ? response.json() 
          : Promise.reject(Error('Failed to load'))
      )
      .then(file => JSON.parse(atob(file.content)))
      .catch(error => { throw error });
  }

  class FighterService {
    async getFighters() {
      try {
        const endpoint = 'repos/sahanr/street-fighter/contents/fighters.json';
        const apiResult = await callApi(endpoint, 'GET');
  
        return JSON.parse(atob(apiResult.content));
      } catch (error) {
        throw error;
      }
    }
  }
  
  const fighterService = new FighterService();