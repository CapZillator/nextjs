import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { ArticlesList } from '../components/articlesList/ArticlesList'
import styles from '../styles/index.module.scss'

export const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ArticlesList />
    </div>
  )
}

export default Home
