function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (min !== i) {
            let cambio = arr[i];
            arr[i] = arr[min];
            arr[min] = cambio;
        }
    }
}

const arr = [2, 5, 8, 1, 67, 89, 23, 4];
selectionSort(arr);
console.log("El arreglo ordenado es: "+ arr);