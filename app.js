var y = 4; 
let circleType = 'Unknown Circle'; // Global Variable
// Local Scope

let circleArea = function (r, pi = 3.14){
    var area = pi * r * r; // Local Variable
    return area;
}

let circleAreaArrow = r => pi * r * r;

let triangleArea = (b, h) => (h * b) / 2;

var result = circleArea(20);

if (result > 20){
    circleType = 'Bigger Circle';  // It should be a global variable
    console.log(circleType);
} else{
    circleType = 'Smaller Circle';
    console.log(circleType);
}

console.log(result); // worked

console.log(triangleArea(10, 20));

// console.log(area); // undefined

console.log(circleType); // ?
