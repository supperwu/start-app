import React, { useState, useEffect } from 'react';

// function LifecycleDemo() {
//     const [count, setCount] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);
    
//     // 1. 挂载阶段
//     useEffect(() => {
//         console.log('Component mounted or updated');

//         // 3. 卸载阶段
//         return () => {
//         console.log('Component unmounted');
//         };
//     }, [count]);
    
//     return (
//         <div>
//         <h1>Lifecycle Demo</h1>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setIsVisible(!isVisible)}>
//             Toggle Visibility
//         </button>
//         {isVisible && <p>This is a visible paragraph.</p>}
//         </div>
//     );
// }

function LifecycleDemo({ name }) {
  // 1. 挂载阶段 
  // 当组件被添加到 DOM 的时候，React 将运行 setup 函数 
  useEffect(() => {
    console.log('组件挂载：只执行一次');

    // 3. 卸载阶段
    return () => {
      console.log('组件卸载：清理副作用');
    };
  }, []);

  // 2. 更新阶段（监听 name 变化）
  useEffect(() => {
    console.log('组件更新：name 变化为', name);
  }, [name]);

  return (
    <div>
      <h2>生命周期演示组件</h2>
      <p>当前 name: {name}</p>
    </div>
  );
}

// 父组件用于演示挂载、更新、卸载
function Parent() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('Alice');

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? '卸载子组件' : '挂载子组件'}
      </button>
      <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>
        切换 name
      </button>
      {show && <LifecycleDemo name={name} />}
    </div>
  );
}

export default Parent;