
function swap(array,indOne,indTwo)
{
  var temp=array[indOne]
  array[indOne]=array[indTwo]
  array[indTwo]=temp
}

function selectionSort(array)
{
  var i,j,minInd
  for ( i = 0; i < array.length; i++) {
      minInd=i
        for (j = i+1; j < array.length; j++) {
            if (array[j]<array[minInd]) {
                minInd=j
              }
            }
            swap(array,minInd,i)
          }
}


function sortArray(array)
{
var result=selectionSort(array)
return result
}
