setTimeout(()=>console.log(5));
fn = () => {
    return new Promise((resolve) => {
        console.log(1);
        resolve();
    }).then(() => console.log(2));
}

asyncTest = () => {
    fn().then(() => console.log(3));
}

asyncTest();

console.log("script end");
/**
1
script end
2
3
5
*/