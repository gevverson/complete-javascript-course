console.log('Hello World');

function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log('draw');
    },
  };
}
const circle = createCircle(1);
console.log(circle);
console.log(circle.radius);
console.log(circle.draw());
console.log(circle['radius']);
console.log(circle['draw']());
console.log(circle.draw);
console.log(circle.draw.name);
console.log(circle.draw.name);
console.log(circle.draw.length);
console.log(circle.draw.constructor);
console.log(circle.draw.constructor.name);
circle.draw();
