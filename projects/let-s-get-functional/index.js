// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-paulmarinaro');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! 
 *    Make the rest in that style.
 * 
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    
    var numberOfMales = _.filter(customers, function(element, index, array) {
        return element.gender === 'male';
    })
    return numberOfMales.length;
};

var femaleCount = function(array) {

    var numberOfFemales = _.filter(customers, function(element, index, array) {
        return element.gender === 'female';
    })
    return numberOfFemales.length;
};

var oldestCustomer = function(array) {
    var currentOldest;
    _.each(customers, function(element, index, array) {
        if (!currentOldest) {
            currentOldest = element;
        }
            if (element.age > currentOldest.age) {
            currentOldest = element;
        }
    })
    return currentOldest.name;
};

var youngestCustomer = function(array) {
  var currentYoungest;
    _.each(customers, function(element, index, array) {
        if (!currentYoungest) {
            currentYoungest = element;
        }
            if (element.age < currentYoungest.age) {
            currentYoungest = element;
        }
    })
    return currentYoungest.name;
};

var averageBalance = function(array) {
    var allBalances = [];
    var average = 0;
    //find the average balance of all the customers
    // find all the balances
    _.each(customers, function(element, index, array) {
        allBalances.push(element.balance);
    })
        // average = add all the balances together and divide by the total number
    for (var i = 0; i < allBalances.length; i++) {
        // get rid of all "," and "$", replace with nothing ""
        var balanceWithoutComma = allBalances[i].replace(",", "");
        var balanceWithoutDollarSign = balanceWithoutComma.replace("$","");
        // add allBalances together
        average += Number(balanceWithoutDollarSign); 
    }
    // divide the total of all balances by the total number of balances
    return average/customers.length;
};
// console.log(averageBalance(customers));

var firstLetterCount = function(array, letter) {
    var numCustWithLetter = _.filter(array, function(element, index, array) {
        if (element.name[0].toLowerCase() === letter.toLowerCase()) {
            return element.name;
        }
    })
    return numCustWithLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    // create array for all customer's friends that start with letter 
    var customerFriendsWithLetter = [];
    // search array for customer
    var currentCustomer = _.filter(array, function(element, index, array) {
        // finds customer
        if (element.name === customer) {
            // searches through friends
            _.filter(element.friends, function(element, index, array) {
                // finds customers friends with letter
                if (element.name[0].toLowerCase() === letter.toLowerCase()) {
                    // pushes friends with letter into array
                    customerFriendsWithLetter.push(element.name);
                } 
            })
        }
    })
    return customerFriendsWithLetter.length;
};

var friendsCount = function(array, name) {
    // who's friends with who
    if (name === undefined) {
        return [];
    }   else {
        var isFriendsWith = [];
        // search each element of customers array, 
        // i.e. each customer (object)
        _.each(array, function(element, index, array) {
            // search each VALUE of customer's friends list, 
            // i.e. customer's friends (array)
            _.each(element.friends, function(value, index, array) {
                // if VALUE (friend) on customer's list matches the name searched for
                if (value.name === name) {
                // push that customer's name (ELEMENT) to isFriendsWith array    
                isFriendsWith.push(element.name);
                }; 
            })
        })
        return isFriendsWith;
    }
};

var topThreeTags = function(array) {
    // Find the three most common tags among all customers' 
    // associated tags
    
    // make array to hold all the tags
    var allTags = [];
    // push all tags into array
    _.each(array, function(element, index, array) {
        _.each(element.tags, function(value, index, array) {
            allTags.push(value);
        })
    })
    // make array to hold current first, second, and third most 
    // used tags
    var firstMost = [null, 0];
    var secondMost = [null, 0];
    var thirdMost = [null, 0];
    // sort all the tags
    allTags.sort();
    // count how many each is duplicated
    var current = null;
    var cnt = 0;
    // for (var i = 0; i < array_elements.length; i++) {
    // loop through allTags
    _.each(allTags, function(element, index, array) {
        if (element != current) {
            if (cnt > 0) {
                // compare each duplication to first, second, 
                // third most arrays
                // if more than current first, become first
                if (cnt > firstMost[1]) {
                    firstMost = [current, cnt];
                    // else if more than second, become second
                }   else if (cnt > secondMost[1]) {
                    secondMost = [current, cnt];
                    // else if more than third, become third
                }   else if (cnt > thirdMost[1]) {
                    thirdMost = [current, cnt];
                }
            }
            current = element;
            cnt = 1;
        } else {
            cnt++;
        }
    })
    // counts the last tag
    if (cnt > 0) {
        if (cnt > firstMost[1]) {
                    firstMost = [current, cnt];
                }   else if (cnt > secondMost[1]) {
                    secondMost = [current, cnt];
                }   else if (cnt > thirdMost[1]) {
                    thirdMost = [current, cnt];
                }
    }
    return [firstMost[0], secondMost[0], thirdMost[0]];
};

var genderCount = function(array) {
    var males = 0;
    var females = 0;
    var transgenders = 0;
    var genders = [];
    // make an array with all the genders
    _.each(array, function(element, index, array) {
        genders.push(element.gender);
    })
    // add each gender to a separate array
    _.reduce(genders, function(previousTotal, currentGender, currentIndex) {
        //seed = func(seed, array[i], i);
        if (currentGender === 'male') {
            previousTotal = males;
            currentGender = 1;
            males = previousTotal + currentGender;
            return males;
        }   else if (currentGender === 'female') {
            previousTotal = females;
            currentGender = 1;
            females = previousTotal + currentGender;
            return females;
        }   else if (currentGender === 'transgender') {
            previousTotal = transgenders;
            currentGender = 1;
            transgenders = previousTotal + currentGender;
            return transgenders;
        }
    }, 0)
    // combine all gender arrays into an object
    return {male: males, female: females, transgender: transgenders};
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
