// // rumus if else ------------------------------------
// if(kondisi){
//     aksi -> (lakukan aksi jika kondisi bernilai true)
// }
// ... -> (keluar dari blok jika kondisi bernilai false)

// contoh -----------------------------------------------------------------
// var angka = 1;
// if(angka === 1){
//     alert('anda memsukkan angka 1');
// }

// var angka = prompt('masukkan angka: ');

// if(angka % 2 == 0){
//     alert(angka + 'adalah bilangan GENAP');
// } else{
//     alert(angka + 'adalah bilangan GANJIL'); 
// }

// latihan soal -----------------------------------------------------------

// for(var angkot = 1 ; angkot <= 10; angkot++ ){
//     if(angkot <= 6){
//         console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//     }else{
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
//     }
// }

// else if ----------------------------------------------------------------
// if(kondisi 1){                                             // Rumus-----
//     aksi 1
// }else if(kondisi 2){
//     aksi 2
// }else{
//     aksi 3
// }

// contoh -----------------------------------------------------------------
// var angka = prompt('masukkan angka');
// if(angka % 2 == 0){
//     alert(angka + ' adalah bilangan GENAP');
// }else if(angka % 2 === 1){
//     alert(angka + ' adalah bilangan GANJIL');
// }else{
//     alert('yang anda masukkan bukan angka !!')
// }

// latihan soal ------------------------------------------------------------
// for(var angkot = 1 ; angkot <= 10; angkot++ ){
//     if(angkot <= 6){
//         console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//     }else if(angkot === 8){
//         console.log('Angkot No. ' + angkot + ' sedang lembur.');
//     }else{
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
//     }
// }

// latihan soal (menambahkan operator) -------------------------------------
for(var angkot = 1 ; angkot <= 10; angkot++ ){
    if(angkot <= 6){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    }else if(angkot === 8 || angkot === 10){
        console.log('Angkot No. ' + angkot + ' sedang lembur.');
    }else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
    }
}

// latihan soal (menambahkan if didalam if) ---------------------------------
// for(var angkot = 1 ; angkot <= 10; angkot++ ){
//     if(angkot <= 6){
//         if(angkot === 5){  
//             console.log('Angkot No. ' + angkot + ' sedang lembur.');
//         }else{ 
//             console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//         }
//     }else if(angkot === 8 || angkot === 10){
//         console.log('Angkot No. ' + angkot + ' sedang lembur.');
//     }else{
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
//     }
// }

// perbaikan latihan soal (menambahkan if didalam if) ------------------------
for(var angkot = 1; angkot <= 10; angkot++){
    if(angkot <= 6 && angkot !== 5){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    }else if(angkot === 8 || angkot === 10 || angkot === 5){
        console.log('Angkot No. ' + angkot + ' sedang lembur');
    }else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
}