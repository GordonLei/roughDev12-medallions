// Context + Canvas
var svgContainer = document.getElementById("SVG");

//buttons
var changeButton = document.getElementById("changeButton");

//master variables
var jpCount = [4,5,4];
var nlCount = [8,6,6];
var isJapan = true;
//functions
var createCircle = function(x,y,r,fill){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    svgContainer.appendChild(circle);
};

var c1 = createCircle(100,100,10,"gold");
var c2 = createCircle(200,200,10,"silver");
var c3 = createCircle(300,300,10,"goldenrod");

var updateCircles = function(){
    var circlesArray = d3.selectAll("circle");
    var button = d3.selectAll("button");
    if (isJapan){
        circlesArray.data(nlCount);
        circlesArray.attr("r", function(d){
            return 10 * d;
        });
        button.text("Change to Japan");
        isJapan = false;
    }
    else{
        circlesArray.data(jpCount);
        circlesArray.attr("r", function(d){
            return 10 * d;
        });
        button.text("Change to Netherlands");
        isJapan = true;
    }
};

updateCircles();
changeButton.addEventListener("click", updateCircles);
