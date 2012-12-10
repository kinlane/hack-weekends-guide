var allEvents = new Array();

function addDisplayEvent(eventdata){
    $.each(eventdata['events'], function(key2, val2) { 	 
    	startDate = new Date(val2['start_date']);
    	endDate = new Date();

    	if(startDate > endDate)
    		{
	        aEvent = { "name":val2['name'], "start_date": val2['start_date'], "display_start_date": val2['display_start_date'], "city": val2['city'], "country": val2['country']};
	        var doit = allEvents.push(aEvent);	
	        //alert(doit);
    		}
    	 });
	}    
	
function doDisplayEvent(currCount,totalCount)
{
	
	alert(currCount + ' : ' + totalCount);
		
	if(currCount==totalCount)
		{
		
		alert('IN - Run!');
		
		var aTemp = [];
		for (var i=0;i<allEvents.length;i++){
	        aTemp[aTemp.length] = i; 
	    }
	    
	    aTemp.sort(function(a,b){
	    	
		    if(allEvents[aTemp[a]]['start_date'] < allEvents[aTemp[b]]['start_date']) return -1;
		    if(allEvents[aTemp[a]]['start_date'] > allEvents[aTemp[b]]['start_date']) return 1;
		    
		    return 0;
		});
		
		 var aOutput = {};
		    for (var nIndex=0; nIndex<aTemp.length;nIndex++){
		        aOutput[aTemp[nIndex]] = allEvents[aTemp[nIndex]];
		    }			    
	              		
		$.each(aOutput, function(key3, val3) {
	        var template = $('#eventListingItemTemplate').html();
	        var html = Mustache.to_html(template, val3);
	       // alert(html);
	        $('#eventList').append(html);  
	               			
			});               		
		}	
	} 
    
function pullEventsByCity()
    {
    citycount = 1;
    eventcount = 0;	
    
    //alert('IN!');
	
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
			    	
			    	citycount++;
			    	addDisplayEvent(eventdata);
			    	
			    	
			    	
			    	 
			    	}).error(function() { citycount++; });
			              		        	
	        	}  
	        else
	        {
	        citycount++;	
	        }
	        doDisplayEvent(citycount,totalcities);        	       	
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
    