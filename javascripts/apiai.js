var baseUrl = "https://api.api.ai/v1/";
$(document).ready(function() {

 $("#input").keypress(function(event) {
  if (event.which == 13) {//13 == enter
   event.preventDefault();
   send();
  }
 });

 // $("#rec").click(function(event) {
 //  switchRecognition();
 // });

});

//

var recognition;
function startRecognition() {
 recognition = new webkitSpeechRecognition();
 recognition.onstart = function(event) {
  updateRec();
 };
 recognition.onresult = function(event) {
  var text = "";
     for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
     }
     setInput(text);
  stopRecognition();
 };
 recognition.onend = function() {
  stopRecognition();
 };
 recognition.lang = "en-US";
 recognition.start();
}

function stopRecognition() {
 if (recognition) {
  recognition.stop();
  recognition = null;
 }
 updateRec();
}
function switchRecognition() {
 if (recognition) {
  stopRecognition();
 } else {
  startRecognition();
 }
}
function setInput(text) {
 $("#input").val(text);
 send();
}
function updateRec() {
 $("#rec").text(recognition ? "Stop" : "Speak");
}



//send
var me = 0;
var tim = 0;
function send() {
 var text = $("#input").val();
 if (text != '')
 {
     $(".chat-container").append("<div class ='blank-space'></div><div class ='icon me'></div><div class ='me-chat'>" + text + "</div>");
     $('#input').val('');
     me++;
     tim++;
     $(".chat-container").append("<div class ='blank-space'></div><div class ='icon oscar'></div><div class ='oscar-chats'></div>");
     ScrollToBottom();

     $.ajax({
      type: "POST",
      url: baseUrl + "query?v=20150910",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      headers: {
       "Authorization": "Bearer " + accessToken
      },
      data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
      success: function(data) {
        setResponse(data.result.fulfillment.speech);

      },
      error: function() {
       setResponse("Internal Server Error");
      }
     });
     setResponse("Loading...");
 }
}

function setResponse(val) {
 $(".oscar-chats").eq(tim).text(val);
}
