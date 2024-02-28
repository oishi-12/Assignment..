 
// By using a loop, write a code that takes 5 numbers from the user. Display both the sorted and unsorted versions of the numbers.
// *

var numlist = [4,7,8,2,4,6,9,1,3]
console.log("Unsorted number from the user is: ", numlist)
console.log("Sorted number from the user is: ", numlist.sort())
 
mat = [

  [2, 7, 89, 6],

  [90, 45,3, 7],

  [78, 56, 4, 2]

]

// Write a code that stores the elements of the above 2D array in a 1D array. Display the final 1D array. 


// *

var mat = [

    [2, 7, 89, 6],
  
    [90, 45,3, 7],
  
    [78, 56, 4, 2]
  
  ]
            for (var i = 0; i < mat.length; i++){
                for (var j = 0; j < 4; j++){
                    console.log(mat[i][j])
                }

            }