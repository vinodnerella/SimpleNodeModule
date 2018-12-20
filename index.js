var rect = {
    area: (x,y) => x*y,
    perimeter: (x,y) => (2*(x+y))
};

function RectAngle(l,b){
    console.log("Calcculating Area and Permiter for Length" + l + "and Breadth" + b);
    if(l<=0 || b<=0){
        console.log("Wrong Values");
    }
    else{
    console.log("Area is" + rect.area(l,b));
    console.log("Perimeter is" + rect.perimeter(l,b));
    }
}

RectAngle(4,5);
RectAngle(-4,5);
RectAngle(10,5)