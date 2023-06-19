function findFloor(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
      let midVal = arr[midIdx];
  
      if (midVal > num) {
        rightIdx = midIdx - 1;
      } else if (midVal <= num) {
        leftIdx = midIdx + 1;
      }
    }
  
    
    if (leftIdx === arr.length) {
      return arr[arr.length - 1]; 
    } else if (leftIdx > 0) {
      return arr[leftIdx - 1]; 
    } else {
      return -1; 
    }
  }
  
  

module.exports = findFloor