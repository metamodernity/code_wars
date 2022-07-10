let arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
function countSheeps(arrayOfSheep){
var index, len;
var c = 0;
  for (index = 0, len = arrayOfSheep.length; index < len; ++index) {
      if (arrayOfSheep[index] === true){
          c++
      }
  }
console.log(`There are ${c} sheeps in total`)
return c
}
countSheeps(arrayOfSheep)
