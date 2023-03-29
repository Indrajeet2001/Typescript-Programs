
class Arithmetic
{
    // Characteristics
    Number1 : number;
    Number2 : number;

    // Behaviours
    constructor(A : number, B : number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }

    Addition() : number
    {
        return this.Number1 + this.Number2;
    }

    Subtraction() : number
    {
        return this.Number1 - this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2;
    }

    Division() : number
    {
        return this.Number1 % this.Number2;
    }

}

var obj1 = new Arithmetic(10,11);
var obj2 = new Arithmetic(10,2);

var Ret : number = 0;

Ret = obj1.Subtraction();
console.log("Subtraction is : "+Ret);

Ret = obj1.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = obj2.Division();
console.log("Division is : "+Ret);

Ret = obj2.Addition();
console.log("Addition is : "+Ret);

Ret = obj2.Subtraction();
console.log("Subtraction is : "+Ret);

Ret = obj2.Multiplication();
console.log("Multiplication is : "+Ret);
