import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function BookList({ children, home }) {
  return (
    <div className={styles.bookList}>
      <div className={styles.bookList_wrapper}>
        <div className={styles.bookList_item}>
          <img
            src="/images/books/the_sirens_of_titan.jpg"
          />
        </div>
        <div className={styles.bookList_item}>
          <img
            src="/images/books/mr_rosewater.jpg"
          />
        </div>
        <div className={styles.bookList_item}>
          <img
            src="/images/books/the_sirens_of_titan.jpg"
          />
        </div>
        <div className={styles.bookList_item}>
          <img
            src="/images/books/mr_rosewater.jpg"
          />
        </div>
      </div>
    </div>
  )
}