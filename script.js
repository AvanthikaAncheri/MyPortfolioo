 let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
     navbar.classList.toggle('active');
     }
    
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('dark-theme');
    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('dark-theme');
    }
}

var button = document.getElementById('button');
button.addEventListener('click',function(e) {
  e.preventdefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var body = 'name: ' + name + '<br/> email:' + email + '<br/> message' + message;

  Email.send({
    Host : "smtp.gmail.com",
    Username : "avanthikancheri@gmail.com",
    Password : "lamyopnuwgetttim",
    To : 'avanthikancheri@gmail.com',
    From : email,
    Body : body
  }).then
      (
        message => alert(message)
      );

})
