function openModal(){
    var modalDownload = document.getElementById('modalDownload');
    var modalDownload1 =  document.getElementById('modalDownload1');

    modalDownload1.style.display = "block";

}
function closePopover(){
    var colorOverlay =  document.getElementById('colorOverlay');
    colorOverlay.style.display = "none";
    var templateOverlay =  document.getElementById('templateOverlay');

    templateOverlay.style.display = "none";
    var fontOverlay =  document.getElementById('fontOverlay');
    fontOverlay.style.display = "none";
    var sectionsOverlay =  document.getElementById('sectionsOverlay');
    sectionsOverlay.style.display = "none";
    var modalDownload1 =  document.getElementById('modalDownload1');

    modalDownload1.style.display = "none";
    var langOverlay =  document.getElementById('langOverlay');
    langOverlay.style.display = "none";
}

function close(){
    var modalDownload1 =  document.getElementById('modalDownload1');
    modalDownload1.style.display = "none";
}
function openLang(){
    var langOverlay =  document.getElementById('langOverlay');
    langOverlay.style.display = "block";
}

function openImport(){
    var modalImport =  document.getElementById('modalImport');
    modalImport.style.display = "block";
    var colorOverlay =  document.getElementById('colorOverlay');
    colorOverlay.style.display = "none";
    var templateOverlay =  document.getElementById('templateOverlay');

    templateOverlay.style.display = "none";
    var fontOverlay =  document.getElementById('fontOverlay');
    fontOverlay.style.display = "none";
    var sectionsOverlay =  document.getElementById('sectionsOverlay');
    sectionsOverlay.style.display = "none";
}

function openSection(){
    var sectionsOverlay =  document.getElementById('sectionsOverlay');
    sectionsOverlay.style.display = "block";

    var colorOverlay =  document.getElementById('colorOverlay');
    colorOverlay.style.display = "none";
    var templateOverlay =  document.getElementById('templateOverlay');

    templateOverlay.style.display = "none";
    var fontOverlay =  document.getElementById('fontOverlay');
    fontOverlay.style.display = "none";
}

function openPopop(){
    var templateBtn = document.getElementById('templateBtn');
    var templateOverlay =  document.getElementById('templateOverlay');

    templateOverlay.style.display = "block";
    var colorOverlay =  document.getElementById('colorOverlay');
    colorOverlay.style.display = "none";
}
function openFont(){
    var fontOverlay =  document.getElementById('fontOverlay');
    fontOverlay.style.display = "block";
    var templateOverlay =  document.getElementById('templateOverlay');
    templateOverlay.style.display = "none";
    var colorOverlay =  document.getElementById('colorOverlay');
    colorOverlay.style.display = "none";
}
function openColor(){
    var colorOverlay =  document.getElementById('colorOverlay');
    colorOverlay.style.display = "block";

    var templateOverlay =  document.getElementById('templateOverlay');

    templateOverlay.style.display = "none";


}
function closeModal(){
    var modalDownload1 =  document.getElementById('modalDownload1');

    modalDownload1.style.display = "none";
}