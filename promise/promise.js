let p = new Promise((resolve, reject) => {
    console.log('set promise')
   setTimeout(resolve, 2000, 'done'); 
});

p.then((value) => {console.log("lalalalalala")})

console.log('aha')