// object -------------------------------------------------------------

    // var mahasiswa = {
    //     nama : 'Sandhika Galih',
    //     lulus : true,
    //     IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
    //     IPKumulatif : function(){
    //         var total = 0;
    //         var ips = this.IPSemester;
    //         for(var i = 0; i < ips.length; i++){
    //             total += ips[i];
    //         }
    //         return total/ips.length;
    //     }
    // }

    // mahasiswa.IPKumulatif();

    // var Orang = {
    //     nama : 'Sandhika Galih',            //  \
    //     umur : 31,                          //   > variabel yang ada didalam objetc dan disebut dengan properti
    //     pekerjaan : 'Dosen',                //  /
    //     sapa : function(){                                                  //  \
    //         return 'Hi, nama saya ' + this.nama +                           //   \ function yang didalam
    //                 ' usia saya ' + this.umur + ' tahun' +                  //   / object disebut method
    //                 ' dan saa adalah seorang ' + this.pekerjaan;            //  /
    //     }
    // }

// membuat object ---------------------------------------------------------------------------

    // var mhs = {
    //     nama : 'Fariez Ilham',
    //     umur : 31,
    //     ips  : [3.00, 2.50, 3.20],
    //     alamat : {
    //         jalan    : 'Jl. Abc No. 125',
    //         kota     : 'Bandung',
    //         provinsi : 'Jawa Barat' 
    //     }
    // };

// Object Literal ////////////////////
    // var mhs1 = {
    //     nama : 'Sandhika Galih ',
    //     nrp  : '043040022',
    //     email : 'sandhikagalih@unpas.ac.id',
    //     jurusan : 'Teknik Informatika'
    // }


    // var mhs2 = {
    //     nama : 'Fariez Ilham',
    //     nrp  : '043040023',
    //     email : 'fariezIlham03@gmail.com',
    //     jurusan : 'Sistem Informasi'
    // }

// Function Declaration /////////////////////////
    // function buatObjectMahasiswa(nama, nrp, email, jurusan){
    //     var mhs = {};                                   // deklarasi harus ada 
    //     mhs.nama = nama;
    //     mhs.nrp = nrp;
    //     mhs.email = email;
    //     mhs.jurusan = jurusan;
    //     return mhs;                                     // hasil harus ada
    // }
    
    // var mhs3 = buatObjectMahasiswa('Wibowo','043040024','wibowocahyono23@yahoo.com','Teknik Sipil');

// Constructor //////////////////////////////////
    // function Mahasiswa(nama, nrp, email, jurusan){
    //     // var this = {};                               // otomatis jadi tidak harus ditulis
    //     this.nama = nama;
    //     this.nrp = nrp;
    //     this.email = email;
    //     this.jurusan = jurusan;
    //     return this;                                    // sama kyak diatas
    // }
    // var mhs4 = new Mahasiswa('Mamad', '043040025', 'mamad1141@rocketmail.com','Teknik Mesin');

// MATERI 43

// menggunakan this ----------------------------------------------------------------------------
    // console.log(this === window);

    // var a = 11;
    // console.log(window.a);

// cara 1 - function declaration    ////////////////////////////////////////
    // function halo(){
    //     console.log(this);
    //     console.log('halo');
    // }
    // this.halo();                    // this mengembalikan object Global
   

// cara 2 - object literal          ////////////////////////////////////////
    // var obj = {a: 10, nama : 'fariez ilham'};
    // obj.halo = function(){
    //     console.log(this ); 
    //     console.log('halo');
    // }
    // obj.halo();                     // this mengembalikan object yang bersangkutan
    

// cara 3 - constructor             ////////////////////////////////////////
    // function Halo(){
    //     console.log(this);
    //     console.log('halo');
    // }

    // var obj =  Halo();              // this mengambalikan object yang baru dibuat
