setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? "PM" : "AM";
  
  if (h > 12) {h = h - 12};
  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};
  
  document.querySelector('#hours').innerHTML = h;
  document.querySelector('#minutes').innerHTML = m;
  document.querySelector('#seconds').innerHTML = s;
  document.querySelector('#ampm').innerHTML = ap;

  document.querySelector('#h-progress-bar')
  .style.strokeDashoffset = 440 - (440 * h) / 12;

  document.querySelector('#m-progress-bar')
  .style.strokeDashoffset = 440 - (440 * m) / 60;

  document.querySelector('#s-progress-bar')
  .style.strokeDashoffset = 440 - (440 * s) / 60;
});
