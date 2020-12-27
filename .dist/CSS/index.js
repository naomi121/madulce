var image = document.getElementById("image");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

image.addEventListener('mouseover', function(){
  image.src = "path/to/newimage"
})
image.addEventListener('mouseout', function(){
    image.src = "path/to/otherimage"
  })