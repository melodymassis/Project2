//Resize window
d3.select(window).on("resize", makeResponsive);

makeResponsive();

function makeResponsive(){

    var svgArea = d3.select("body").select("svg");
    if (!svgArea.empty()){
        svgArea.remove();
    }


    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;

    var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
    };

    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    // Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
    var svg = d3.select(".chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

    var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Import Data
    d3.csv("assets/data/eCars.csv", function (err, carData) {
    if (err) throw err;

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    carData.forEach(function (data) {
        data.price = +data.price;
        data.Range = +data.Range;
        data.url = +data.url;
    });

    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
        .domain([68, d3.max(carData, d => d.price)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([50, d3.max(carData, d => d.Range)])
        .range([height, 0]);


    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
    .data(carData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.price))
    .attr("cy", d => yLinearScale(d.Range))
    .attr("r", "15")
    .attr("fill", "blue")
    .attr("opacity", ".5")
    
    var shoppingURL = svg.selectAll("circle")
    .data(carData)
    .enter()
    .append("svg:a")
    .attr("xlink:href", url)

    // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([90, -60])
        .html(function (d) {
        return (`${d.makeModel}<br>Starting Price: $${d.price}<br>Mile Range: ${d.Range}`);
        });

    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("mouseover", function (data) {
        toolTip.show(data);
        })
        // onmouseout event
        .on("mouseout", function (data, index) {
        toolTip.hide(data);
        })
        .on("click", function(d) {
            // Click through links
            window.location.href = "www.google.com"
        });

    // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Mile Range");

    chartGroup.append("text")
        .attr("transform", `translate(${width/2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("Starting Price");
    });
};


