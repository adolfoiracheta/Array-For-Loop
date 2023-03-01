let array1 = [1,2,3,4,5,6];
let array2 = [5,6,7,8,9,10];
let newarray = [];

for (let i = 0; i < array1.length; i++) {
  if (array1.includes(array2[i])) {

  }

  else {
    newarray.push(array2[i])

  }
  if (array2.includes(array1[i])) {

  }

  else {
    newarray.push(array1[i])
  
  }
}
  console.log(newarray)
