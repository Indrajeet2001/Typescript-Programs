
function Maximum(Arr : number[]) : number
{
    var Max = Arr[0]
    var Cnt = 0

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(Max < Arr[Cnt])
        {
            Max = Arr[Cnt]
        }
    }
    return Max
}

var arr : number[] = [23,89,6]

var Ret : number = 0

Ret = Maximum(arr)

console.log("The largest value is : "+Ret)