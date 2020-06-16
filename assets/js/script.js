// Line Through on list items

$('ul').on("click", "li" , function(){
	$(this).toggleClass('done');
})


// Delete a task

$('ul').on('click', "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Add New Task

$('input').keypress(function(event){
	if(event.which == 13){
		let task = $('input').val()
		$('ul').append('<li><span class="delete"> <i class="fa fa-trash" aria-hidden="true"></i> </span>' + task + '</li>');
		$('input').val("")
	}
})

// Toggle input field

$("#add").click(function(){
	$('input').fadeToggle();
})