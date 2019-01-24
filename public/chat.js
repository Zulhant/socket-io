var socket = io.connect('http://localhost:3011')

var output = document.getElementById("output");
    handle = document.getElementById("handle"),
    message = document.getElementById("message"),
    feedBack = document.getElementById("feedBack"),
    submit = document.getElementById("submit");

submit.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  })
})

socket.on('chat', (data) => {
  feedBack.innerHTML = "";
  output.innerHTML+='<p style="font-color:yellow"><strong>'+ data.handle + ':</strong>'+data.message+'</p>';
})

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
})

socket.on('typing', (data) => {
  feedBack.innerHTML+='<p><em>'+data+' is typing</em></p>';
})
