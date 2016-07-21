// pluck(arr, key)
// Given an array of objects, pluck the object values associated with the provided key.

// Example Input

var albums = [
  { name: 'Gossamer', artist: 'Passion Pit' },
  { name: 'Sigh no more', artist: 'Mumford and Sons' },
  { name: 'Time to Pretend', artist: 'MGMT' }
];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]

function pluck(arr, key) {
  var values = [];
  arr.forEach(function(i){
    values.push(i[key]);
  })
  console.log(values);
}

pluck(albums, 'artist');
