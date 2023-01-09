function doForm () {
    var data = $('form').serialize();
    window.location.href = "html/" + data.substring(5) + ".html";
    return false;
  }