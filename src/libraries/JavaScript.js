var root = "http://"+document.location.hostname._SERVER['SERVER_PORT']+"/";

$('#botaoPagamento').on('click', function(event) {
    event.preventDefault();

    console.log(root);
    $.ajax({
        url: root+"src/views/controllers/controllerPagamentoDireto.php",
        type: 'POST',
        dataType: 'html',
        success:function(data) {
            $('body').html(data);
        }
    });
});