function volume_sphere() {
  // Get the input value of the radius
  const radius = document.getElementById('radius').value;

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume field
  document.getElementById('volume').value = volume;
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;