// margini e dimensioni
var margin_g1 = {top: 35, right: 10, bottom: 70, left: 80},
    width_g1 = 500 - margin_g1.left - margin_g1.right,
    height_g1 = 460 - margin_g1.top - margin_g1.bottom;

// appendere svg al body
var svg1 = d3.select("#G1")
  .append("svg")
    .attr("width", width_g1 + margin_g1.left + margin_g1.right)
    .attr("height", height_g1 + margin_g1.top + margin_g1.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_g1.left + "," + margin_g1.top + ")");
// Parse dati
d3.csv("https://raw.githubusercontent.com/AMC2202/test/main/table/G1new.csv", function(data) {

// asse X 
var x = d3.scaleBand()
  .range([ 0, width_g1 ])
  .domain(data.map(function(d) { return d.plant; }))
  .padding(0.2);
svg1.append("g")
  .style("font-size", 12)
  .attr("transform", "translate(0," + height_g1 + ")")
  .call(d3.axisBottom(x))
  //.selectAll("text")
    //.attr("transform", "translate(-10,0)rotate(-45)")
    //.style("text-anchor", "end");
  
  // Label asse X 
  svg1.append("text")
  .attr("text-anchor", "end")
  .attr("x", width_g1)
  .attr("y", height_g1+50)
  .text("Aree");

// Asse Y 
var y = d3.scaleLinear()
  .domain([8200, 8500])
  .range([ height_g1, 0]); //height
svg1.append("g")
  .style("font-size", 12)
  .call(d3.axisLeft(y));


  // Asse Y
  svg1.append("text")
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -20 )
      .text("Segnalazioni")
      .attr("text-anchor", "start")

    //tooltip
    var tooltip_g1 = d3.select("#G1")
       .append("div")
       .style("opacity", 0)
       .attr("class", "tooltip")
       //.style("background-color", "white")
       .style("border", "solid")
       .style("border-width", "1px")
       .style("border-radius", "5px")
       .style("padding", "10px")

     // Funzioni per la gestione del tooltip
     /*var mouseover = function(d) {
       tooltip_g1
           .style("opacity", 1)
     }*/
     /*var mouseleave = function(d) {
       tooltip_g1
         .style("opacity", 0)
     }*/

    // Funzioni per la gestione del tooltip
    var mouseover = function(d) {
      tooltip_g1
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
    }
     var mousemove = function(d) {
       tooltip_g1
         .html("Total issues: " + d.value)
         .style("left", (d3.mouse(this)[0]+90) + "px") // mettere +90: altrimenti il tooltip è esattamente dove si trova il punto
         .style("bottom", (d3.mouse(this)[1]) + "px")
     }

     var mouseleave = function(d) {
       tooltip_g1
         .style("opacity", 0)
       d3.select(this)
         .style("stroke", "none")
         .style("opacity", 0.8)
     }

     // Bars
     svg1.selectAll("mybar")
       .data(data)
       .enter()
       .append("rect")
         .attr("x", function(d) { return x(d.plant); })
         .attr("width", x.bandwidth())
         .attr("fill", "#80aaff")
         // no bar at the beginning thus:
         .attr("height", function(d) { return height_g1 - y(0); }) // always equal to 0
         .attr("y", function(d) { return y(0); })
         .on("mouseover", mouseover)
         .on("mousemove", mousemove)
         .on("mouseleave", mouseleave)


// Animation
svg1.selectAll("rect")
  .transition()
  .duration(850)
  .attr("y", function(d) { return y(d.value); })
  .attr("height", function(d) { return height_g1 - y(d.value); })
  .delay(function(d,i){console.log(i) ; return(i*100)})

})
