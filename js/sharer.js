/*
//Minimal sharing floating element generator
//Uses minified svg icons provided by SuperTinyIcons
//External file loaded only when required
//@Nirose @ https://www.jucktion.com 
*/
var title= document.title,link = encodeURIComponent(document.location.href);
var gp = document.querySelector('.shr.gp');
var gph=document.createElement('a');
gph.href="https://plus.google.com/share?url="+link;
gp.appendChild(gph);

var fb = document.querySelector('.shr.fb');
var fbh=document.createElement('a');
fbh.href="https://www.facebook.com/sharer.php?u="+link;
fb.appendChild(fbh);

var twt = document.querySelector('.shr.twt');
var twth=document.createElement('a');
twth.href="https://twitter.com/intent/tweet?url="+link+"&text="+title;
twt.appendChild(twth);

var pin = document.querySelector('.shr.pint');
var pinh=document.createElement('a');
pinh.href="https://www.pinterest.com/pin/create/button/";
pinh["data-pin-do"]="buttonBookmark";pinh["data-pin-custom"] = "true";pin.appendChild(pinh);

var mstdn = document.querySelector('.shr.mstdn');
var mstdnh=document.createElement('a');
mstdnh.href="https://mastodon.social/share?text="+title+'+'+link;
mstdn.appendChild(mstdnh);
//var whats = document.querySelector('.shr.wha');var whtf=document.createElement('a');whtf.href="whatsapp://send?text="+link;whats.appendChild(whtf);

var shrs=document.querySelectorAll('.shr a');for(var s=0;s<shrs.length;s++){shrs[s].target="_blank";}

//reposition elements to be mobile responsive
function repos(){
    var shrelm = document.querySelector('.share');
    // console.log(window.screen.width);
    // console.log(window.screen.availWidth);
    // console.log(document.body.clientWidth);
    // console.log(document.body.offsetWidth);
    // console.log(document.body.scrollWidth);
    if(document.body.offsetWidth > 468){shrelm.style= ''; shrelm.style.top='calc(50% - ' + shrelm.offsetHeight/2 + 'px)'}else{ shrelm.style='';shrelm.style.left='calc(50% - ' + shrelm.offsetWidth/2 + 'px)';}

    //?If Pinterest span is present
    // if(document.querySelectorAll('.shr.pin').length == 1){
    // !function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});
    // }
}

//Observe click on pinterest icon to only load the required pinterest share javascript file when required
//not at the first load
function pinIt(e){
    e.preventDefault();
    !function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});
    
    //
    //?https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#Example_usage
    //
    var config = {attributes: true};
    // Callback function to execute when mutations are observed
    var callback = function(mutations) {
        for(var m=0;m<mutations.length;m++) {
            if (mutations[m].type == 'attributes') {
                //console.log('The ' + mutation.attributeName + ' attribute was modified.');
                pinh.click();observer.disconnect();
            }
        }
    };
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(pinh, config);  
}
//?Position on load and reposition to window resize
window.onload = repos();
pinh.onclick = pinIt;
window.addEventListener("resize", function(){
    repos();
});