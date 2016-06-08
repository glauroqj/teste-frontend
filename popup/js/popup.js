$(document).ready(function() {
	//make the button dragabble
	var $draggable = $('#call-modal, #popup').draggabilly({
		containment: 'body'
	})
	
	$('#call-modal').dblclick(function(event) {
		event.preventDefault();
		$('#popup').slideDown(150);
		$(this).hide();
	});
	$('#close-modal').on('click', function(event) {
		event.preventDefault();
		$('#popup').slideUp(150);
		$('#call-modal').show(150);
	});

	//tooltip
	$('.Tooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
    });

});//end