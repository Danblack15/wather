jQuery(function () {

    /*GEOPOSITION*/
    function my_geo(){
        navigator.geolocation.getCurrentPosition(
            function(position){
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=1a18ebe8ba117aab79abc3b3685b4c57&lang=ru')
            .then(function(resp){return resp.json()})
            .then(function(data){
                let temp = Math.floor(data.main.temp-273.15),
                desc = data.weather[0].description,
                desc_main = data.weather[0].main,
                wind = Math.floor(data.wind.speed),
                pressure = Math.floor(data.main.pressure*0.750063755419211),
                humidity = Math.floor(data.main.humidity),
                wind_deg = data.wind.deg,
                name = data.name;
            $('.city_name').text(name);
            $('.deg').text(temp);
            $('.media_pod_center_block p').text(desc);
            $('.pod_center_block p').text(desc);
            $('.speed_wind').text(wind);
            $('.pressure').text(pressure);
            $('.humidity').text(humidity);
            /*Picture*/
            if (desc_main=='Clear'){
                $('.img img').attr('src', 'img/sun.svg');
            }
            if (desc_main=='Clouds'){
                if (desc=='scattered clouds'){
                    $('.img img').attr('src', 'img/partly_cloudy.svg');
                }else{
                    $('.img img').attr('src', 'img/cloud.svg');
                }
            }
            if (desc_main=='Rain'){
                $('.img img').attr('src', 'img/rain.svg');
            }
            if (desc_main=='Thunderstorm'){
                $('.img img').attr('src', 'img/storm.svg');
            }
            if (desc_main=='Drizzle'){
                $('.img img').attr('src', 'img/rain.svg');
            }
            /*Wind*/
            if (wind_deg>=348) $('.deg_wind').text('северный');
            if (wind_deg>=12 & wind_deg<=33) $('.deg_wind').text('северо-восточный');
            if (wind_deg>=34 & wind_deg<=56) $('.deg_wind').text('северо-восточный');
            if (wind_deg>=57 & wind_deg<=78) $('.deg_wind').text('северо-восточный');
            if (wind_deg>=79 & wind_deg<=101) $('.deg_wind').text('восточный');
            if (wind_deg>=102 & wind_deg<=123) $('.deg_wind').text('юго-восточный');
            if (wind_deg>=124 & wind_deg<=146) $('.deg_wind').text('юго-восточный');
            if (wind_deg>=147 & wind_deg<=168) $('.deg_wind').text('юго-восточный');
            if (wind_deg>=169 & wind_deg<=191) $('.deg_wind').text('южный');
            if (wind_deg>=192 & wind_deg<=213) $('.deg_wind').text('юго-западный');
            if (wind_deg>=214 & wind_deg<=236) $('.deg_wind').text('юго-западный');
            if (wind_deg>=237 & wind_deg<=258) $('.deg_wind').text('западно-южный');
            if (wind_deg>=259 & wind_deg<=281) $('.deg_wind').text('западный');
            if (wind_deg>=282 & wind_deg<=303) $('.deg_wind').text('северо-западный');
            if (wind_deg>=304 & wind_deg<=326) $('.deg_wind').text('северо-западный');
            if (wind_deg>=327 & wind_deg<=347) $('.deg_wind').text('северо-западный');

            })
            .catch(function(){

            });
            },
            function(error){
                
            }
        );
    };
    my_geo();

    $('.mygeo').click(function(){
        my_geo();
    });

    /*SELECT CITY*/
    $('.cities').on('click', 'p', function(e){
        $('.modal_serth').fadeOut('fast');

        $('#C').css({
            'background':'rgba(255, 255, 255, 0.2)',
            'opacity': 1
        });
        $('#F').css({
            'background':'none',
            'opacity': 0.4
        });

        let name = $(e.target).text();

        fetch('http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=1a18ebe8ba117aab79abc3b3685b4c57&lang=ru')
            .then(function (resp){return resp.json()})
            .then(function (data){
                let temp = Math.floor(data.main.temp-273.15),
                    desc = data.weather[0].description,
                    desc_main = data.weather[0].main,
                    wind = Math.floor(data.wind.speed),
                    pressure = Math.floor(data.main.pressure*0.750063755419211),
                    humidity = Math.floor(data.main.humidity),
                    wind_deg = data.wind.deg;
                $('.city_name').text(name);
                $('.deg').text(temp);
                $('.media_pod_center_block p').text(desc);
                $('.pod_center_block p').text(desc);
                $('.speed_wind').text(wind);
                $('.pressure').text(pressure);
                $('.humidity').text(humidity);
                /*Picture*/
                if (desc_main=='Clear'){
                    $('.img img').attr('src', 'img/sun.svg');
                }
                if (desc_main=='Clouds'){
                    if (desc=='scattered clouds'){
                        $('.img img').attr('src', 'img/partly_cloudy.svg');
                    }else{
                        $('.img img').attr('src', 'img/cloud.svg');
                    }
                }
                if (desc_main=='Rain'){
                    $('.img img').attr('src', 'img/rain.svg');
                }
                if (desc_main=='Thunderstorm'){
                    $('.img img').attr('src', 'img/storm.svg');
                }
                if (desc_main=='Drizzle'){
                    $('.img img').attr('src', 'img/rain.svg');
                }
                /*Wind*/
                if (wind_deg>=348) $('.deg_wind').text('северный');
                if (wind_deg>=12 & wind_deg<=33) $('.deg_wind').text('северо-восточный');
                if (wind_deg>=34 & wind_deg<=56) $('.deg_wind').text('северо-восточный');
                if (wind_deg>=57 & wind_deg<=78) $('.deg_wind').text('северо-восточный');
                if (wind_deg>=79 & wind_deg<=101) $('.deg_wind').text('восточный');
                if (wind_deg>=102 & wind_deg<=123) $('.deg_wind').text('юго-восточный');
                if (wind_deg>=124 & wind_deg<=146) $('.deg_wind').text('юго-восточный');
                if (wind_deg>=147 & wind_deg<=168) $('.deg_wind').text('юго-восточный');
                if (wind_deg>=169 & wind_deg<=191) $('.deg_wind').text('южный');
                if (wind_deg>=192 & wind_deg<=213) $('.deg_wind').text('юго-западный');
                if (wind_deg>=214 & wind_deg<=236) $('.deg_wind').text('юго-западный');
                if (wind_deg>=237 & wind_deg<=258) $('.deg_wind').text('западно-южный');
                if (wind_deg>=259 & wind_deg<=281) $('.deg_wind').text('западный');
                if (wind_deg>=282 & wind_deg<=303) $('.deg_wind').text('северо-западный');
                if (wind_deg>=304 & wind_deg<=326) $('.deg_wind').text('северо-западный');
                if (wind_deg>=327 & wind_deg<=347) $('.deg_wind').text('северо-западный');
            })
            .catch( function(){
                
            });
    });

        /*Динамический поиск*/
            $('.serh_city').keyup( function(){
                    let city = $('.serh_city').val();
                    len = city.length;
                    function serth(){
                        $.getJSON('city_list.json', function(data){
                            let str;
        
                            for (let i = 0; i < 209579; i++) {
                                let s = data[i].name;
                                    for (let j = 0; j < len; j++)
                                        str += s[j];
                                    if ($('.cities p').length <=4){
                                        if (str == city){
                                            $('.cities').append('<p>'+data[i].name+'</p>');
                                        }
                                    }else{
                                        $('.cities p:nth-child(1)').remove();
                                    }
                                str='';
                                
                            }
                        });
                    }
                    setTimeout(serth, 30);
                });


    $('.rigth_block_up ul li').click( function(e){
        let deg_c = $('.deg').text();
        deg_c = Number(deg_c);

        if (e.target.id == 'C'){
            if ($('#C').css('opacity') != 1){
                $(e.target).css({
                    'background':'rgba(255, 255, 255, 0.2)',
                    'opacity': 1
                });
                $('#F').css({
                    'background':'none',
                    'opacity': 0.4
                });
                deg_c = Math.round((deg_c - 32)*5/9);
            }
        }else if (e.target.id == 'F'){
            if ($('#F').css('opacity') != 1){
                $(e.target).css({
                    'background':'rgba(255, 255, 255, 0.2)',
                    'opacity':1
                });
                $('#C').css({
                    'background':'none',
                    'opacity': '0.4',
                });
                deg_c = Math.floor(deg_c*9/5 + 32);
            }
        }
        $('.deg').text(deg_c);
    });

    $('.select_city').click( function(e){
        $('.modal_serth').fadeToggle('fast');
    });

    $(document).mouseup(function (e){
		var div = $('.modal_serth');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.fadeOut('fast');
		}
	});
});