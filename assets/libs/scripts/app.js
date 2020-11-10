let images = document.querySelectorAll('img')
let observer = new IntersectionObserver(
    (entries)=>{
        if(entries[0].isIntersecting){
            entries[0].target.src = entries[0].target.dataset.src
        }
    }
)
images.forEach(img=>{
    observer.observe(img)
})