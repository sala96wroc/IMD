var modal;

function popsup(modalid, imgid, projectText) {
    // Get the modal
    modal = document.getElementById(modalid);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(imgid);
    var modalImg = document.getElementById(projectText);
    // var captionText = document.getElementById("caption");

    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClass('close')[0];
}

function closeMod() {
    modal.style.display = "none";
}

function emailSucc() {
    var al = document.getElementById("emailSuccAl");
    al.style.display = "block";
}