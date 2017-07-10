function ticketToggle() {
  document.getElementById('mainView').style.background = "#FF1744";
  document.getElementById('cancel').style.top = "10px";
  document.getElementById('cancel').style.opacity = "1";
  document.getElementById('qr').style.left = "50%";
  document.getElementById('ticket').style.left = "150%";
}

function cancel() {
  document.getElementById('mainView').style.background = "#4300FF";
  document.getElementById('cancel').style.opacity = "0";
  document.getElementById('cancel').style.top = "100%";
  document.getElementById('qr').style.left = "-50%";
  document.getElementById('ticket').style.left = "50%";
}
