setTimeout(function(){
    var elem = document.querySelector('#pop-up');

            var mouseX = 0;
            var mouseY = 0;
            var popupCounter = 0;

            document.addEventListener("mousemove", function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
                document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
            });

            $(document).mouseleave(function () {
                if (mouseY < 100) {
                    if (popupCounter < 1) {
                        elem.style.display = 'block';
                    }
                    popupCounter ++;
                }
    });
}, 3000);


$(document).ready(function(){
  $(".exit-cont").click(function(){
    $(".pop-up").hide();
  });
  
  $(".whitepaper-cta").click(function(){
    $(".pop-up").hide();
  });
  
});
