
// React 组件必须以大写字母开头
function MyButton(){
    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <button className="my-button" onClick={handleClick}>
            Click Me!
        </button>
    );
}

export default MyButton;