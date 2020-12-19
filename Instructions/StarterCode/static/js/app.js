// from data.js
var tableData = data;

// Reference to the table body
var tbody = d3.select("tbody");

//Console.log the UFO sightings data from data.js
console.log(data);

//Loop through `data` and console.log each UFO sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
  });

//Update each cell's text with UFO sightings data
data.forEach((ufoSighting) => {
var row = tbody.append("tr");
Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});