// docs: http://www.adaltas.com/projects/node-csv/
var csv = require('csv');

//read a file and use the first line to determine columns
csv().from.path("example.csv", {columns: true})
.to.array(function(data) {
  // now we have all the data as objects
  console.log("data", data)

  var categories = {}
  //loop over the data
  data.forEach(function(d) {
    // for every piece of data we come across, put it into a new array
    // based on its category. if the array for the category doesn't exist yet
    // we make it.
    if(!categories[d.category]) categories[d.category] = [];
    // push the piece of data onto the array
    categories[d.category].push(d);
  })

  // write out two new csvs
  var cats = Object.keys(categories);
  cats.forEach(function(c) {
    // c is the name of the category
    // cat is the array
    var cat = categories[c];
    console.log("CAT", cat)
    csv().from.array(cat)
    .to.path(c + ".csv")
  })
})

