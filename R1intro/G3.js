// margini e dimensioni
/*var margin_g3 = {top: 40, right: 150, bottom: 60, left: 30},
    width_g3 = 500 - margin_g3.left - margin_g3.right,
    height_g3 = 420 - margin_g3.top - margin_g3.bottom;

// appendere evg al body
var svg3 = d3.select("#G3")
  .append("svg")
    .attr("width", width_g3 + margin_g3.left + margin_g3.right)
    .attr("height", height_g3 + margin_g3.top + margin_g3.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_g3.left + "," + margin_g3.top + ")");

d3.csv("https://raw.githubusercontent.com/AMC2202/test/main/table/G3_.csv", function(data) {
  
  // Asse X 
  var x = d3.scaleLinear()
    .domain([1, 12])
    .range([ 0, width_g3 ]);
  svg3.append("g")
    .attr("transform", "translate(0," + height_g3 + ")")
    .call(d3.axisBottom(x).ticks(3));

  // Label asse X 
  svg3.append("text")
      .attr("text-anchor", "end")
      .attr("x", width_g3)
      .attr("y", height_g3+50 )
      .text("issues");

  // Asse Y 
  var y = d3.scaleLinear()
    .domain([25, 90])
    .range([ height_g3, 0]);
  svg3.append("g")
    .call(d3.axisLeft(y));

  // Label asse Y 
  svg3.append("text")
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -20 )
      .text("month")
      .attr("text-anchor", "start")

  // scala per la dimensione delle bolle
  var z = d3.scaleLinear()
    .domain([1, 12])
    .range([ 1, 24]);

  // scala per il colore delle bolle
  var myColor = d3.scaleOrdinal()
    .domain(["Setting", "Working", "Testing"])
    .range(d3.schemeSet1);


  //TOOLTIP - nascosto di default        
  var tooltip = d3.select("#G3")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

  // Funzioni per mostrare, aggiornare e nascondere il tooltip 
  //var showTooltip = function(d) {
    //tooltip
      //.transition()
      //.duration(200)
    //tooltip
      //.style("opacity", 1)
      //.html("Country: " + d.country)
      //.style("left", (d3.mouse(this)[0]+30) + "px")
      //.style("top", (d3.mouse(this)[1]+30) + "px")
  //}
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

// Colore ai gruppi - in alternanza
  // se un gruppo è nascosto
  var highlight = function(d){
    // reduce opacity of all groups
    d3.selectAll(".bubbles").style("opacity", .05)
    // expect the one that is hovered
    d3.selectAll("."+d).style("opacity", 1)
  }

  // se il gruppo non è nascosto
  var noHighlight = function(d){
    d3.selectAll(".bubbles").style("opacity", 1)
  }

  // Add dots
  svg3.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function(d) { return "bubbles " + d.dep_type })
      .attr("cx", function (d) { return x(d.month); } )
      .attr("cy", function (d) { return y(d.n_inc); } )
      .attr("r", function (d) { return z(d.priority); } )
      .style("fill", function (d) { return myColor(d.dep_type); } )
    // -3- Trigger the functions for hover
    //.on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )

    //Legenda - Cerchi 
    /*var size = 20
    var allgroups = ["Setting", "Working", "Testing"]
    svg3.selectAll("myrect")
      .data(allgroups)
      .enter()
      .append("circle")
        .attr("cx", 390)
        .attr("cy", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("r", 7)
        .style("fill", function(d){ return myColor(d)})
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

    // Legenda - label
    svg3.selectAll("mylabels")
      .data(allgroups)
      .enter()
      .append("text")
        .attr("x", 390 + size*.8)
        .attr("y", function(d,i){ return i * (size + 5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return myColor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)
  })*/


  // margini e dimensioni
/*var margin_g3 = {top: 10, right: 30, bottom: 30, left: 60},
width_g3 = 460 - margin_g3.left - margin_g3.right,
height_g3 = 400 - margin_g3.top - margin_g3.bottom;

// appendi svg al body
var svg3 = d3.select("#G3")
.append("svg")
.attr("width", width_g3 + margin_g3.left + margin_g3.right)
.attr("height", height_g3 + margin_g3.top + margin_g3.bottom)
.append("g")
.attr("transform",
      "translate(" + margin_g3.left + "," + margin_g3.top + ")");

d3.csv("https://raw.githubusercontent.com/AMC2202/test/main/table/G3_.csv", function(data) {

// Asse X 
var x = d3.scaleLinear()
.domain([0, 12])
.range([ 0, width_g3 ]);
svg3.append("g")
.attr("transform", "translate(0," + height_g3 + ")")
.call(d3.axisBottom(x));

// Asse Y 
var y = d3.scaleLinear()
.domain([25, 75])
.range([ height_g3, 0]);
svg3.append("g")
.call(d3.axisLeft(y));

// scala per impostare il colore
var color = d3.scaleOrdinal()
.domain(["setting", "working", "testing" ])
.range([ "#440154ff", "#21908dff", "#fde725ff"])


// Animazione - mostra solo il tipo su cui è posizionato il mouse
var highlight = function(d){

selected_type = d.dep_type

d3.selectAll(".dot")
  .transition()
  .duration(200)
  .style("fill", "lightgrey")
  .attr("r", 3)

d3.selectAll("." + selected_type)
  .transition()
  .duration(200)
  .style("fill", color(selected_type))
  .attr("r", 7)
}

// Funziona Highlight - tipo nascosto
var doNotHighlight = function(){
d3.selectAll(".dot")
  .transition()
  .duration(200)
  .style("fill", "lightgrey")
  .attr("r", 5 )
}

// Add dots
svg3.append('g')
.selectAll("dot")
.data(data)
.enter()
.append("circle")
  .attr("class", function (d) { return "dot " + d.dep_type } )
  .attr("cx", function (d) { return x(d.month); } )
  .attr("cy", function (d) { return y(d.n_inc); } )
  .attr("r", 5)
  .style("fill", function (d) { return color(d.dep_type) } )
.on("mouseover", highlight)
.on("mouseleave", doNotHighlight )

})*/


// dimensioni e margini
var margin_g3 = {top: 40, right: 150, bottom: 60, left: 30},
    width_g3 = 650 - margin_g3.left - margin_g3.right,
    height_g3 = 470 - margin_g3.top - margin_g3.bottom;

// appendi svg al body
var svg3 = d3.select("#G3")
  .append("svg")
    .attr("width", width_g3 + margin_g3.left + margin_g3.right)
    .attr("height", height_g3 + margin_g3.top + margin_g3.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_g3.left + "," + margin_g3.top + ")");

d3.csv("https://raw.githubusercontent.com/AMC2202/test/main/table/G3.csv", function(data) {

  // Per disegnare i box bisogna calcolare quartili, mediana, range interquartile tra min e max 
  var sumstat = d3.nest() //consente di fare il calcolo su un valore
    .key(function(d) { return d.dep_name;})
    .rollup(function(d) {
      q1 = d3.quantile(d.map(function(g) { return g.n_inc;}).sort(d3.ascending),.25)
      median = d3.quantile(d.map(function(g) { return g.n_inc;}).sort(d3.ascending),.5)
      q3 = d3.quantile(d.map(function(g) { return g.n_inc;}).sort(d3.ascending),.75)
      interQuantileRange = q3 - q1
      min = q1 - 1.5 * interQuantileRange
      max = q3 + 1.5 * interQuantileRange
      return({q1: q1, median: median, q3: q3, interQuantileRange: interQuantileRange, min: min, max: max})
    })
    .entries(data)

  // Scala asse X 
  var x = d3.scaleBand()
    .range([ 0, width_g3 ])
    .domain(["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"])
    .paddingInner(1)
    .paddingOuter(.5)
  svg3.append("g")
    .attr("transform", "translate(0," + height_g3 + ")")
    .call(d3.axisBottom(x))

  // Label asse X
  svg3.append("text")
  .attr("text-anchor", "end")
  .attr("x", width_g3)
  .attr("y", height_g3+50 )
  .text("Sezioni");

  // Scala asse Y
  var y = d3.scaleLinear()
    .domain([0,100])
    .range([height_g3, 0])
  svg3.append("g").call(d3.axisLeft(y))

  // Label asse Y 
  svg3.append("text")
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

   // funzioni per gestire il tooltip
   var mouseover = function(d) {
     tooltip_g1
     .style("opacity", 1)
   d3.select(this)
     .style("stroke", "black")
     .style("opacity", 1)
   }
    var mousemove = function(d) {
      tooltip_g1
        .html("Median: " + d.value.median + "<br>Min: " + d.value.min + "<br>Max: " + d.value.max)
        .style("left", (d3.mouse(this)[0]+50) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("bottom", (d3.mouse(this)[1]) + "px")
    }

    var mouseleave = function(d) {
      tooltip_g1
        .style("opacity", 0)
      d3.select(this)
    }

  // scala per il colore dei box
  var myColor = d3.scaleOrdinal()
  .domain(["Setting", "Working", "Testing"])
  .range(["#69b3a2", "#80b3ff", "#404080"])
  svg3.selectAll("boxes")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", function(d){return myColor(d) })
    

    // Legenda - cerchi
    /*var size = 5
    var allgroups = ["Setting", "Working", "Testing"]
    svg3.selectAll("myrect")
      .data(allgroups)
      .enter()
      .append("circle")
        .attr("cx", 540)
        .attr("cy", function(d,i){ return 10 + i*(size+5)})
        .attr("r", 6)
        .style("fill", function(d){ return myColor(d)})
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

    // Legenda - label
    svg3.selectAll("mylabels")
      .data(allgroups)
      .enter()
      .append("text")
        .attr("x", 550)
        .attr("y", function(d,i){ return i * (size + 5) + (size/2)})
        .style("fill", function(d){ return myColor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)*/
  


  // Linee verticali
  svg3
    .selectAll("vertLines")
    .data(sumstat)
    .enter()
    .append("line")
      .attr("x1", function(d){return(x(d.key))})
      .attr("x2", function(d){return(x(d.key))})
      .attr("y1", function(d){return(y(d.value.min))})
      .attr("y2", function(d){return(y(d.value.max))})
      .attr("stroke", "black")
      .style("width", 40)

  // rettangolo per il box principale
  var boxWidth = 30
  svg3
    .selectAll("boxes")
    .data(sumstat)
    .enter()
    .append("rect")
        //.attr("class", function(d) { return "circle " + d.dep_type })
        .attr("x", function(d){return(x(d.key)-boxWidth/2)})
        .attr("y", function(d){return(y(d.value.q3))})
        .attr("height", function(d){return(y(d.value.q1)-y(d.value.q3))})
        .attr("width", boxWidth )
        .attr("stroke", "black")
        //style("fill", function (d) { return myColor(d.dep_type); } )
        .style("fill", "#69b3a2")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

  

  // Linee per disegnare la Mediana
  svg3
    .selectAll("medianLines")
    .data(sumstat)
    .enter()
    .append("line")
      .attr("x1", function(d){return(x(d.key)-boxWidth/2) })
      .attr("x2", function(d){return(x(d.key)+boxWidth/2) })
      .attr("y1", function(d){return(y(d.value.median))})
      .attr("y2", function(d){return(y(d.value.median))})
      .attr("stroke", "black")
      .style("width", 80)


  // Handmade legend
/*svg3.append("circle").attr("cx",540).attr("cy",10).attr("r", 6).style("fill", "#69b3a2")
svg3.append("circle").attr("cx",540).attr("cy",40).attr("r", 6).style("fill", "#80b3ff")
svg3.append("circle").attr("cx",540).attr("cy",70).attr("r", 6).style("fill", "#404080")
svg3.append("text").attr("x", 550).attr("y", 10).text("Setting").style("font-size", "15px").attr("alignment-baseline","middle")
svg3.append("text").attr("x", 550).attr("y", 40).text("Working").style("font-size", "15px").attr("alignment-baseline","middle")
svg3.append("text").attr("x", 550).attr("y", 70).text("Testing").style("font-size", "15px").attr("alignment-baseline","middle")*/
  
})