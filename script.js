$(document).ready(function () {
    $('.botao-carrinho').click(function () {
        const destino = $('#carrinho');
        console.log("foi?")

        const nomeProduto = $(this).parent().find('h5').text();
        const valorProduto = $(this).parent().find('span').text();

        $('#produto').val(nomeProduto)
        $('#valor').val(valorProduto.trim())
        


        $('html').animate({
            scrollTop: destino.offset().top
        })

    })
})