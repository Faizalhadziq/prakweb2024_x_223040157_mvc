$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#formModalLabel").html("Tambah Data Mahasiswa");
    $(".modal-footer button[type=submit]").html("Tambah Data");
  });

  $(".tampilModalUbah").on("click", function () {
    $("#formModalLabel").html("Ubah Data Mahasiswa");
    $(".modal-footer button[type=submit]").html("Ubah Data");
    $(".modal-body form").attr(
      "action",
      "https/localhost/prakweb2024_x_223040157_mvc/public/mahasiswa/ubah"
    );

    const id = $(this).data("id");

    $.ajax({
      url: "http/localhost/prakweb2024_x_223040157_mvc/public/mahasiswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "jason",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nrp").val(data.nrp);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});
