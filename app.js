$(document).ready(function () {
  console.log('ready!');
  getJoke();
  $('.btn-joke').click(getJoke);
});

function getJoke() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random'
  }).done(function(data) {
    $('#joke').html(data.value.joke);
  })
}

