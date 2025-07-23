export default function TabButton({ children, onSelect }) {
  // document.querySelector('button').addEventListener('click', () => {
  //     // ..
  // }) => VanilaJS

  //   function handleClick() {
  //     console.log("test");
  //   }

  console.log("TABBUTTONCOMPONENT EXECUTING");

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
