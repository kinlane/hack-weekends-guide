function listNews()
    {
    newscount = 0;
    $.getJSON('data/news/news.json', function(data) {
    	
    	 $.each(data['news'], function(key, val) {
	    	
			if(newscount<250){
				var template = $('#newsListingTemplate').html();
				var html = Mustache.to_html(template, val);
				$('#newsList').append(html);
				}
	        
	        newscount++;
	        });
        
        });
        
    }    
     