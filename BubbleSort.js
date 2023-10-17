function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let cambio = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = cambio;
            }
        }
    }

    return arr;
}

const arr = [10,9,6,4,17,1,2,5,3,11,20];
const camArr = bubbleSort(arr);
console.log("El arreglo ordenado es: "+ camArr);






