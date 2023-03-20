// Using By Pattern 1


module.exports={getGreeting:
 function(name, birthYear, birthMonth, birthDay) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    if (typeof name !== 'string' || typeof birthYear !== 'number' || typeof birthMonth !== 'number' || typeof birthDay !== 'number') {
      //throw new Error('Invalid input: name must be a string, birth year, month, and day must be numbers');
      //console.log('Invalid input: name must be a string, birth year, month, and day must be numbers');
       return 'Invalid input: name must be a string, birth year, month, and day must be numbers';
    }
    if (birthYear >= currentYear || birthYear < 1900) {
      //throw new Error('Invalid birth year: please enter a valid birth year between 1900 and ' + (currentYear - 1));
      //console.log('Invalid birth year: please enter a valid birth year between 1900 and ' + (currentYear - 1));
      return 'Invalid birth year: please enter a valid birth year between 1900 and ' + (currentYear - 1);
    }
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    if (isNaN(birthDate.getTime())) {
      //throw new Error('Invalid birth date: please enter a valid date in the format (YYYY, MM, DD)');
      //console.log('Invalid birth date: please enter a valid date in the format (YYYY, MM, DD)');
      return 'Invalid birth date: please enter a valid date in the format (YYYY, MM, DD)'; 
    }
    return 'Hello ' + name + ', your age now is: ' + age;
  }
};

// // ------------------------------------------ Another Way By Pattern 2 ----------------------------------------
// // Using By Pattern 2
// var greeting= 
//     function(name, birthYear, birthMonth, birthDay) {
//        var currentYear = new Date().getFullYear();
//        var age = currentYear - birthYear;
//        if (typeof name !== 'string' || typeof birthYear !== 'number' || typeof birthMonth !== 'number' || typeof birthDay !== 'number') {
//          //throw new Error('Invalid input: name must be a string, birth year, month, and day must be numbers');
//          //console.log('Invalid input: name must be a string, birth year, month, and day must be numbers');
//           return 'Invalid input: name must be a string, birth year, month, and day must be numbers';
//        }
//        if (birthYear >= currentYear || birthYear < 1900) {
//          //throw new Error('Invalid birth year: please enter a valid birth year between 1900 and ' + (currentYear - 1));
//          //console.log('Invalid birth year: please enter a valid birth year between 1900 and ' + (currentYear - 1));
//           return 'Invalid birth year: please enter a valid birth year between 1900 and ' + (currentYear - 1);
//        }
//        const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
//        if (isNaN(birthDate.getTime())) {
//          throw new Error('Invalid birth date: please enter a valid date in the format (YYYY, MM, DD)');
//          //console.log('Invalid birth date: please enter a valid date in the format (YYYY, MM, DD)');
//           return 'Invalid birth date: please enter a valid date in the format (YYYY, MM, DD)';  
//        }
//        return 'Hello ' + name + ', your age now is: ' + age;
//      }

// module.exports=greeting;
