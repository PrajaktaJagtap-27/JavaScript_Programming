

function CheckPerfect(no)
{
  let iCnt = 0;
  let iSum = 0;
  for(iCnt=1;iCnt<=(no/2); iCnt++)
  {
   if((no%iCnt)==0)
   {
    console.log(iCnt);
   }
  }
  if(iSum == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

function main()
{
 let iValue = 6;
 let bRet = false;
 
 bRet=CheckPerfect(iValue);
 if (bRet == true)
 {
  console.log(`${iValue}is a Perfect Number`);
 }
 else
 {
  console.log(`${iValue}is not Perfect Number`);
 }
 
}

main();
