
function CheckPrime(Num : number) : boolean
{
    var Cnt = 0

    for(Cnt = 2; Cnt < Num; Cnt++)
    {
        if(Num % Cnt == 0)
        {
            break;
        }
    }

    if(Cnt == Num)
    {
        return true
    }
    else
    {
        return false
    }
}

var Value : number = 11

var bRet : boolean = false

bRet = CheckPrime(Value)

if(bRet == true)
{
    console.log("It is prime number")
}
else
{
    console.log("It is not a prime number")
}