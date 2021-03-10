console.log("script start");

dummyFetch_task = async (request) => {
    console.log("fetch start")
    const response = await new Promise((resolve) => {
                                setTimeout(() => {
                                    console.log(request);
                                    resolve(request * 5);
                                }, 1000)
                            });
    console.log(response);
    console.log("fetch end");
    return response * 3;
}

dummyTest = async () => {
    console.log("test start");
    const value = await dummyFetch_task(1000);
    console.log(value * 10);
    console.log("test end");
}

dummyFetch_microTask = async (request) => {
    console.log("micro fetch start");
    const response = await Promise.resolve().then(() => {
        console.log(request);
        return request*5;
    });
    console.log(response);
    console.log("micro fetch end");
    return response * 2;
}

dummyTest_microTask = async () => {
    console.log("micro test start");
    const value = await dummyFetch_microTask(2000);
    console.log(value * 10);
    console.log("microtest end");
}

dummyTest();
dummyTest_microTask();

console.log("script end");