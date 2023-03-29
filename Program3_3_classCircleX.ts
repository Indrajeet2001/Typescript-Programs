
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

class CircleX extends Circle
{
    constructor(Data : number)
    {
        super(Data);
    }

    CircumferenceofCircle(): number 
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;    
    }
}

var obj1 = new CircleX(10);
var obj2 = new CircleX(5);

var Ret : number = 0;

Ret = obj1.CircumferenceofCircle();
console.log("Circumference of circle is : "+Ret);
