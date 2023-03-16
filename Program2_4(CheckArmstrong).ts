
function CheckArmStrong(Num : number) : boolean
{
    var Digit = 0
    var Mult = 0
    var temp = Num

    while(temp != 0)
    {
        Digit = temp % 10
        Mult = Mult + (Digit * Digit * Digit)
        temp = temp / 10
    }
    if(Mult == Num)
    {
        return true
    }
    else
    {
        return false
    }
}

var Num : number = 153

var Ret1 : boolean 

Ret1 = CheckArmStrong(Num)

if(Ret1 == true)
{
    console.log("It is a armstrong number")
}
else
{
    console.log("It is not a armstrong number")
}