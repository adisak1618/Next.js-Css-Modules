import style from './styles.css'
import Head from 'next/head'
console.log(style)
const Home = () => <div className={style.title}>
  <Head>
    <link rel='stylesheet' href='/static/css/pages/styles.css' />
  </Head>
  <p className={style.title}>Css modules </p>
</div>

export default (Home);