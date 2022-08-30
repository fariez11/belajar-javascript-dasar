// // rumus if else ------------------------------------
// if(kondisi){
//     aksi -> (lakukan aksi jika kondisi bernilai true)
// }
// ... -> (keluar dari blok jika kondisi bernilai false)

// contoh ----------------------------------------------
// var angka = 1;
// if(angka === 1){
//     alert('anda memsukkan angka 1');
// }

var angka = prompt('masukkan angka: ');

if(angka % 2 == 0){
    alert(angka + 'adalah bilangan GENAP');
} else{
    alert(angka + 'adalah bilangan GANJIL'); 
}

// latihan soal -----------------------------------------

for(var angkot = 1 ; angkot <= 10; angkot++ ){
    if(angkot <= 6){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    }else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
}


 