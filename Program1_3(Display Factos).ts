
function DisplayFactors(Num : number) : void
{
    var Cnt = 0

    for(Cnt = 0; Cnt < (Num/2); Cnt++)
    {
        if(Num % Cnt == 0)
        {
            console.log(Cnt)
        }
    }

}

var Value : number = 20

DisplayFactors(Value)

