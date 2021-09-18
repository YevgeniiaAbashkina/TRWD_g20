const CONTACTS_KEY = "CONTACTS";

class Store{
    static save(contact) {
        const allContacts = this.getAll();
        allContacts.push(contact);
        this.updateLocalStorage(allContacts)
    }
    static getAll() {
        let str = localStorage.getItem(CONTACTS_KEY);
        /* if (!str) {
            return [];
        }
        return JSON.parse(str) */
        return (str) ? JSON.parse(str) : [];
    }
    static updateLocalStorage(contacts) {
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts) )
    }
    static remove(item) {
        const allContacts = this.getAll();
        allContacts.splice(item, 1);
        if (!allContacts.length === 0) {
            localStorage.removeItem(CONTACTS_KEY)
        } else {
            this.updateLocalStorage(allContacts)
        }
    }
}

