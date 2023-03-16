
function Area(Radius : number) : number
{
    var PI = 3.14

    var Area = 0

    Area = PI * Radius * Radius

    return Area
}

var Num : number = 5

var Ret : number = 0

Ret = Area(Num)

console.log("The Area of the circle is : "+Ret)