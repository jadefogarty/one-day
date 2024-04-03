document.addEventListener('DOMContentLoaded', function () {
  var today = new Date();

  var yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  var dd = String(yesterday.getDate()).padStart(2, '0');
  var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  var yyyy = yesterday.getFullYear();

  yesterday = yyyy + '-' + mm + '-' + dd;

  console.log(today)
  console.log(yesterday)

  document.getElementById('selectedDate').setAttribute('max', yesterday);
  //document.getElementById('selectedDate').setAttribute('placeholder', yesterday);
});