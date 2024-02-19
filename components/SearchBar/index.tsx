import styles from './searchbar.module.css';
const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" placeholder="링크를 검색해 보세요." />
      <img src="/images/search.svg" alt="검색창인 것을 알려주는 돋보기 아이콘" className={styles.icon} />
    </div>
  );
};

export default SearchBar;
