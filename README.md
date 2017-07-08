# slider-javascript
slider javascript

          
    /*style css*/
      <style>
        .pictur_list{
            height: 250px;
        }

        .pictur_list img{
            width: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 1s;
            position: absolute;
        }

        .pictur_list img::first-child {
            opacity: 1;
        }

        .pictur_list img .visible{
            opacity: 1;
        }

      </style>
      
      /*html*/
           <div id="pic">
             <div class="pictur_list">
                <img src="http://cdn.ministrytodaymag.com/images/stories/2015/misc/pastor-blog.jpg" alt="">
                <img src="http://well.org/wp-content/uploads/2017/02/shutterstock_255608386-1-400x220.jpg" alt="">
                <img src="https://bs-main-prod.s3.amazonaws.com/business-school/wp-content/uploads/2013/10/doctoral-400.jpg" alt="">
                <img src="http://www.sydacc.com.au/wp-content/uploads/2016/10/small-business-accounting-400x220.jpg" alt="">
              </div>
            <input type="button" class="btn_prev" value="prev"></input>
            <input type="button" class="btn_next" value="next"></input>
          </div>
    
        <script>
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
    </script>

