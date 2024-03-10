import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://api.valantis.store:41000',
    headers: {

    }
})

class Api{
   static (){
       return api.
   }
}

export default Api
