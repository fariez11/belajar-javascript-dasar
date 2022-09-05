// membuat game suit jawa ----------------------------------------------------
var terus = true;
while( terus ){
    // 1. menangkap pilihan player
    var player = prompt('pilih : gajah, semut, orang');

    // 2. menangkap pilihan computer
    // 3. membengkitkan biangan random
    var comp = Math.random();
    if(comp < 0.34){
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }
    var hasil = '';

    // 4. menentukan rules
    if(player == comp){
        hasil = 'SERI!';
    }else if(player == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'MENANG!';
        // }else{
        //     hasil = 'KALAH!';
        // }

        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';               // ternary
    }else if(player == 'orang'){
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    }else if(player == 'semut'){
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    }else{
        hasil = 'Anda memasukkan pilihan yang salah !';
    }

    // 5. tampilkan hasilnya

    alert('kamu memilih ' + player + ' dan komputer memilih ' + comp + '\nyang menghasilkan anda ' + hasil);

    terus = confirm('masih mau main lagi?');
}

alert('wahh kamu noob sekali ya, jadi males main sama kamu!!!');

