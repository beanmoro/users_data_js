import { getData } from "./data.module.js";

const API_URL = 'https://randomuser.me/api/?results=20';

const userDataElement = document.querySelector('#user-data');

( async () =>{
    try {
        const data = await getData(API_URL);
    

        data.forEach(e => {
            userDataElement.innerHTML += `
                <div>
                    <img src='${e.pictureUrl}'/>
                    <p>${e.firstName} ${e.lastName}</p>
                    <p>${e.email}</p>
                    <p>${e.phone}</p>
                </div>
            `
        })
        
    } catch (error) {
        console.error(`ERROR: ${error}`)
    }

})();