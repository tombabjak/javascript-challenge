var tableData = data;

var form = d3.select("#form");
form.on("submit", runEnter);

var button = d3.select("#filter-adv-btn");
button.on("click", runEnter);

var reset_btn = d3.select("#reset-btn");
var filter_condition = [];
var filter_input = [];
var click_flag = false;

reset_btn.on("click", function() {
  d3.select("#filter_value").property("value","");
  filter_condition = [];
  filter_input = [];
  click_flag = false;
  var tbody = d3.select("tbody")
  tbody.text("");
  d3.select(".filter").selectAll("li").remove();
});

function runEnter() {
  d3.event.preventDefault();

  var adv_filter_data = [];
  var inputElement = d3.select("#filter_value");
  var inputValue = inputElement.property("value");
  var criteria_inputElement = d3.select("#query_item");
  var criteria_inputValue = criteria_inputElement.property("value");
      
  d3.select(".filter").append("li").text(criteria_inputValue+": "+ inputValue);
  filter_condition.push(criteria_inputValue);
  filter_input.push(inputValue);

  var filter_array = {};
  filter_condition.forEach((key, i) => filter_array[key] = filter_input[i]);
  console.log(filter_array);

  adv_filter_data = tableData.filter(function(item) {
    for (var key in filter_array) {
      if (item[key] === undefined || item[key] != filter_array[key])
        return false;
      }
    return true;
  });
   
  var tbody = d3.select("tbody");
  tbody.text("");
  adv_filter_data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

