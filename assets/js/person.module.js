export class Person {
    #firstName;
    #lastName;
    #email;
    #phone;
    #pictureUrl;
    constructor(firstName, lastName, email, phone, pictureUrl){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#phone = phone;
        this.#pictureUrl = pictureUrl;
    }

    //No creo ningun setter pq usare la clase como model para recibir los datos 
    // (asignare los datos una sola vez en el constructor)

    get firstName(){
        return this.#firstName;
    }

    get lastName(){
        return this.#lastName;
    }

    get email(){
        return this.#email;
    }

    get phone(){
        return this.#phone;
    }

    get pictureUrl(){
        return this.#pictureUrl;
    }

}