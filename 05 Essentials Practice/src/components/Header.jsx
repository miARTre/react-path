import logoImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="React Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
