function esPalindromo(palabra) {
    const palabraReversa = palabra.split('').reverse().join('');
    return palabra === palabraReversa;
}

console.log(esPalindromo("radar")); // Muestra: true
