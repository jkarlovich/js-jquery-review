// pair(obj)
// Construct array pairs from objects.

// Example Input

var obj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]

function pair(obj) {
  var keyArray = Object.keys(obj);
  var arrayOfKeyValuePairs = [];
  keyArray.forEach(function(key){
    var pair = [];
    pair.push(key);
    pair.push(obj[key]);
    arrayOfKeyValuePairs.push(pair);
  })
  console.log(arrayOfKeyValuePairs);
}

pair(obj);
