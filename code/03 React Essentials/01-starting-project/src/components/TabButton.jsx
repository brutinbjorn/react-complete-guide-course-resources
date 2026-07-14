export default function TabButton({children, onClick, isSelected})
{
    // javascript example:  document.querySelector('button').addEventListener('click', () => {});
    
    // function handleClick() {
    //     console.log(`Hello world!`);
    // }

    return (
    <li>
        <button className={isSelected ? "active" : ""} onClick={onClick}>
            {children}
        </button>
    </li>);
}