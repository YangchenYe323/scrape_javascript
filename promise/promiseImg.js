function loadImageAsync(url){
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function(){
            resolve(image)
        }
        image.onerror = function(){
            reject(new Error(`Could not load image at ${url}`));
        }
        image.src = url
    })
}

loadImageAsync('/Users/yangchen/Pictures/701825.jpg').then((value) => {
    console.log(value)
});

console.log("script end");