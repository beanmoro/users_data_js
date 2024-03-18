import { Person } from "./person.module.js";

export const getData = async (apiUrl) => {

    try {
        const response = await fetch(apiUrl);

        const data = await response.json();
        
        return jsonToPeople(data.results);
    } catch (error) {
        console.error(`ERROR: ${error}`);
        throw error;
    }
}

const jsonToPeople = ( data ) => {
    const people = []
    data.forEach(d => {
        const person = new Person(d.name.first, d.name.last, d.email, d.phone, d.picture.large);
        people.push(person);
    });
    return people;
}