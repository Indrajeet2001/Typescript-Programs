
function Fibonacci(Num : number) : void
{
    var Cnt1 = 1
    var Cnt2 = 0
    var Sum = 1

    console.log(Sum)

    while(Sum < Num)
    {
        Sum = Cnt1 + Cnt2
        console.log(Sum)
        Cnt2 = Cnt1
        Cnt1 = Sum
    }

}

var Value : number = 21

Fibonacci(Value)
