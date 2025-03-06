//UC2- ability to ensure that valid contacts are added
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

    constructor() {
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
            console.log("Contact added successfully:", contact);
        } else {
            console.log("Validation failed for:");
            if (!validateFirstName(contact.firstName)) console.log("First Name:", contact.firstName);
            if (!validateLastName(contact.lastName)) console.log("Last Name:", contact.lastName);
            if (!validateAddress(contact.address)) console.log("Address:", contact.address);
            if (!validateCity(contact.city)) console.log("City:", contact.city);
            if (!validateState(contact.state)) console.log("State:", contact.state);
            if (!validateZip(contact.zip)) console.log("Zip Code:", contact.zip);
            if (!validatePhoneNumber(contact.phoneNumber)) console.log("Phone Number:", contact.phoneNumber);
            if (!validateEmail(contact.email)) console.log("Email:", contact.email);
        }    
    }
    //display contacts
    displayContacts() {
        this.contacts.forEach((contact, index) => {
        console.log("Contact ");
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
try{
    //create object of address book
    const addressBook = new AddressBook();
    //create object of contact
    const contact1 = new Contact("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", "80020", "1234567890", "rahul@gmail.com");
    const contact2 = new Contact("Rohit", "Kumar", "Main road", "Ranchi", "Jharkhand", "83302", "5479434788", "rohit@gmail.com");
    //add contact to address book
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    //display contacts
    addressBook.displayContacts();
} catch(error) {
    console.error(error.message)
}