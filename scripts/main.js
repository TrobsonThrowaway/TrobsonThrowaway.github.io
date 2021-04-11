

let my_image = document.querySelector('img');

my_image.onclick = function() {
  let my_src = my_image.getAttribute('src');
  if ( my_src === 'images/email.jpeg') {
    my_image.setAttribute('src', 'images/calendar.jpeg');
  } else {
    my_image.setAttribute('src', 'images/email.jpeg');
  }
}



let my_heading = document.querySelector('h1');

function set_user_name() {
  let my_name = prompt('Please enter your name.');
  if (!my_name) { // Don't allow null names.
    set_user_name();
  } else {
    localStorage.setItem('name', my_name);
    my_heading.textContent = 'You\'re so dumb, ' + my_name;
  }
}

// initialization code
if (!localStorage.getItem('name')) {
  set_user_name();
} else {
  let stored_name = localStorage.getItem('name');
  my_heading.textContent = 'You\'re so dumb, ' + stored_name;
}


let my_button = document.querySelector('button');
my_button.onclick = function() {
 set_user_name();
}




