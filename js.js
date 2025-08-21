const b = document.querySelector('button')
const c = document.getElementById('gg')
let u = true
b.addEventListener('click',()=>{
    b.classList.toggle('h')
    if(u){
        b.innerText='ايقاف'
        u = false
        c.play()
    }else{
        b.innerText='تشغيل'
        u = true
        c.pause()
    }

})