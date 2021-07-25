$(document).ready(function () {
    resize();
    $(window).resize(function () {
        resize();
    });
    function resize() {
        if ($(window).width() > 900)
            $(".body").css('height', ($(window).height()) + "px");
        else
        if ($('.container-form').css('display') === 'none')
            $(".body").css({'height': '100%'});
    }

    $('#btnSubmit').on('click', function (event) {
        if ($("#id-input-User").val().replace(/ +/g, " ").trim().length > 0
                && $("#id-input-Password").val().replace(/ +/g, " ").trim().length > 0) {
            verificarUser(JSON.stringify(
                    {idUser: 0,
                        userName: $("#id-input-User").val().replace(/ +/g, " ").trim(),
                        password: $("#id-input-Password").val().replace(/ +/g, " ").trim(),
                        email: "", photo: ""}));
        } else
            toast('Alert', 'Ingrese sus credenciales!.', '<i class="fas fa-exclamation-circle"></i>');
    });

    $('#btn-save').on('click', function (event) {
        if ($("#id-input-email").val().replace(/ +/g, " ").trim().length > 0
                && $("#id-input-user-register").val().replace(/ +/g, " ").trim().length > 0
                && $("#id-input-password-register").val().replace(/ +/g, " ").trim().length > 0
                && $("#id-input-password1-register").val().replace(/ +/g, " ").trim().length > 0) {
            if ($("#id-input-password-register").val().replace(/ +/g, " ").trim() ===
                    $("#id-input-password1-register").val().replace(/ +/g, " ").trim())
                guardarImg({idUser: 0,
                    userName: $("#id-input-user-register").val().replace(/ +/g, " ").trim(),
                    password: $("#id-input-password-register").val().replace(/ +/g, " ").trim(),
                    email: $("#id-input-email").val().replace(/ +/g, " ").trim(),
                    photo: "null"}, $("#id-input-user-register").val().replace(/ +/g, " ").trim());
            else
                toast('Alert', 'Las contraseñas deben ser iguales!.', '<i class="fas fa-exclamation-circle"></i>');
        } else
            toast('Alert', 'Ingrese todo los datos!.', '<i class="fas fa-exclamation-circle"></i>');
    });
    $('#btn-cancel').on('click', function (event) {
        $('.register-box').css({'position': 'absolute'});
        $('.register-box').css({'opacity': '0'});
        setTimeout("$('.register-box').css({'display':'none'});", 1100);

        $('.container-form').css({'display': 'block'});
        $('.container-form').css({'opacity': '1'});
        setTimeout("$('.register-box').css({'position': ''});", 1100);
        clearAll();
    });
    $("#id-input-Password").on("keydown", function (event) {
        if ((event.keyCode || event.which) === 13)
            $('#btnSubmit').click();
    });
    $("#id-input-User").on("keydown", function (event) {
        if ((event.keyCode || event.which) === 13)
            $('#btnSubmit').click();
    });
});

function clearAll() {
    $("#id-input-email").val("");
    $("#id-input-user-register").val("");
    $("#id-input-password-register").val("");
    $("#id-input-password1-register").val("");
}

function openbtnfile() {
    $("#filephoto").click();
}

function onFileSelected() {
    var archivo = $('#filephoto').prop("files");
    var reader = new FileReader();
    if (archivo.length > 0) {
        reader.readAsDataURL(archivo[0]);
        reader.onloadend = function () {
            $("#img-photo").attr("src", reader.result);
        };
    }
}
function cerrarForm() {
    $('.container-form').css({'position': 'absolute'});
    $('.container-form').css({'opacity': '0'});
    setTimeout("$('.container-form').css({'display':'none'});", 1100);

    $('.register-box').css({'display': 'block'});
    $('.register-box').css({'opacity': '1'});
    setTimeout("$('.container-form').css({'position': ''});", 1100);
}

function toast(tipo, txt, icono) {
    $('#containe-toast').prepend('\<div class="toast">\n\
        <div class="toast-color ' + tipo + '">\n\
        </div>\n\
        <div class="toast-icon icon-' + tipo + '">\n\
            ' + icono + '\n\
        </div>\n\
        <div class="toast_info">\n\
            <div class="toast_info-header">\n\
                <p>' + tipo + '</p>\n\
            </div>\n\
            <div class="toast_info-txt">\n\
                <p>' + txt + '</p>\n\
            </div>\n\
        </div>\n\
        <div class="toast-x" >\n\
            <i onclick="clictoast(this)" class="fas fa-times"></i>\n\
        </div>\n\
    </div>').children(':first')
            .delay(5000)
            .fadeOut(1000, function () {
                $(this).remove();
            });
}
function clictoast(e) {
    $(e).parent().parent().remove();
}
