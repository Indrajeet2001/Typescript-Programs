
class Circle
{
    // Characteristics
    Radius : number;
    PI : number;

    // Behaviours
    constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14;
    }

    Area() : number
    {
        return this.PI * this.Radius * this.Radius;
    }

    Circumference() : number
    {
        return 2 * this.PI * this.Radius;
    }

}

var obj1 = new Circle(10);
var obj2 = new Circle(5);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of circle is : "+Ret);

Ret = obj1.Circumference();
console.log("Circumference of circle is : "+Ret);

Ret = obj2.Area();
console.log("Area of circle is : "+Ret);

Ret = obj2.Circumference();
console.log("Circumference of circle is : "+Ret);