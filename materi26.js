// membuat game suit jawa ----------------------------------------------------
    // var terus = true;
    // while( terus ){
    //     // 1. menangkap pilihan player
    //     var player = prompt('pilih : gajah, semut, orang');

    //     // 2. menangkap pilihan computer
    //     // 3. membengkitkan biangan random
    //     var comp = Math.random();
    //     if(comp < 0.34){
    //         comp = 'gajah';
    //     } else if(comp >= 0.34 && comp < 0.67){
    //         comp = 'orang';
    //     }else{
    //         comp = 'semut';
    //     }
    //     var hasil = '';

    //     // 4. menentukan rules
    //     if(player == comp){
    //         hasil = 'SERI!';
    //     }else if(player == 'gajah'){
    //         // if(comp == 'orang'){
    //         //     hasil = 'MENANG!';
    //         // }else{
    //         //     hasil = 'KALAH!';
    //         // }

    //         hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';               // ternary
    //     }else if(player == 'orang'){
    //         hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    //     }else if(player == 'semut'){
    //         hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    //     }else{
    //         hasil = 'Anda memasukkan pilihan yang salah !';
    //     }

    //     // 5. tampilkan hasilnya

    //     alert('kamu memilih ' + player + ' dan komputer memilih ' + comp + '\nyang menghasilkan anda ' + hasil);

    //     terus = confirm('apakah anda masih mau main lagi?');
    // }

    // alert('wahh kamu noob sekali ya, jadi males main sama kamu!!!');


// latihan materi 26 (menebak angka random comp) ------------------------------------------------------------------
    // 1. menangkap pilihan computer
    var comp = Math.ceil(Math.random() * 10);
        var opening = confirm('tebak angka 1 - 10 \nkamu punya 5 kesempatan');
        if(opening == true ){
        for(var kesempatan = 5; kesempatan >= 0; kesempatan--){
    // 2. menangkap pilihan player
            player = parseInt(prompt('masukkan angka tebakan anda'));
            
    // 3. menentukan rules & menampilkan hasil
            if(player === comp){
                alert('anda benar \nangka yang anda cari adalah ' + player);
                kesempatan = 0;
            }else if(player < comp){
                if(kesempatan == 0){
                    alert('angka mu masih terlalu rendah \nyahh kesempatanmu habis :( ');
                    alert('angka yang anda cari adalah ' + comp);
                }else{
                    alert('angka mu masih terlalu rendah \nkamu masih ada ' + kesempatan + ' kesemepatan lagi nih !!');
                }
            }else if(player > comp){
                if(kesempatan == 0){
                    alert('angka mu masih terlalu rendah \nyahh kesempatanmu habis :( ');
                    alert('angka yang anda cari adalah ' + comp);
                }else{
                alert('hmm masih ketinggian nggak sih wkwk \nkamu masih ada ' + kesempatan + ' kesemepatan lagi nih !!');
                }
            }else{
                alert('kyaknya anda bukan masukin angka deh !, \ngak niat bubar bubar');
                kesempatan = 0;
            }
        }
        alert('terima kasih');
        }else{
            alert('dasar cupu anda wkwkwk');
        }



