function add (num1 , num2)
{
    if (typeof num1 == 'number' && typeof num2 == 'number')
    {
        return num1 + num2;
    }
    else
    {
         // Handle Error
         //throw new Error ('Invalid input: both arguments must be numbers.');
         // OR
        //console.log('Invalid input: both arguments must be numbers.');
        return 'Invalid input: both arguments must be numbers.';
    }
}

module.exports=add;