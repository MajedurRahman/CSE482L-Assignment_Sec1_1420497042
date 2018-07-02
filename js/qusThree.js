function filter(array, isOdd) {
    var dataArray = [];
    if (isOdd) {
        for (let data of array) {
            if ((data % 2) === 1) {
                dataArray.push(data)
            }
        }

    }
    else  {
        for (let data of array) {
            if ((data % 2) === 0) {
                dataArray.push(data)
            }
        }
    }
    return dataArray
}