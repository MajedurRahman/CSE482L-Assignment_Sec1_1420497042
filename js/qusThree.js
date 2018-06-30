
function filter(array, isOdd) {
    if (!isOdd) {
        return array.filter(function (element, index, array) {
            return (index % 2 === 0);
        })
    }
    else {
        return array.filter(function (element, index, array) {
            return (index % 2 === 1);
        })
    }

}