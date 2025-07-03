import styles from "./Header.module.css";

export function Header() {
  return (
    <header
      className={`header ${styles.header}`}
      style={{ color: "Background", padding: "12px" }}
    >
      <h1>Fast React Pizza CO.</h1>
    </header>
  );
}
