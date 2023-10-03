function compareArrays(arr1, arr2) {
    
    if (arr1.every((value, index) => value === arr2[index]) === true && arr2.every((value, index) => value === arr1[index]) === true) {
        return true;
    } else {
        return false
    }
}

function getUsersNamesInAgeRange(users, gender) {

    /*let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, result) => {
        acc += item;
        if (index === result.length - 1) {
            return acc / result.length;
        }
        return acc;
    }, 0); */

    return users.filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);

    //return result;
}