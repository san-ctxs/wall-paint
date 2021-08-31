function colorChange() {
  let x = document.getElementById('bgSelector').value
  document.getElementById('bgColor').style.backgroundColor = x
  let y = document.getElementById('colorSelector').value
  document.getElementById('wallColor').style.backgroundColor = y
  if (x == 'black') {
    document.getElementsByTagName('h1')[0].style.color = 'white'
  } else {
    document.getElementsByTagName('h1')[0].style.color = 'black'
  }
}