
let loadMore= document.querySelector('#load-more');


let courrentItem= 3;

loadMore.onclick = ( )=> {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for(var i=  courrentItem ; i < courrentItem +3 ; i++){
        boxes[i].style.display='inline-block'
    }
    courrentItem+=3;
    

    if (courrentItem>= boxes.length){
        loadMore.style.display='none'


    }
}