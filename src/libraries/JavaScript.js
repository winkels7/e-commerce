var root = "http://"+document.location.hostname+":5174/";

$('#botaoPagamento').on('click', function(event) {
    event.preventDefault();

    //alert(`${root}`);
    $.ajax({
        url: root+"src/views/controllers/controllerPagamentoDireto.php",
        type: 'POST',
        dataType: 'html',
        success:function(data) {
            $('body').html(data);
        }
    });
});