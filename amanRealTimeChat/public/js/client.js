const socket = io();
let uname;
let textarea = document.querySelector('#msg_data');
let messageArea = document.querySelector('.msger-chat');
const getCurrenTime = () =>{

    var perios = "AM";
      var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
      var now = new Date();
      var month = months[now.getMonth()];
      var date = now.getDate();
      var year = now.getFullYear();

      let hours = now.getHours();
      let mins = now.getMinutes();
      if(hours > 11){
          perios = "PM";
          if(hours > 12){
            hours -= 12;
          }                  
      }
      if(mins < 10){
          mins = "0" + mins;
      }
     
      return `${hours}:${mins} ${perios}`;

  }; 
do{
    uname = prompt('PLease enter your name');
}while(!uname);

textarea.addEventListener('keyup', (e) =>{
    if(e.key === "Enter"){
        sendMessage(e.target.value);
    }
});
function sendMessage(mess){
    let msg = {
        user:uname,
        message:mess.trim()
    }
    appendMessage(msg, 'right-msg','145867.svg');
    textarea.value = '';
    scrollToBottom();
    socket.emit('message', msg);
}
function appendMessage(msg, type, img){
    let time = getCurrenTime();
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className,"msg" )
    let markup = `
    <div class="msg-img" style="background-image: url(img/${img})"></div>
    <div class="msg-bubble">
    <div class="msg-info">
      <div class="msg-info-name">${msg.user}</div>
      <div class="msg-info-time">${time}</div>
    </div>

    <div class="msg-text">
     ${msg.message}
    </div>
  </div>
    `;
    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

// Recive messages
socket.on('message', (msg)=>{
    appendMessage(msg, 'left-msg','327779.svg');
    scrollToBottom();
});

function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight;
}