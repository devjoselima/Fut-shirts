$(document).ready(function () {
    $('#produtos button').click(function () {
        const destino = $('#carrinho');

        const nomeProduto = $(this).parent().find('h5').text();
        const valorProduto = $(this).parent().find('span').text();

        $('#produto').val(nomeProduto)
        $('#valor').val(valorProduto.trim())
        


        $('html').animate({
            scrollTop: destino.offset().top
        })

    })
})