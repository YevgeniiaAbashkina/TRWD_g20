export default class User {     //если что то одно идет по дефолту, можно имя класса User не писать
    constructor(name, city) {
        this.name = name
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser() {
        return `<h3 data-id ="${this.id}">${this.name}, ${this.city}</h3>`
    }
}