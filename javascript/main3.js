// SELFWORK CICLI 1

// let num = 2;  
// let limite = 10; 

// console.log(`Tabellina del ${num}:`);
// for (let i = 1; i <= limite; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//SELFWORK CICILI 2

// let sommaDispari = 0;
// let countDispari = 0;

// console.log("Numeri pari da 1 a 20:");
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);  // Stampa i numeri pari
//     } else {
//         // Somma i numeri dispari e aumenta il contatore
//         sommaDispari += i;
//         countDispari++;
//     }
// }

// if (countDispari > 0) {
//     let mediaDispari = sommaDispari / countDispari;
//     console.log(`Media dei numeri dispari da 1 a 20: ${mediaDispari}`);
// } else {
//     console.log("Non ci sono numeri dispari.");
// }

// SELFWORK CICILI 3


let scelta;

do{
    scelta = Number(prompt("Inserisci un numero (1: Acqua, 2: Coca Cola, 3: Birra):"));

    switch (scelta) {
        case 1:
            console.log("E’ stata selezionata l’acqua");
            break;
        case 2:
            console.log("E’ stata selezionata coca cola");
            break;
        case 3:
            console.log("E’ stata selezionata birra");
            break;
        default:
            console.log("Scelta non valida. Riprova.");
            break;
    }

} while (scelta !== 1 && scelta !== 2 && scelta !== 3);
