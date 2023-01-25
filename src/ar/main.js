let alertt=document.getElementById('alert')

function show() {
  alertt.style.top='3%';
  setTimeout(function() {
    alertt.style.top='-5%'
  },3000)
}