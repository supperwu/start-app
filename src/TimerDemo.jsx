import { useEffect, useState } from 'react';


// 这个组件演示了如何使用 useEffect 来设置和清理定时器。
function TimerDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //传递一个 state 更新器
    const timer = setInterval(() => setCount(c => c + 1), 1000);

    // 清理定时器
    return () => clearInterval(timer);
  }, []);

  return <div>计数：{count}</div>;
}

export default TimerDemo;