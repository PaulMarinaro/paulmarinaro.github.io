// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, 
 * so that the contact-list returned has an print all() API. 
 * The printAllContactNames() Function should return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 * USE NEW LINE
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    }
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
//      1. length(): returns the number of contacts within the list.
        length: function() {
            return contacts.length;
        },
// 2. addContact(contact): takes a contact object to be added to the 
//  *         contact-list.
        addContact: function(contact) {
            contacts.push(contact);
        },
//  *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
//  *         returns the contact object if found in the contacts-list, or, 
//  *         undefined if the fullName does not match any contacts in the list.
        findContact: function(fullName) {
            for (var i=0; i<contacts.length; i++) {
                var currentContact = contacts[i];
                if (currentContact.nameFirst + " " + currentContact.nameLast === fullName) {
                    return currentContact; 
                }   
                }   
                return undefined;
            },
//  *      4. removeContact(contact): takes a contact object to be removed from 
//  *         the contact-list.
        removeContact: function(contact) {
                for (var i=0; i<contacts.length; i++) {
                    var contactToRemove = contacts[i];
                    if (contactToRemove === contact) {
                    contacts.splice(contactToRemove, 1); 
                }   
                }
            },
/* BONUS : add a printAllContactNames() Function to your makeContactList() factory, 
 * so that the contact-list returned has an print all() API. 
 * The printAllContactNames() Function should return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 * USE NEW LINE
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */
        printAllContactNames: function() {
                // creates an array to collect all the full names as one string
                var allFullNames = [];
                // loops through the contacts list
                for (var i=0; i<contacts.length; i++) {
                    
                    if (i<contacts.length-1) {
                    // combines the first name and last name to the list, then makes a new line 
                    allFullNames.push(contacts[i].nameFirst + " " + contacts[i].nameLast + "\n");
                    }   else {
                        // catches the last contact and doesn't add a new line
                    allFullNames.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
                    }
                }   
                // prints the new list of all the full names
                return allFullNames.join(""); 
                
            },
        };
         
    }


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
