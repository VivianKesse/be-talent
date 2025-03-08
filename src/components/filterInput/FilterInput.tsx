import styles from "./FilterInput.module.css"

interface FilterInputProps {
  searchText: string
  onSearchChange: (value: string) => void;
}

export default function FilterInput(props: FilterInputProps) {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Pesquisar"
        value={props.searchText}
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <button className={styles.searchButton}>
        <img className={styles.searchIcon} alt="ícone de pesquisar" src="/src/assets/search-icon.svg" />
      </button>
    </div>
  )
}
