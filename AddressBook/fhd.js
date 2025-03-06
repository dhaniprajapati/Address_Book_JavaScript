// Contact class to store contact details
class Contact {
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

// AddressBook class to store multiple contacts
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    // Add a contact after validation
    addContact(contact) {
        if (
            validateFirstName(contact.firstName) &&
            validateLastName(contact.lastName) &&
            validateAddress(contact.address) &&
            validateCity(contact.city) &&
            validateState(contact.state) &&
            validateZip(contact.zip) &&
            validatePhoneNumber(contact.phoneNumber) &&
            validateEmail(contact.email)
        ) {
            this.contacts.push(contact);
            console.log(`Contact added successfully to ${this.name}`);
        } else {
            console.log(`Validation failed for ${this.name}`);
        }
    }

    // Display all contacts in an Address Book
    displayContacts() {
        console.log(`Address Book: ${this.name}`);
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
            return;
        }
        this.contacts.forEach((contact, index) => {
            console.log(`Contact ${index + 1}:`);
            console.log(`Name: ${contact.firstName} ${contact.lastName}`);
            console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state} - ${contact.zip}`);
            console.log(`Phone: ${contact.phoneNumber}`);
            console.log(`Email: ${contact.email}`);
            console.log("------------------------");
        });
    }
}

// Manager class to handle multiple Address Books
class AddressBookManager {
    constructor() {
        this.addressBooks = {};
    }

    // Create a new Address Book
    createAddressBook(name) {
        if (!this.addressBooks[name]) {
            this.addressBooks[name] = new AddressBook(name);
            console.log(`Created Address Book: ${name}`);
        } else {
            console.log(`Address Book '${name}' already exists.`);
        }
    }

    // Get an Address Book by name
    getAddressBook(name) {
        return this.addressBooks[name] || null;
    }

    // List all Address Books
    listAddressBooks() {
        console.log("Available Address Books:");
        const names = Object.keys(this.addressBooks);
        if (names.length === 0) {
            console.log("No Address Books available.");
        } else {
            names.forEach((name, index) => console.log(`${index + 1}. ${name}`));
        }
    }
}

// Validation functions
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
    return /^\d{5,6}$/.test(zip);
}

function validatePhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}

function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Try-Catch Block for Execution
try {
    const manager = new AddressBookManager();

    // Creating new Address Books
    manager.createAddressBook("Personal");
    manager.createAddressBook("Work");

    // Listing all available Address Books
    manager.listAddressBooks();

    // Creating contacts
    const contact1 = new Contact("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", "800020", "1234567890", "rahul@gmail.com");
    const contact2 = new Contact("Rohit", "Kumar", "Main Road", "Ranchi", "Jharkhand", "83302", "5479434788", "rohit@gmail.com");

    // Adding contacts to Address Books
    const personalBook = manager.getAddressBook("Personal");
    if (personalBook) personalBook.addContact(contact1);

    const workBook = manager.getAddressBook("Work");
    if (workBook) workBook.addContact(contact2);

    // Display contacts in each Address Book
    personalBook.displayContacts();
    workBook.displayContacts();

} catch (error) {
    console.error("Error:", error.message);
}
