var width = document.getElementById('map').clientWidth;
//this allows us to collect the width of the div where the SVG will go.
var height = width / 3.236;
//I like to use the golden rectangle ratio if they work for my charts.

// Create SVG and group "g"
var svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

// Create projection
var projection = d3.geoMercator() // mercator makes it easy to center on specific lat/long
    .translate([ width / 2, height / 2])
    .scale(100) //use scale to zoom in and out
    //.center([-73.94, 40.70]); // long, lat of NYC

//Create a geo path generator using the projection above
var pathGenerator = d3.geoPath()
    .projection(projection);

//Loading GeoJSON data

d3.json("{% static '/geo/world110.json' %}")
    .then(function(data){ 
        console.log(data)
        
        // Convert topojson to usable in d3
        var countries = topojson.feature(data, data.objects.countries).features 
        console.log(countries)

        svg.selectAll(".country")
            .data(countries)
            .enter().append("path")
            .attr("class", "country")
            .attr("d", pathGenerator)
            //add class 'selected'
            .on('mouseover', function(d){
                d3.select(this).classed("selected", true)
            })
            //remove class 'selected'
            .on('mouseout', function(d){
                d3.select(this).classed("selected", false)
            });
    });





//We will build a basic function to handle window resizing.
function resize() {
    width = document.getElementById('map').clientWidth;
    height = width / 3.236;
    d3.select('#map svg')
    .attr('width', width)
    .attr('height', height);
}

window.onresize = resize;
//Call our resize function if the window size is changed.