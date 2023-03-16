
function Summation(Num : number[]) : number
{
    var Cnt = 0
    var Add = 0

    for(Cnt = 0; Cnt < Num.length; Cnt++)
    {
        Add = Add + Num[Cnt]
    }
    return Add
}

var Num1 : number[] = [23,6,7,4,5,7]

var Ret : number = 0

Ret = Summation(Num1)

console.log("Summation of all the elements is : "+Ret)