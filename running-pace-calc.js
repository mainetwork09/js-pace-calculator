function calculatepace(){
	var TargetSpeed = document.getElementById('speed');
	var TargetPace = document.getElementById('pace');
	var Hours = Number(document.getElementById('hours').value);
	var Min = Number(document.getElementById('minutes').value);
	var Sec = Number(document.getElementById('seconds').value);
	var Distance = Number(document.getElementById('distancemetre').value);
						
	if ( !isNaN(Hours) && !isNaN(Min) && !isNaN(Sec) && !isNaN(Distance) && (Distance>0) ) {
		Sec = Hours * 3600 + Min * 60 + Sec;

		if ( Sec > 0 ) {
			var Speed = (3.6 * Distance / Sec).toFixed(2);
			var Pace = 1000  * Sec / Distance;
            
            if ( Math.floor(Pace % 60) < 10 ) 
				var PaceMinute = Math.floor(Pace / 60) + ':0' + Math.floor(Pace % 60);
			else
				var PaceMinute = Math.floor(Pace / 60) + ':' + Math.floor(Pace % 60);
			// Target.innerHTML = 'ความเร็ว (speed) = ' + Speed + ' km./h<br>ฝีเท้า (pace) = ' + PaceMinute + ' นาที/กม.';
			TargetSpeed.innerHTML = Speed;
			TargetPace.innerHTML = PaceMinute;
		} else {
			// time = 0
			TargetSpeed.innerHTML = '';
			TargetPace.innerHTML = '';
		}
	} else {
		TargetSpeed.innerHTML = '';
		TargetPace.innerHTML = '';
	}
}
				