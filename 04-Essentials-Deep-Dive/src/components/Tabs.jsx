export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
//   const ButtonsContainer = buttonsContainer;

  return (
    <>
      {/* <ButtonsContainer>{buttons}</ButtonsContainer> */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
