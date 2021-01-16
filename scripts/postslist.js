var trashFunctions = function(numberOfPost) {
    for (var i = 0; i < numberOfPost; i++) {
        // Get the trash modal
        var modal = document.getElementsByClassName('trash-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("post-trash")[i];

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("trash-modal-button-no")[i];

        var deletePost = document.getElementsByClassName("trash-modal-button-yes")[i];

        var post = document.getElementsByClassName("post")[i];
        // When the user clicks on the trash icon, open the modal 
        div.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on `No` button, close the modal
        close.onclick = function() {
            modal.style.display = "none";
        }

        deletePost.onclick = function() {
            post.style.display = 'none';
        }
    }
}

trashFunctions(5)

function navigateToPost() {
    location.href = "post.html";
}