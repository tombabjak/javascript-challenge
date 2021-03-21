// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Use the form input to filter the data by date
    function selectDate(data) {
      return data.datetime === inputValue;
    }
    
    var filteredDate = data.filter(selectDate);
  
    // Select table body
    var tbody = d3.select("tbody")

    // Clear table body
    tbody.text("");

    // Use d3 to update each cell's text, with Arrow Functions
    filteredDate.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

};
      
