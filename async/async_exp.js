fn = () => {
    console.log(2);
}

asyncTest = async () => {
    await fn();
    console.log(1);    
}

asyncTest();

console.log('script end'); 

/**
2
script end 
1
*/