$(document).ready(function(){
	// SM Muntinlupa
	$.ajax({
		url: 'https://www.smcinema.com/Home/MoviesPerCinemaByBranch',
		method: 'POST',
		data: {
			branchKey:7,
			dateFormat:2,
			cinemaFilters:0,
			showingFilters:1,
			viewType:0,
			filter:0
		},
	    success: function(data) {
	    	data = data.replace(/<\s*(script|iframe)[^>]*>(?:[^<]*<)*?\/\1>/g, "").replace(/(<(\b(img|style|head|link)\b)(([^>]*\/>)|([^\7]*(<\/\2[^>]*>)))|(<\bimg\b)[^>]*>|(\b(background|style)\b=\s*"[^"]*"))/g, "");
	    	$("body").append('<h1 class="text-center">SM MUNTINLUPA</h1><br>');

	    	$(data).find('.CR2-movie-poster').each(function(){
	    		var cinema =  $(this).find('span:first').text();
	    		var title =  $(this).find('span:last').text();

	    		$("body").append('<h5><b>' + cinema + ': ' + title + '<b></h5>');

	    		$(this).find('a').each(function(){
	    			$("body").append('|' + $(this).text());
	    		});

	    		$("body").append('<hr>');
			});
	    }
	});

	// SM Sta Rosa
	$.ajax({
		url: 'https://www.smcinema.com/Home/MoviesPerCinemaByBranch',
		method: 'POST',
		data: {
			branchKey:24,
			dateFormat:2,
			cinemaFilters:0,
			showingFilters:1,
			viewType:0,
			filter:0
		},
	    success: function(data) {
	    	data = data.replace(/<\s*(script|iframe)[^>]*>(?:[^<]*<)*?\/\1>/g, "").replace(/(<(\b(img|style|head|link)\b)(([^>]*\/>)|([^\7]*(<\/\2[^>]*>)))|(<\bimg\b)[^>]*>|(\b(background|style)\b=\s*"[^"]*"))/g, "");
	    	$("body").append('<h1 class="text-center">SM SANTA ROSA</h1><br>');

	    	$(data).find('.CR2-movie-poster').each(function(){
	    		var cinema =  $(this).find('span:first').text();
	    		var title =  $(this).find('span:last').text();

	    		$("body").append('<h5><b>' + cinema + ': ' + title + '<b></h5>');

	    		$(this).find('a').each(function(){
	    			$("body").append('|' + $(this).text());
	    		});

	    		$("body").append('<hr>');
			});
	    }
	});

	// FESTIVAL SUPERMALL
	$.ajax({
		url: 'https://festivalsupermall.com/cinema',
		method: 'POST',
	    success: function(data) {
	    	data = data.replace(/<\s*(script|iframe)[^>]*>(?:[^<]*<)*?\/\1>/g, "").replace(/(<(\b(img|style|head|link)\b)(([^>]*\/>)|([^\7]*(<\/\2[^>]*>)))|(<\bimg\b)[^>]*>|(\b(background|style)\b=\s*"[^"]*"))/g, "");
	    	$("body").append('<h1 class="text-center">FESTIVAL SUPERMALL</h1><br>');

	    	$(data).find('.cinemaitems_2').each(function(){

	    		$("body").append('<h5><b>' + $(this).find('h3').text() + '<b></h5>');

	    		var details = $(this).find('.cinematable').html();

	    		$("body").append(details);

	    		$("body").append('<hr>');
			});
	    }
	});
});
