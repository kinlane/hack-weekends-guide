
function showEvents()
    {
   // alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
	//alert('in');
        $.each(data['events'], function(key, val) {
        	startDate = val['start_date'];     	
        	startDate = new Date(startDate);
        	endDate = new Date();
        	alert(startDate);
        	if(startDate > endDate)
        		{
        		alert("in!");	
        		}
          }); 
        });
    }   
  
    
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

			        	if(startDate > endDate)
			        		{
					        var template = $('#eventListingItemTemplate').html();
					        var html = Mustache.to_html(template, val2);
					        //alert(html);
					        $('#eventList').append(html);  
			        		}
			          }); 
			          
			        });
			               		        	
	        	}	        	       	
          });           
            
        }); 
 
    }       
     
     
function getEvent(id)
    {
    $.getJSON('data/events/san-francisco.json', function(data) {
        $.each(data['events'], function(key, val) {
            if(id==val['id']){
                var template = $('#directoryDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#DirectoryDetail').html(html);                            
            }
          });                            
        });
    }  
