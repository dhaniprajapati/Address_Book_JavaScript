//UC9- to view specific contacts in city or state
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
        //check for duplicate contact and remove
        const existingContact = this.findContactByName(contact.firstName, contact.lastName);
        if (existingContact) {
            console.log("Contact already exists. Removing the existing contact.");
            this.contacts = this.contacts.filter(c => c !== existingContact);
        }
        //validate contact details
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
    //find contact by name
    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName === firstName &&
            contact.lastName === lastName
        );
    }
    //edit contact details
    editContact(firstName, lastName, updatedDetails) {
        const contact = this.findContactByName(firstName, lastName);
        if (contact) {
            Object.assign(contact, updatedDetails);
            console.log("Contact updated successfully.");
        } else {
            console.log("Contact not found.");
        }
    }
    //to find contact by city or state
    findContactByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }
    //view contacts by state
    findContactByState(state) {
        return this.contacts.filter(contact => contact.state === state);
    }
    viewContacts(location) {
        const contactsByCity = this.findContactByCity(location);
        const contactsByState = this.findContactByState(location);
        return contactsByCity.concat(contactsByState);
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
return /^\d{6}$/.test(zip);
}

function validatePhoneNumber(phoneNumber) {
return /^\d{10}$/.test(phoneNumber);
}

function validateEmail(email) {
return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
//try-catch block
try {
    //create address book manager
    const manager = new AddressBookManager();
    //create address books and add contacts
    manager.createAddressBook("Personal");
    manager.createAddressBook("Work");

    manager.listAddressBooks();

    //add contacts to personal address book
    const personalBook = manager.getAddressBook("Personal");
    const contact1 = new Contact("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", "800020", "1234567890", "rahul@gmail.com");
    const contact2 = new Contact("Rohit", "Kumar", "Kankarbagh", "Patna", "Bihar", "800020", "6734892109", "rohit@gmail.com");

    const workBook = manager.getAddressBook("Work");
    const contact3 = new Contact("Shreya", "Kumari", "Kankarbagh", "Patna", "Bihar", "800020", "7568320748", "shreya@gmail.com");
    const contact4 = new Contact("Rishi", "Kumar", "Kankarbagh", "Patna", "Bihar", "800020", "1234567890", "rishi@gmail.com");
    const contact5 = new Contact("Rishi", "Kumar", "Kankarbagh", "Patna", "Bihar", "800020", "1234567890", "rishi@gmail.com");

    personalBook.addContact(contact1);
    personalBook.addContact(contact2);

    workBook.addContact(contact3);
    workBook.addContact(contact4);
    workBook.addContact(contact5);
    //search contact by city or state
    const cityContacts = personalBook.contacts.filter(contact => contact.city === "Patna");
    const stateContacts = personalBook.contacts.filter(contact => contact.state === "Bihar");
    console.log("Detailed Contacts in Patna:");
    cityContacts.forEach(contact => {
        console.log("Name:"+contact.firstName + " " + contact.lastName);
    });

    console.log("Detailed Contacts in Bihar:");
    stateContacts.forEach(contact => {
        console.log("Name:"+contact.firstName + " " + contact.lastName);
    });

    //edit contact details
    personalBook.editContact("Rahul", "Kumar", {phoneNumber: "9876543210"});

    //display contacts
    personalBook.displayContacts();

    //reduce function to get total number of contacts
    const totalContactsPersonal = personalBook.contacts.reduce((total, contact) => total + 1, 0);
    console.log("Total contacts in Personal Address Book:", totalContactsPersonal);

    const totalContactsWork = workBook.contacts.reduce((total, contact) => total + 1, 0);
    console.log("Total contacts in Work Address Book:", totalContactsWork);
    console.log("Total number of contacts in address book:", totalContactsPersonal + totalContactsWork);

    //find contact by name if exists
    const updatedContact = personalBook.findContactByName("Rahul", "Kumar");
    if (updatedContact) {
        console.log("Updated contact details for:", updatedContact.firstName, updatedContact.lastName);
    } else {
        console.log("Contact not found for updating.");
    }
} catch (error) {
    console.error(error.message);
}
