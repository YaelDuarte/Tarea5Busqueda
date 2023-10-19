function secuenciaNumero(numero) {
    if (numero >= 0) {
        console.log(numero);
        secuenciaNumero(numero - 1);
    }
}

secuenciaNumero(17);
  
  
  
  
  