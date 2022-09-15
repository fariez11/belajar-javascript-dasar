// var penumpang = ['febri', 'dea', 'bowo, 'fariez'];
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong 
    if(penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembali isi array & keluar dari function
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i ++){
            // jika dad kursi kosong
            if(penumpang[i] == undefined ){
                // tambah penumpang di kursi tersebu
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang; 
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah terdaftar!!');
                // kebalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang; 
            }
        }
    }

}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong, dan
        console.log('mohon maaf didalam belum ada penumpang.');
        // tidak mungkin ada penumpang turun
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    // else
    else{
        // telusuri seluruh kursi dari awal 
        for( i = 0; i < penumpang.length; i ++){
            // jika nama penumpang sesuai
            if(penumpang[i] == namaPenumpang){
                // hapus penumpang degan mengubah namanya,menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika tidak ada nama yang sesuai
            else{ 
                // tampilkan pesan kesalahannya
                console.log('mohon maaf penumpang yang anda cari tidak ada.');
                // kembalikan isi array & keluar dar function
                return penumpang;
            }
        } 
    }

}
 