// menebak angka random comp ---------------------------------------------
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

