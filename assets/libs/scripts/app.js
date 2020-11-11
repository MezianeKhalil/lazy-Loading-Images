let images = document.querySelectorAll('img')
let options = {
    root: null ,
    rootMargin: '250px',
    threshold: 0 ,
}
let observer = new IntersectionObserver(
    (entries,observer)=>{
        entries.forEach(entre=>{
            if(!entre.isIntersecting){
                return;
            }
            console.log(entries[0].target)
            entries[0].target.src = entries[0].target.dataset.src
            observer.unobserve(entre.target)
        })
    }
    ,options
)
images.forEach(img=>{
    observer.observe(img)
})