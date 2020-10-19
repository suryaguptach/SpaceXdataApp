import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import HomeLayout from '../components/HomeLayout';

export default function Home({ filghts }) {
  return (
    <div>
      <Head>
        <title>SpaceXdata</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h3>SpaceX Lanch Programs</h3>
        <HomeLayout filghts={filghts}/>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('https://api.spaceXdata.com/v3/launches?limit=100');
  const filghts = await response.json();
  return { filghts: filghts }
}
