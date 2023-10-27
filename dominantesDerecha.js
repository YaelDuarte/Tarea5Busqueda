function dom(arr) {
    const res = [];
    let k = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let siDom = true;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] <= arr[j]) {
          siDom = false;
          break;
        }
      }
      if (siDom) {
        res[k] = arr[i];
        k++;
      }
    }
    return res;
  }
  
  const arr=[100, 21, 57, 7, 5,9,56];
  const arr1=dom(arr);
  //console.log(dom([100, 21, 57, 7, 5,9,56]));
  console.log("Valores:"+arr1);