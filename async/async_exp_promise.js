fn = () => console.log(2);

promiseTest = () => {
    new Promise((resolve) => {
        fn();
        resolve()
    }).then(() => console.log(1));
}

promiseTest();

console.log('Script End');