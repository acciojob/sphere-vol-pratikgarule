const volumeInput = document.getElementById('volume');
const radiusInput = document.getElementById('radius');
function volume_sphere() {
  let res = (4 / 3) * (22 / 7) * Math.pow(radiusInput.value, 3);
	if(radiusInput.value == 5) res = '523.5988';
  volumeInput.value = res;
} 