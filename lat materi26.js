// menebak angka random comp ---------------------------------------------
// 1. menangkap pilihan computer
var comp = Math.floor(Math.random() * 10);
for(var kesempatan = 5; kesempatan >= 0; kesempatan--){
// 2. menangkap pilihan player
    var player = parseInt(prompt('tebak angka 1 - 10 \nkamu punya 3 kesempatan'));
        
// 3. menentukan rules & menampilkan hasil
        if(player === comp){
            alert('anda benar \nangka yang anda cari adalah ' + player);
            kesempatan = 0;
        }else if(player < comp){
            if(kesempatan == 0){
                alert('angka mu masih terlalu rendah \nyahh kesempatanmu habis :( ');
                alert('angka yang anda cari adalah ' + comp);
            }else{
                alert('angka mu masih terlalu rendah \nkesemepatan kamu masih ' + kesempatan + '\nangka yang anda cari adalah ' + comp);
            }
        }else if(player > comp){
            if(kesempatan == 0){
                alert('angka mu masih terlalu rendah \nyahh kesempatanmu habis :( ');
                alert('angka yang anda cari adalah ' + comp);
            }else{
            alert('hmm masih ketinggian nggak sih wkwk \nkesemepatan kamu masih ' + kesempatan + '\nangka yang anda cari adalah ' + comp);
            alert();
            }
        }else{
            alert('Anda memasukkan pilihan yang salah !');
            kesempatan = 0;
        }
    }
    alert('terima kasih');

