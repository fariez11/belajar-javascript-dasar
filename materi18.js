// control flow ------------------------------
var angka = prompt('masukkan angka :');

if(angka % 2 === 0){
    alert(angka + 'adalah bilangan GENAP');
}else{
    alert(angka + 'adalah bilangan GANJIL');
}

// while -------------------------------------
// nilai awal                                 // Rumus ----
// while(kondisi terminasi){
//     aksi

//     increment / decrement
// }

var ulang = true;
while(ulang){   
    console.log('hello world');
    ulang = confirm('lagi?');
}

var nilaiAwal = 1;
while(nilaiAwal <= 5){
    console.log('Hello World! ' + nilaiAwal + 'x');
    nilaiAwal++ ;
}

// latihan ------------------------------------------
var angkot = 1;

while(angkot <=10){
    console.log('Angkot No. ' + angkot + ' beroprasi dengan baik.');
angkot++ ;
}

// perbaikan ----------------------------------------
var jmlAngkot = 10;
var noAngkot = 1;

while(noAngkot <= jmlAngkot){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
noAngkot++;
}

// table penelurusuran / trace table / dry-run test --------------
// berisi gambar tabel untuk menjelaskan soal sebelumnya... 
