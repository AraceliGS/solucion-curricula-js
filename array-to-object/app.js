var car = [['brand', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
           //(0,0)    (0,1)     (1,0)    (1,1)       (2,0)   (2,1)

var student = [['name', 'Araceli'], ['age', 18], ['hobbie', 'escuchar música']];

var arrayToObject = function(array2D) {

var newObject = {};

for (var i = 0; i < array2D.length; i++){

  newObject [array2D[i][0]] = array2D[i][1];

}

return newObject;

}

console.log(arrayToObject(car));

console.log(arrayToObject(student));

/*var object = {};

object[car[0][0]] = car[0][1];

object[car[1][0]] = car[1][1];

object[car[2][0]] = car[2][1];

console.log(object);
*/
