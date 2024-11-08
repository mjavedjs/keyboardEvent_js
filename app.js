let key= document.querySelector(".insert");

window.addEventListener('keydown',(e)=>{
    key.innerHTML =`
        <div> ${e.key}
        <div>${e.keyCode}</div>
          <div>  ${ e.code } </div>
        </div>
    `
})