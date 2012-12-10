function showCities()
    {
    citycount = 0;
    eventcount = 0;	
    var allEvents = new Array();
	
    $.getJSON('data/events/cities.json', function(data) {
    	
    	allcities = data['cities'];
    	totalcities = allcities.length;
    	
        $.each(data['cities'], function(key, val) {
        	
        	city = val['city'];
        	     	
        	if(val['eventcount']>10)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        $('#tier1').append(html);     
		        citycount++;		        	
	        	}	
        	if(val['eventcount']>=5&&val['eventcount']<=10)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        $('#tier2').append(html);     
		        citycount++;		        	
	        	}
        	if(val['eventcount']<=5)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        $('#tier3').append(html);     
		        citycount++;		        	
	        	}	        		        	        	       	
          });           
            
        }); 
 
	}
	
function getCityEvents(city)
    {
	filename = city.replace(" ","-");
	filename = filename.toLowerCase();
	githubJSONFile = 'https://raw.github.com/kinlane/hack-weekends/gh-pages/data/events/' + filename + '.json';   
	filename = 'data/events/'+ filename + ".json";    	
   	eventcount = 0;
   	
   	//alert(githubJSONFile);
	$("#jsonlink").attr("href", githubJSONFile)

   	$('#eventListTitle').html('Hackathons for ' + city);
   	
    $.getJSON(filename, function(data) {
        $.each(data['events'], function(key, val) {
        	startDate = new Date(val['start_date']);
        	endDate = new Date();
			//alert(val['name']+ ' ' + startDate + ' ' + endDate);
        	if(startDate > endDate)
        		{
                var template = $('#eventListingItemTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#eventList').append(html);
                eventcount++;
            }
          }); 
          
         if(eventcount==0){
         	html = '<tr><td colspan="3" align="center"><br /><br /></td></tr><tr><td colspan="3" align="center"><strong>No events for ' + city + ' currently!</strong></td></tr>';
         	//alert(html);
         	$('#eventList').append(html);		
         }
                                     
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
{}
