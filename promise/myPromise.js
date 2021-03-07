function Promise(fn) {
  this.cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  }

  fn(resolve);
}

Promise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

//
//调用流程：
//调用Promise构造函数（p1） -> 调用f1 -> log 1 -> 调用resolve -> resolve setTimeout(task1)
//->f1返回 -> Promise构造函数返回 -> Promise then调用 -> 调用 Promise构造函数（p2）-> p1.cbs 推入函数（fa）
//-> Promise构造函数（p2）返回
//主线程结束，调用task1 -> p1.data赋值，p1.cbs中函数执行 -> 调用fa -> 调用f2 -> log 2 ->f2返回值不是Promise，调用p2.resolve
//->p2.resolve调用 -> setTimeout （task2）-> fa返回 -> task1结束
//->调用task2 -> p2.data赋值为f2的返回值 -> p2.cbs中函数执行（没有） ->task2结束
//结束
f1 = (resolve) => {
  console.log(1);
  resolve();
}

let p1 = new Promise(f1)

f2 = () => {console.log(2)};

let p2 = p1.then(f2);
//  

  