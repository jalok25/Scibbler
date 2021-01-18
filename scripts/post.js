function hideSaveButtom() {
    document.getElementById("save").hidden = true;
}
var blogBody = document.getElementById("blogBody");
var blogTitleNew = document.getElementById("blogTitleNew");
function editContent() {
    blogBody.setAttribute("contenteditable", "true");
    blogBody.style.border="1px solid violet";
    blogBody.focus();
    blogTitleNew.setAttribute("contenteditable", "true");
    blogTitleNew.style.border="1px solid pink";
    document.getElementById("edit").hidden = true;
    document.getElementById("save").hidden = false;
}

function saveContent() {
    blogBody.setAttribute("contenteditable", "false");
    blogBody.style.border= "none";
    blogTitleNew.setAttribute("contenteditable", "false");
    blogTitleNew.style.border="none";
    document.getElementById("edit").hidden = false;
    document.getElementById("save").hidden = true;
}

function likeAction() {
    var buttonText = document.getElementById("like");
    var likeStatus = document.getElementById("likeStatus");
    buttonText.value = "Liked!";
    likeStatus.innerText = "1 person likes this!";
}
function commentAction() {
    var comment = document.getElementById("commentbox");
    var commenttext = document.getElementById("commenttext").value;
    if(commenttext == ""){
        alert("Enter Comment to add them");
    }else {
        var node = document.createElement('div');
        node.append(commenttext);
        node.setAttribute("class", "usercomment");
        comment.append(node);
    }
}
