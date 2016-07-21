// zip(array, array2)
// Merge two arrays with the values at their corresponding positions

// Example Input

var artists = ['Passion Pit', 'Mumford and Sons', 'MGMT'];
var albums = ['Gossamer', 'Sigh no more', 'Time to Pretend'];

// Example Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]
function zip(array, array2) {
  var zipped = [];
  for (var i = 0; i < array.length; i++) {
    var pair = [];
    pair.push(array[i]);
    pair.push(array2[i]);
    zipped.push(pair);
  }
  console.log(zipped);
}

zip(artists, albums);
