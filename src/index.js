function handleClickEmail() {
  navigator.clipboard.writeText("ayllachristinne15@gmail.com");
  showSnackBar();
}

function showSnackBar() {
  var sb = document.getElementById("snackbar");
  sb.className = "show";
  setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}