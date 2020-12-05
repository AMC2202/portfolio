// set the dimensions and margins of the graph
/*var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
//Read the data
d3.csv("https://raw.githubusercontent.com/AMC2202/test/main/table/data.csv",
  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  },
  // Now I can use this dataset:
  function(data) {
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [12750, 12900])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));
    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

    // create a tooltip
    var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "1px")

      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function(d) {
        Tooltip
          .style("opacity", 1)
      }
      var mousemove = function(d) {
        Tooltip
          .html("Exact value: " + d.value)
          .style("left", (d3.mouse(this)[0]+50) + "px")
          .style("bottom", (d3.mouse(this)[1]) + "px")
      }
      var mouseleave = function(d) {
        Tooltip
          .style("opacity", 0)
      }

    // Add the points
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function(d) { return x(d.date) } )
        .attr("cy", function(d) { return y(d.value) } )
        .attr("r", 5)
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 3)
        .attr("fill", "white")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        //.attr("fill", "#69b3a2")
})*/
//funziona, ma per il momento non mi serve, non è significativa. Meglio un barchrt per questi dati.
//anche la seguente rappresentazione statistica funziona ma non sembra indicativa per quei dati. Meglio una heapmap.
//add this code in html page
/*<div style="padding-left:80px; display:inline-block">
<button style="float:center" onclick="update(data2019)" class="btn">2019</button>
<button style="float:center" onclick="update(data2020)" class="btn">2020</button>
</div>*/ //and then this code here
// create 2 data_set
/*var data2019 = [
   {group: "D1", value: 29.9},
   {group: "D2", value: 30.1},
   {group: "D3", value: 30.2},
   {group: "D4", value: 30.1},
   {group: "D5", value: 30.2},
   {group: "D6", value: 68.7},
   {group: "D7", value: 69.0},
   {group: "D8", value: 69.0}
];

var data2020 = [
   {group: "D1", value: 30.0},
   {group: "D2", value: 29.9},
   {group: "D3", value: 30.1},
   {group: "D4", value: 29.9},
   {group: "D5", value: 30.0},
   {group: "D6", value: 69.1},
   {group: "D7", value: 69.0},
   {group: "D8", value: 69.1}
];

// set the dimensions and margins of the graph
var margin_g2 = {top: 30, right: 10, bottom: 70, left: 80},
    width_g2 = 550 - margin_g2.left - margin_g2.right,
    height_g2 = 510 - margin_g2.top - margin_g2.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#G2")
  .append("svg")
    .attr("width", width_g2 + margin_g2.left + margin_g2.right)
    .attr("height", height_g2 + margin_g2.top + margin_g2.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_g2.left + "," + margin_g2.top + ")");

// X axis
var x = d3.scaleBand()
  .range([ 0, width_g2 ])
  .domain(data2019.map(function(d) { return d.group; }))
  .padding(0.2);
svg2.append("g")
  .attr("transform", "translate(0," + height_g2 + ")")
  .call(d3.axisBottom(x))

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 80])
  .range([ height_g2, 0]);
svg2.append("g")
  .attr("class", "myYaxis")
  .call(d3.axisLeft(y));

// A function that create / update the plot for a given variable:
function update(data) {

  var u = svg2.selectAll("rect")
    .data(data)

  u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.group); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height_g2 - y(d.value); })
      .attr("fill", "#80aaff")
}

// Initialize the plot with the first dataset
lastupdate*/
