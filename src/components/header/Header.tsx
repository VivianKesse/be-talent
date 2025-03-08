import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logo} src="/src/assets/logo.svg" alt="Logotipo da BeTalent" />
    </header>
  )
}
