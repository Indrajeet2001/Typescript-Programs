
function SecondLargest(arr : number[]) : number 
{
    var Max : number = arr[0]
    var Cnt : number = 0
    var Max1 : number = 0

    for(Cnt = 0; Cnt < arr.length; Cnt++)
    {
        if(Max < arr[Cnt])
        {
            Max = arr[Cnt]
        }
    }
    for(Cnt = 0; Cnt < arr.length; Cnt++)
    {
        if(Max1 < arr[Cnt] && arr[Cnt] != Max)
        {
            Max1 = arr[Cnt]
        }
    }
    
    return Max1
}

var Arr : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0

Ret = SecondLargest(Arr)

console.log("Second largest number is : "+Ret)