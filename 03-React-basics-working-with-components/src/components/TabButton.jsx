export default function TabButton({ children, onSelect, isSeleted }) {
  // document.querySelector('button').addEventListener('click', () => {
  //     // ..
  // }) => VanilaJS

  //   function handleClick() {
  //     console.log("test");
  //   }

  console.log("TABBUTTONCOMPONENT EXECUTING");

  return (
    <li>
      <button className={isSeleted ? 'active' : undefined } onClick={onSelect}>{children}</button>
    </li>
  );
}
