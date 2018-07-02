function extend(obj1, obj2, obj3) {
    var newOBJ = {};


    for (let obj in arguments) {

        let data  =arguments[obj]
        Object.keys(data).forEach(function (key) {
            newOBJ[key] = data[key];
            console.log(key, data[key])
        });
    }
    return newOBJ;

}