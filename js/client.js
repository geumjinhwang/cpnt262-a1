// code wrapped up in function init()
function init() {
  $(".btn").on("click",function(){
    $(".input").toggleClass("inclicked");
    $(".btn").toggleClass("close");
  })
}

// applying this init function when the page has finished loading
window.addEventListener('load', init);