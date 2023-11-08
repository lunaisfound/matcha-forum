//NAV BAR
function hideIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display: none;"); //hide the icon bar
  navigation.classList.remove("hide");
}

function showIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:block;") //hide the navigation bar, display the icon bar
  navigation.classList.add("hide");
}

// COMMENT
function showComment() {
  var commentArea = document.getElementById("comment-area");
  commentArea.setAttribute("style", "display:block;");
}

function shownextComment() {
  var nextcommentArea = document.getElementById("nextcomment-area");
  nextcommentArea.setAttribute("style", "display:block;");
}
