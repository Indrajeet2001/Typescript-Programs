
function LargestNum(Num : number[]) : number
{
    var Cnt = 0
    var Max = Num[0]

    for(Cnt = 0; Cnt < Num.length; Cnt++)
    {
        if(Max < Num[Cnt])
        {
            Max = Num[Cnt]
        }
    }
    return Max
}

var Num1 : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0

Ret = LargestNum(Num1)

console.log("Largest number is : "+Ret)