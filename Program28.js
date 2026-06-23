//digits numbers
function CountDigit(no)
{
  let iCount = 0;
  let iDigit = 0;
  while(no !=0)

  {
    iDigit = no % 10;
    iCount++;
    no = no / 10;

  }
  return iCount;
}

function main()
{
  let iValue = 721;
  
  console.log(iValue);        //721
  console.log(typeof(iValue));// numbers
  console.log(iValue %10);    //1
  console.log(Math.floor(iValue /10));    //72
}
main();
