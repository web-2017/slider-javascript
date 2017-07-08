$(function(){

    var btn_next = document.querySelector('.btn_next'); //button left
    var btn_prev = document.querySelector('.btn_prev'); //button right
    var img      = document.querySelectorAll('#pic .pictur_list img'); //images
    var i        = 0;

    btn_next.onclick = function() {
        img[i].style.opacity = '0';
        i++;
        if(i >= img.length){
            i=0;
        }
        img[i].style.opacity = '1';
    }
    
    btn_prev.onclick = function() {
        img[i].style.opacity = '0';
        i--;
        if(i < 0){
            i = img.length -1;
        }
        img[i].style.opacity = '1';
    }
    
});
