
    function unstick(){
    var elements = document.getElementsByClassName('sidebar');
    for(const el in elements){
      el.classList.remove("sticky");
      }
    };

    stickySideBar = function(){};

