$(document).ready(function() {

    checkScreen();

    var pattern = /^[-+]?[0-9]+\.?[0-9]*$/; // mengatur agar input form hanya bisa diisi angka dan spesial karakter
    var step = 0.00001; // mengatur bilangan desimal yang bisa diinput pada input form

    var result = $('.text-hasil').text();
    if (result == '-') {
        $('#alert-hasil').hide();
    } else {
        $('#alert-hasil').show();
    }
    
    $('input').attr('pattern', pattern);
    $('input').attr('step', step);
    $('input').attr('required', true); // mengatur agar tiap isian form harus diisi (required)
    $('input').attr('autocomplete', 'off'); // mengatur agar history isian form tidak muncul (mematikan fitur autocomplete)

    $('#form-data').on('submit', function(event) {
        event.preventDefault(); // mencegah halaman reload ketika submit form

        var listData = [];
        var listColumns = []
        var data = 0;

        listColumns = [
            'sensor2', 'sensor3', 'sensor4',	'sensor7', 'sensor8',
            'sensor9', 'sensor11', 'sensor12', 'sensor13', 'sensor14',
            'sensor15', 'sensor17', 'sensor20', 'sensor21'
        ];

        // perulangan untuk get data dari input form lalu dikonversi ke tipe data float untuk dimasukan ke dalam listData
        for (var i = 0; i < listColumns.length; i++) {
            data = $('#' + listColumns[i]).val();
            listData.push(parseFloat(data));
        }

        // AJAX untuk kirim data dan menerima data kembalian dari app.py
        $.ajax({
                url: 'getResult',
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(listData),
                contentType: "application/json; charset=UTF-8"
            })
            .done(function(data) {
                if (data == 0) {
                    $('.text-hasil').text("MESIN NORMAL");
                    $('#alert-hasil').removeClass('alert-danger');
                    $('#alert-hasil').addClass('alert-success');
                } else {
                    $('.text-hasil').text("MESIN FAILURE");
                    $('#alert-hasil').removeClass('alert-success');
                    $('#alert-hasil').addClass('alert-danger');
                }
                
                $('#alert-hasil').show();
            })
            .fail(function(err) {
                $('.text-hasil').text("ERROR");
                $('.alert-hasil').removeClass('alert-success');
                $('.alert-hasil').addClass('alert-danger');
            })

        $('.btn-refill').css('display', 'inline-block'); // menampilkan tombol btn-refill (cek ulang)
    });

    $('.btn-refill').on('click', function() {
        reset(); // memanggil fungsi reset() ketika tombol cek ulang diklik
    });

    $(window).on('resize', checkScreen);
});

// fungsi untuk membersihkan form dan mengembalikan ke tampilan awal
function reset() {
    $('.text-hasil').text("-");
    $('.btn-refill').css('display', 'none');
    $('.alert-hasil').removeClass('alert-danger');
    $('.alert-hasil').addClass('alert-success');
    $('input').val(null);
    $('#sensor_2').focus();

    var base_url = window.location.origin;
    window.location = base_url;
}

// fungsi untuk cek lebar layar untuk mengatur jarak antar baris di form isian
function checkScreen() {
    if ($(window).width() <= 767) {
        $("div.row").removeClass('my-3');
    } else {
        $("div.row").addClass('my-3');
    }
}