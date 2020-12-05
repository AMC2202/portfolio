// margini e dimensioni
var margin_g2 = {top: 30, right: 10, bottom: 70, left: 80},
  width_g2 = 500 - margin_g2.left - margin_g2.right,
  height_g2 = 460 - margin_g2.top - margin_g2.bottom;

// appendere svg al body
var svg2 = d3.select("#G2")
.append("svg")
  .attr("width", width_g2 + margin_g2.left + margin_g2.right)
  .attr("height", height_g2 + margin_g2.top + margin_g2.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin_g2.left + "," + margin_g2.top + ")");

d3.csv("https://raw.githubusercontent.com/AMC2202/test/main/table/G2new.csv", function(data) {

  // id unique delle colonne 'group' e 'variable'
  var myGroups = d3.map(data, function(d){return d.plant;}).keys()
  var myVars = d3.map(data, function(d){return d.department;}).keys()

  // Asse X
  var x = d3.scaleBand()
    .range([ 0, width_g2 ])
    .domain(myGroups)
    .padding(0.05);
  svg2.append("g")
    .style("font-size", 12)
    .attr("transform", "translate(0," + height_g2 + ")")
    .call(d3.axisBottom(x))//.tickSize(0))
    //.select(".domain").remove()

    // Label asse X 
    svg2.append("text")
    .attr("text-anchor", "end")
    .attr("x", width_g2)
    .attr("y", height_g2+50)
    .text("Stabilimenti");

  // Asse Y 
  var y = d3.scaleBand()
    .range([ height_g2, 0 ])
    .domain(myVars)
    .padding(0.05);
  svg2.append("g")
    .style("font-size", 12)
    .call(d3.axisLeft(y))//.tickSize(0))
    //.select(".domain").remove()

    // Label asse Y 
    svg2.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", -15)
    .text("Dipartimenti")
    .attr("text-anchor", "start")

// Scala di colore
var myColor = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,100])

  // tooltip
  var tooltip_g2 = d3.select("#G2")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    //.style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Funzioni per la gestione del tooltip
  var mouseover = function(d) {
    tooltip_g2
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    tooltip_g2
      .html("Monthly Average: " + d.mean)
      .style("right", (d3.mouse(this)[0]+50) + "px")
      .style("bottom", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    tooltip_g2
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }


  // squares
  svg2.selectAll()
    .data(data, function(d) {return d.plant+':'+d.department;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.plant) })
      .attr("y", function(d) { return y(d.department) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.mean)} )
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})
