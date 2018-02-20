

       var url = "https://api.wunderground.com/api/7a342b1091639461/conditions/q/IN/Fishers.json"
       var test = 1
    
      function getData(){
       $.getJSON(url)
            .done(function(data){
             console.log(data.current_observation.dewpoint_f)
             console.log(data.current_observation.observation_time_rfc822)
             console.log(data.current_observation.temp_f)
             console.log(data.current_observation.wind_mph)
             console.log(data.current_observation.precip_today_string)
             console.log(test + 1)
            //  setTimeout(getData(), 10000)
            });
           
    }

    $( document ).ready(function() {
        // setTimeout(getData(), 10000)
    });