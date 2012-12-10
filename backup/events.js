var allEvents = new Array();

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
					        aEvent = { "name":val2['name'], "start_date": val2['start_date'], "display_start_date": val2['display_start_date'], "city": val2['city'], "country": val2['country']};
					        var doit = allEvents.push(aEvent);	
			        		}
			          }); 
			          
			        });
			               		        	
	        	}
	        	
          		citycount++; 
	          	if(totalcities==citycount){
	          	       	
          		alert(totalcities + ":" + citycount);
			          	
				var aTemp = [];
			    for (var sKey in allEvents){
			        aTemp[aTemp.length] = sKey; 
			    }
			    
			    aTemp.sort(function(a,b){
			    	
			    	//alert(allEvents[aTemp[a]].start_date);
			    	//alert(allEvents[aTemp[b]].start_date);
			    	
				    if(allEvents[aTemp[a]].start_date < allEvents[aTemp[b]].start_date) return -1;
				    if(allEvents[aTemp[a]].start_date > allEvents[aTemp[b]].start_date) return 1;
				    
				    //if(allEvents[aTemp[a]].name < allEvents[aTemp[b]].name) return -1;
				    //if(allEvents[aTemp[a]].name > allEvents[aTemp[b]].name) return 1;				    
				    
				    return 0;
				});
							    
				 var aOutput = {};
				    for (var nIndex=0; nIndex<aTemp.length;nIndex++){
				        aOutput[aTemp[nIndex]] = allEvents[aTemp[nIndex]];
				    }			    
			              	
  	
          		$.each(aOutput, function(key3, val3) {
			        var template = $('#eventListingItemTemplate').html();
			        var html = Mustache.to_html(template, val3);
			        //alert(html);
			        $('#eventList').append(html);  
			               			
          			}); 
          			
          		//alert('done!');	
          			
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

    
function showCountries()
    {
    alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
    	//alert(dodump(data,5));
        var template = $('#eventListingTemplate').html();
        var html = Mustache.to_html(template, data);
        //alert(html);
        $('#eventList').html(html);
        });
    }   
    