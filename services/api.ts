import axios from 'axios';

let instance = axios.create({
     baseURL: 'http://192.168.1.109:8001/api/v1/' 
});

export const api = (enviroment: String) => {
     if (enviroment === 'producao') {
          instance = axios.create({
               baseURL: 'http://192.168.1.4:8001/api/v1/' 
          });
     }

     return instance
};
