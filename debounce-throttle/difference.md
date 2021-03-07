#### Functionality

- debounce的使用效果：高频事件最后一次触发后经过指定的，期间没有事件触发的wait后执行回调函数
  - 例子：给onmousemove这个事件绑定一个count++的回调函数，然后疯狂动鼠标，这个过程中count不会++，必须得不动鼠标指定时间后count才会++
    - Complication：可实现不同变种，例如疯狂动鼠标开始的时候马上++一次，结束后不再++等

- throttle的使用效果：高频事件不断触发的过程中，每间隔wait时间执行一次回调函数
  - 例子：onmousemove绑定count++的函数，然后疯狂动鼠标，count会间隔wait的时间稳步++

#### Implementation

TODO