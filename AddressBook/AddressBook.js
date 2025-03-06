//UC3- Ability to create a New Address Book array and add new Contacts to it
class Contact {
    //constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
}
//address book class
class AddressBook {
    constructor(name) {
        this.name= name;
        this.contacts = [];
    }
    //add contact
    addContact(contact) {
        console.log("Contact details received:", contact);
        if (
            validateFirstName(contact.firstName) &&
            validateLastName(contact.lastName) &&
            validateAddress(contact.address) &&
            validateCity(contact.city) &&
            validateState(contact.state) &&
            validateZip(contact.zip) &&
            validatePhoneNumber(contact.phoneNumber) &&
            validateEmail(contact.email)
        ){
            this.contacts.push(contact);
            console.log("Contact added successfully:", this.name);
        } else {
            console.log("Validation failed for:", this.name);
        }    
    }
    //display contacts
    displayContacts() {
        if(this.contacts.length===0){
            console.log("No contacts found.");
            return;
        } else {
        this.contacts.forEach((contact, index) => {
        console.log("Contact: ", (index+1));
        console.log("Name:"+contact.firstName + " " + contact.lastName);
        console.log("Address:"+contact.address);
        console.log("City:"+contact.city);
        console.log("State:"+contact.state);
        console.log("Zip:"+contact.zip);
        console.log("Phone Number:"+contact.phoneNumber);
        console.log("Email:"+contact.email);
        console.log("\n");
        });
    }
}
}
//class to handle multiple address books
class AddressBookManager{
    constructor(){
        this.addressBooks= {};
    }
    //create address book
    createAddressBook(name){
        if (!this.addressBooks[name]) {
            this.addressBooks[name] = new AddressBook(name);
            console.log("Created Address Book: ", name);
        } else {
            console.log("Address Book already exists.");
        }
    }
    //get address book with name
    getAddressBook(name) {
        return this.addressBooks[name] || null;
    }
    //list all Address Books
    listAddressBooks() {
        console.log("Available Address Books:");
        const names = Object.keys(this.addressBooks);
        if (names.length === 0) {
            console.log("No Address Books available.");
        } else {
            names.forEach((name, index) => console.log((index+1)+". "+name));
        }
    }
}
//valid contact details
function validateFirstName(firstName) {
    return /^[A-Z][a-zA-Z]{2,}$/.test(firstName);
}

function validateLastName(lastName) {
return /^[A-Z][a-zA-Z]{2,}$/.test(lastName);
}

function validateAddress(address) {
return address.length >= 4;
}

function validateCity(city) {
return city.length >= 4;
}

function validateState(state) {
return state.length >= 4;
}

function validateZip(zip) {
return /^\d{5}$/.test(zip);
}

function validatePhoneNumber(phoneNumber) {
return /^\d{10}$/.test(phoneNumber);
}

function validateEmail(email) {
return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
//try catch block
try {
    const manager = new AddressBookManager();

    //creating new Address Books
    manager.createAddressBook("Personal");
    manager.createAddressBook("Work");

    //listing all available Address Books
    manager.listAddressBooks();

    //creating contacts
    const contact1 = new Contact("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", "80020", "1234567890", "rahul@gmail.com");
    const contact2 = new Contact("Rohit", "Kumar", "Main Road", "Ranchi", "Jharkhand", "83302", "5479434788", "rohit@gmail.com");

    //adding contacts to Address Books
    const personalBook = manager.getAddressBook("Personal");
    if (personalBook) personalBook.addContact(contact1);

    const workBook = manager.getAddressBook("Work");
    if (workBook) workBook.addContact(contact2);

    //display contacts in each Address Book
    personalBook.displayContacts();
    workBook.displayContacts();

} catch (error) {
    console.error("Error:", error.message);
}
