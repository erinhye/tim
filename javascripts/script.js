window.onload= function () {
  var objDiv = document.getElementsByClassName("chat-container")[0];
  objDiv.scrollTop = objDiv.scrollHeight;

}

function ScrollToBottom() {
  var objDiv = document.getElementsByClassName("chat-container")[0];
  objDiv.scrollTop = objDiv.scrollHeight;
}
// window.scrollTo(0,document.querySelector(".chat-container").scrollHeight);


function red() {
  var bg = document.getElementsByTagName("body");
  var footer = document.getElementById("footer-container");
  var bubble = document.getElementsByClassName("oscar-chats");

  // bg[0].style.backgroundColor = "#F7F7F7";
  footer.style.backgroundColor = "#FF002F";

  for (var i = 0; i < bubble.length; i++)
  {
    bubble[i].style.color = "#FF0051";
  }

}

function green() {
  var bg = document.getElementsByTagName("body");
  var footer = document.getElementById("footer-container");
  var bubble = document.getElementsByClassName("oscar-chats");

  // bg[0].style.backgroundColor = "#F7F7F7";
  footer.style.backgroundColor = "#0EC000";

  for (var i = 0; i < bubble.length; i++)
  {
    bubble[i].style.color = "#11A505";
  }

}

function white() {
  var bg = document.getElementsByTagName("body");
  var footer = document.getElementById("footer-container");
  var bubble = document.getElementsByClassName("oscar-chats");

  // bg[0].style.backgroundColor = "#F7F7F7";
  footer.style.backgroundColor = "#9570FF";

  for (var i = 0; i < bubble.length; i++)
  {
    bubble[i].style.color = "#6D3CFB";
  }

}
