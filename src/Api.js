const API_BASE_ADDRESS = 'http://api.open-notify.org';

export default class Api {
   static getUsers() {
       const uri = API_BASE_ADDRESS + "/astros.json";
       
       return fetch(uri, {
           method: 'GET'
       });
   }
}