import React, { useState } from 'react';


// React 组件必须以大写字母开头
function MyButton({ content, onClick }) {
    // useState 是 React 的一个 Hook，用于在函数组件中添加状态
    function handleClick() {
        setCount(count + 1);
        onClick();
        console.log(`Clicked ${count + 1} times`);
    }

    const [count, setCount] = useState(0);

    return (
        <button className="my-button" onClick={handleClick}>
            {content ? content : `Click ${count} times!`}
        </button>
    );
}

export default MyButton;