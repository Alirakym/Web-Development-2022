$('.add').on('click', function(){
  let note = document.createElement('p')
  let remove = document.createElement('button')
  let div = $("<div>", {"class": "note"})
  remove.innerHTML = 'Delete'
  note.innerHTML = $('.submit').val()
  $('.outter').append(div)
  $(div).append(note)
  $(div).append(remove)
  $('.submit').val('')
})

$('body').on('click', 'p', function(){
  $(this).toggleClass('lineThrough')
})

$('body').on('click', 'button', function(){
  $(this).closest('div').remove()
})