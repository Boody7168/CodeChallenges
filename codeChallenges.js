let nums = [1,2,3,4,5]
function large(arr) {
let result = ''
for(i=0; i<arr.length; i++) {
if(arr[i]>result) {
result=arr[i]
}
}
return result
}
console.log(large(nums))

function arrayOperations(arr) {
// return first item
return arr[0]
// add an item to the end
arr.push(4)
// add an item to the beginning
arr.unshift(0)
// delete last item
arr.pop()
// delete 1st item
arr.shift()
}
console.log(arrayOperations([1,2,3]))

function capitalize(str) {
return str.toUpperCase()
}
console.log(capitalize('test'))

function plusBase(base) {
return function(num) {
return base+num
}
}
plusBase(5)(7)

function flatten(arr1, arr2) {
 let flattenedArr = arr1.concat(arr2)
 return flattenedArr
 }
 console.log(flatten([1,2,3], [4,5,6]))