var mapOptions;

function getLocation()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else
	{
		//straight fuckin wit it
		mapOptions = {
			center: new google.maps.LatLng(-53.099796,73.512053),
			zoom: 8
		}
	}
}

function showPosition(position)
{
	 mapOptions = {
		 center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		 zoom: 10
	 }
}
