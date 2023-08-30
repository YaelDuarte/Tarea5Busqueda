const A = [10, 21, 3, 45, 18, 9, 100, 909, 34, 67, 100, 2];
let arrMen = 0;

for (let i = 0; i < A.length; i++) {
    if (A[i] < A[arrMen]) {
        arrMen = i;
    }
}

console.log("El indice del elemento menor es: " + arrMen);