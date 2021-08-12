function now_download(obj){
    $(obj).attr('disabled' , 'disabled').html('<i class="fa fa-spinner fa-spin"></i> Descargando..');
    $("#modal_alerta_success").modal('show');
    setTimeout(function(){
      $("#modal_alerta_success").modal('hide');
      $(obj).removeAttr('disabled').html('Descargar Free');
      location.href = "https://www.wirelan.cl/clases/landing/code_txt_free.zip";
      $("#txt_mail_suscribe").val('');
    },3000);
  }
  
  $(document).ready(function(){
      setTimeout(function(){
        $("#modal_registro").modal('show');
      }, 5000)
  });