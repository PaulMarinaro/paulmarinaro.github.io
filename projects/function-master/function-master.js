//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* global objectValues 
    QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
      var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
      var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
      assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
      assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);
    });
*/

function objectValues(object) {
    var values = [];
    for (var key in object) {
        values.push(object[key]);
    } 
    return values;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* global keysToString
    QUnit.test("keysToString() : Should take an object and return all its keys in 
    a string each separated with a space", function(assert){
      var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
      var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
      assert.equal(keysToString(objectOne), "a b ponies dingle");
      assert.equal(keysToString(objectTwo), "c d crayons dangle");
    });
    
*/

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* global valuesToString 
    QUnit.test("valuesToString() : Should take an object and return all its 
    string values in a string each separated with a space", function(assert){
      var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
      var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
      assert.equal(valuesToString(objectOne), "one two crayons dangle");
      assert.equal(valuesToString(objectTwo), "three four ponies dingle");
    });
*/
function valuesToString(object) {
    var array = objectValues(object);
    var stringsNew = [];
    for (var i=0; i<array.length; i++) {
        if (typeof array[i] === 'string') {
            stringsNew.push(array[i]);
        }
    }
    return stringsNew.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 /* global arrayOrObject  
    QUnit.test("arrayOrObject() : Should take one argument and return 'array' 
    if its an array and 'object' if its an object", function(assert){
      assert.equal(arrayOrObject({a:"one"}), "object");
      assert.equal(arrayOrObject([1,2,{}]), "array");
    });
    */

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else {
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* global capitalizeWord
    QUnit.test("capitalizeWord() : Should take a string of one word, and return 
    the word with its first letter capitalized", function(assert){
      assert.equal(capitalizeWord("greg"), "Greg");
      assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
      assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
    });
*/

function capitalizeWord(string) {
    var capital = string.charAt(0).toUpperCase();
    // console.log(capital);
    var allOtherLetters = string.slice(1,string.length);
    return capital + allOtherLetters;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* global  capitalizeAllWords
    QUnit.test("capitalizeAllWords() : Should take a string of words and return 
    a string with all the words capitalized ", function(assert){
      assert.equal(capitalizeAllWords("one two three four"), "One Two Three Four");
      assert.equal(capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
    });
    */

function capitalizeAllWords(string) {
    
    var capArry = [];
    var splitStrg = string.split(" ");
    for (var i = 0; i < splitStrg.length; i++) {
        capArry.push(capitalizeWord(splitStrg[i]));
    }
    return capArry.join(" ");
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global  welcomeMessage
    QUnit.test("welcomeMessage() : Should take an object with a name property 
    and return 'Welcome <Name>!'", function(assert){
      assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
      assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
    });
*/
function welcomeMessage(object) {
    // console.log(object.name);
    return 'Welcome ' + capitalizeWord(object.name) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 /* global  profileInfo
    QUnit.test("profileInfo() : Should take an object with a name and a species 
    and return '<Name> is a <Species>'", function(assert){
      assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
      assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
    });
*/
function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global  maybeNoises
    QUnit.test("maybeNoises() : Should take an object, if this object has a 
    noises array return them as a string separated by a space, if there are no 
    noises return 'there are no noises'", function(assert){
      assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
      assert.equal(maybeNoises({noises: []}), "there are no noises");
      assert.equal(maybeNoises({}), "there are no noises");
    });
*/
function maybeNoises(object) {
    if (!Array.isArray(object.noises)) {
        return "there are no noises";
    }   else if (object.noises.length === 0) {
        return "there are no noises";
    }   else {
        return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global  hasWord
    QUnit.test("hasWord() : Should take a string of words and a word 
    and return true if <word> is in <string of words>, otherwise return false.", 
    function(assert){
      var data = "This is a super awesome string of words";
      assert.strictEqual(hasWord(data, "awesome"), true);
      assert.strictEqual(hasWord(data, "words"), true);
      assert.strictEqual(hasWord(data, "turtle"), false);
    });
*/
function hasWord(string, word) {
    if (string.indexOf(word) === -1) {
        return false;
    }   else {
        return true;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global addFriend 
    QUnit.test("addFriend() : Should take a name and an object and add the name 
    to the object's friends array then return the object", function(assert){
      assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
      assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
    });
*/
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 /* global isFriend 
    QUnit.test("isFriend() : Should take a name and an object and return true if 
    <name> is a friend of <object> and false otherwise", function(assert){
      assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
      assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
      assert.equal(isFriend("chuck",{}), false);
    });
*/
function isFriend(name, object) {
    if (!Array.isArray(object.friends)) {
        return false;
    }   for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
            return true;
            }  
        } 
        return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global nonFriends 
    QUnit.test("nonFriends() : Should take a name and a list of people, and 
    return a list of all the names that <name> is not friends with", function(assert){
      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
      assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
      assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    });
*/

function nonFriends(name, array) {
    
    // create an array with everyone (all the names)
    var everyone = [];
    for (var i = 0; i < array.length; i++) {
        everyone.push(array[i].name);
    }
    // create an array to contain everyone the current person is not friends with
    var isNotFriendsWith = [];
    // search each person object in the given array for their friends list
    for (var j = 0; j < array.length; j++) {
        if (array[j].name === name) {
            // loop through the everyone array, 
            for (var k = 0; k < everyone.length; k++) {
                // if current 'everyone' person is NOT(!) on the current 'name' 
                // agrument person's friend list, then push them into the isNotFriendsWith array
                // && (and) if current 'everyone' person is not the current 'name' agrument person 
                // (this is used so that we won't include the person in their own friends list)
                if (!array[j].friends.includes(everyone[k]) && everyone[k] !== name) {
                    isNotFriendsWith.push(everyone[k]);
                }
            }
        } 
    }
    //console.log(isFriendsWith);
    return isNotFriendsWith;
} 

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* global updateObject 
    QUnit.test("updateObject() : Should take an object, a key and a value. 
    Should update the property <key> on <object> with new <value>. 
    If <key> does not exist on <object> create it.", function(assert){
      
      var data = {a: "one", b: "two", "hokey": false};
      
      assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
      
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    });
*/

function updateObject(object, key, value) {
    for (var x in object) {
        if (x === key) {
           object[x] = value;
           return object;
        }    
    }
    object[key] = value;
    return object;
}   

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
 /* global removeProperties 
    QUnit.test("removeProperties() : Should take an object and an array of strings. 
    Should remove any properties on <object> that are listed in <array>", 
    function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});

      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["b"])
      assert.deepEqual(data, {a: "one", "hokey": false});

      var data = {a: "one", b: "two", hokey: false};
      removeProperties(data, []);
      assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    });
*/

function removeProperties(object, array) {
    for (var key in object) {
        for (var i = 0; i < array.length; i++) {
            if (key === array[i]) {
                delete object[key];
            }    
        }
    }
    console.log(object);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global dedup 
    QUnit.test( "dedup() : Should take an array and return an array with all 
    the duplicates removed", 
    function( assert ) {
      var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    });
*/

function dedup(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
                newArray.push(array[i]);
        }
    }
    console.log(newArray);
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}