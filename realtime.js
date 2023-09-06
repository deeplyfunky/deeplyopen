//Click Submit Function
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("click-this").addEventListener("click", runit);
});

function runit() {
  fetch('https://match.adsrvr.org/track/rid?ttd_pid=67jqghy&fmt=json',
  {method: "GET",
  'credentials': 'include'})
  .then(response => response.text())
  .then(html => {
    document.getElementById('realtimeid').innerHTML = html;
   })
   .then((data) => {

   });
}
