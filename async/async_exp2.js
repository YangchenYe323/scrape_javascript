log = () => console.log(1);

fn = async () => {
    await log();
    console.log(2);
}

asyncTest = async () => {
    await fn();
    console.log(3);
}

asyncTest();

console.log('script end');

/**
1
script end
2
3
*/
