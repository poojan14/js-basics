//whether a string starts with 'Java' and false otherwise
function start(str)
{
  if (str.length < 4)
  {
    return false;
  }
  if (str.substring(0, 4) == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}
console.log(start("JavaScript"));
console.log(start("Python"));
