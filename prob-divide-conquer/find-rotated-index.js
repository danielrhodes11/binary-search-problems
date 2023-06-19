function findRotatedIndex(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
      if (arr[midIdx] === num) {
        return midIdx; 
      }
  
    
      if (arr[leftIdx] <= arr[midIdx]) {
        if (arr[leftIdx] <= num && num < arr[midIdx]) {
        
          rightIdx = midIdx - 1;
        } else {
       
          leftIdx = midIdx + 1;
        }
      } else {
        if (arr[midIdx] < num && num <= arr[rightIdx]) {
          
          leftIdx = midIdx + 1;
        } else {
          
          rightIdx = midIdx - 1;
        }
      }
    }
  
    return -1; 
  }
  

module.exports = findRotatedIndex