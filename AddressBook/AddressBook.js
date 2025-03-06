//UC1- create an address book with contact  and addressbook class
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
    this.contacts.push(contact);
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
//create object of address book
const addressBook = new AddressBook();
//create object of contact
const contact1 = new Contact("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "rahul@gmail.com");
const contact2 = new Contact("Rohit", "Kumar", "Main road", "Ranchi", "Jharkhand", 835302, 5479434788, "rohit@gmail.com");
//add contact to address book
addressBook.addContact(contact1);
addressBook.addContact(contact2);
//display contacts
addressBook.displayContacts();