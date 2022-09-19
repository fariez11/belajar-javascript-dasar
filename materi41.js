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

        var mhs = {
            nama : 'Fariez Ilham',
            umur : 31,
            ips  : [3.00, 2.50, 3.20],
            alamat : {
                jalan    : 'Jl. Abc No. 125',
                kota     : 'Bandung',
                provinsi : 'Jawa Barat' 
            }
        };