function extend(obj1, obj2, obj3) {
    var newOBJ = {};
    Object.keys(obj1).forEach(function (key) {
        newOBJ[key] = obj1[key];

        console.log(key , obj1[key])
    });

    Object.keys(obj2).forEach(function (key) {
        newOBJ[key] = obj2[key];
        console.log(key , obj2[key])

    });
    Object.keys(obj3).forEach(function (key) {
        newOBJ[key] = obj3[key];
        console.log(key , obj3[key])

    });
    console.log((newOBJ.toString()));
    return newOBJ;

}