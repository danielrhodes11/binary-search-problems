function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;
  
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal === val) {
        count++;
      }
  
      if (middleVal < val) {
        leftIdx = middleIdx + 1;
      }
  
      if (middleVal > val) {
        rightIdx = middleIdx - 1;
      }
    }
  
    return count;
  }
  

module.exports = sortedFrequency