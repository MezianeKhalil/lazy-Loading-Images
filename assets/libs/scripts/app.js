let images = document.querySelectorAll('img')
let options = {
    // root: null,
    // rootMargin: '0px',
    // threshold: 1.0
}
let observer = new IntersectionObserver(
    (entries)=>{
        if(entries[0].isIntersecting){
            entries[0].target.src = entries[0].target.dataset.src
        }
    }
    ,options
)
images.forEach(img=>{
    observer.observe(img)
})