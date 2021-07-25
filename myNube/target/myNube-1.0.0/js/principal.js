let files = [];
var filesArray = [];
var upload = false;

$(document).ready(function () {

    resize();
    $(window).resize(function () {
        resize();
    });

    $(window).on('load', function () {
        $('#mis-doc').click();
    });

    function resize() {
        $(".body").css('height', ($(window).height()) + "px");
        $(".box-documentos").css('max-height', (($(window).height()) - $(".header").css('height').replace('px', '') -
                $(".main-menu").css('height').replace('px', '')-37) + "px");
        $(".box-subir").css('max-height', (($(window).height()) - $(".header").css('height').replace('px', '') -
                $(".main-menu").css('height').replace('px', '')-37) + "px");
        
//        $(".main").css('height', (($(window).height()) - $(".header").css('height').replace('px', '') - 17) + "px");
    }
    const dropArea = document.querySelector(".drag-area"),
            dragText = dropArea.querySelector(".txt-drag-drop");
    $('#btn-upload').on('click', function (event) {
        $('#imput-file').click();
    });
    $('#imput-file').on('change', function (event) {
        files = this.files;
        dropArea.classList.add("active");
        showFile();
    });
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.classList.add("active");
        dragText.textContent = "Release to Upload File";
    });
    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    });
    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        files = event.dataTransfer.files;
        showFile();
    });
    var num = 1;
    function showFile() {
        console.log(files);
        $.each(files, function (item, val) {
            let fileType = val.type.split('/')[0];
            if (parseInt(files[item].size / 1024) <= 10240) {
                filesArray.push({file: files[item], clave: num});
                $(".archvos-subidos").append('<div class="file-upload" id="file-' + num + '"> \n\
                                <div class="inform-file"> \n\
                                    <div class="icon-file"> \n\
                                        ' + getIcon(fileType) + '</i>\n\
                                    </div>\n\
                                    <div class="name-file">\n\
                                        <p>' + files[item].name + '</p>\n\
                                    </div>\n\
                                    <div class="tamano-file">\n\
                                        <p>' + parseInt(files[item].size / 1024) + ' KB</p>\n\
                                    </div>\n\
                                    <div class="icon-action-file">\n\
                                        <i class="delete-file fas fa-times"></i>\n\
                                    </div>\n\
                                </div>\n\
                                <div class="bar-progress">\n\
                                    <div class="barra"></div> \n\
                                </div> \n\
                            </div>');
                /*  let fileReader = new FileReader();
                 fileReader.onload = () => {
                 let fileURL = fileReader.result;
                 console.log(fileReader.result);
                 };
                 fileReader.readAsDataURL(val);*/
                num++;
            }
        });
        if (!upload) {
            if (filesArray.length > 0) {
                saveFiles(filesArray[0].file, filesArray[0].file.name);
                upload = true;
            }
        }
    }
    $('#mis-doc').on('click', function (event) {
        $('.item').css({'border-bottom': ''});
        $('.box-menu i').css({'color': ''});
        $("#mis-doc").css({'border-bottom': 'RGB(20, 146, 113) 2px solid'});
        $(".uno").css({'color': 'RGB(20, 146, 113)'});
        $(".box-subir").css({'display': 'none'});
        $(".box-documentos").css({'display': 'block'});
        getFileUser({id:window.location.search.split('=')[1]});
    });
    $('#subir-doc').on('click', function (event) {
        $('.item').css({'border-bottom': ''});
        $('.box-menu i').css({'color': ''});
        $("#subir-doc").css({'border-bottom': 'RGB(20, 146, 113) 2px solid'});
        $(".dos").css({'color': 'RGB(20, 146, 113)'});
        $(".box-documentos").css({'display': 'none'});
        $(".box-subir").css({'display': 'flex'});
    });

});

function getIcon(type) {
    switch (type) {
        case "image":
            return '<i class="fas fa-image"></i>';
            break;
        default :
            return '<i class="fas fa-file"></i>';
    }
}
