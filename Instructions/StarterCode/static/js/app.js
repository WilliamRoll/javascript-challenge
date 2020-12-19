// from data.js
var tableData = data;
var tableData2 = data;

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

//Select the button and form
var button = d3.select("#button");
var form = d3.select("#form");

//Event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Event handler function
function runEnter() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData2);
  
    var filteredData = tableData2.filter(filterItem => filterItem.datetime === inputValue);
  
    console.log(filteredData);

        // Reference to the table body
        var tbody = d3.select("tbody");

        tbody.html("");

        //Update each cell's text with UFO sightings data with filter
        filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });


}