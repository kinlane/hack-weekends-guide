    function showEventsByCity()
    {
    citycount = 0;
    eventcount = 0;	
    var allEvents = new Array();
	
    $.getJSON('data/events/cities.json', function(data) {
    	
    	allcities = data['cities'];
    	totalcities = allcities.length;
    	
        $.each(data['cities'], function(key, val) {
        	
        	city = val['city'];
        	     	
        	if(val['eventcount']>0)
	        	{
	        		
	        	filename = city.replace(" ","-");
	        	filename = filename.toLowerCase();
	        	filename = 'data/events/'+ filename + ".json";
	        	
			    $.getJSON(filename, function(eventdata) {
			    	
			        $.each(eventdata['events'], function(key2, val2) {
			        	  
			        	startDate = new Date(val2['start_date']);
			        	endDate = new Date();
//alert(endDate);
			        	if(startDate > endDate)
			        		{
					        var template = $('#eventListingItemTemplate').html();
					        var html = Mustache.to_html(template, val2);
					        $('#eventList').append(html);  
			        		}
			          }); 
			         
			        });
			               		        	
	        	}	        	       	
          });           
            
        }); 
 
    }       
     
     
function getEvent(url,city)
    {
	filename = city.replace(" ","-");
	filename = filename.toLowerCase();
	filename = 'data/events/'+ filename + ".json";    	
    	
    $.getJSON(filename, function(data) {
        $.each(data['events'], function(key, val) {
            if(url==val['url']){
                var template = $('#eventyDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#EventDetail').html(html);
                pHTML = document.getElementById('about').innerHTML;  
            }
          });                            
        });
    }  
