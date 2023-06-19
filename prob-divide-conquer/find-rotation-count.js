function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx < rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
      if (midIdx < rightIdx && arr[midIdx + 1] < arr[midIdx]) {
        return midIdx + 1;
      } else if (midIdx > leftIdx && arr[midIdx] < arr[midIdx - 1]) {
        return midIdx;
      }
  
      if (arr[leftIdx] < arr[midIdx]) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  
    return leftIdx;
  }
  
  
  

  
  


module.exports = findRotationCount