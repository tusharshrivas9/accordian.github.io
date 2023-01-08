const ourItemdiv = document.getElementsByClassName('item')
const iconopen = document.getElementsByClassName('iconOpen')
const iconclose = document.getElementsByClassName('iconClose')

for (let i = 0; i < ourItemdiv.length; i++) {
    iconclose[i].style.display = "none";

    ourItemdiv[i].addEventListener('click',()=>{
       const result = ourItemdiv[i].classList.toggle('active')
       if (result) {
        iconclose[i].style.display = "block";
        iconopen[i].style.display = "none";
        
       } else {
        iconclose[i].style.display = "none";
        iconopen[i].style.display = "block";
       }
    })
    
}