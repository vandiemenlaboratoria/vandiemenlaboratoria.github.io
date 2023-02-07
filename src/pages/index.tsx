import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mailtTo = "mailto:vandiemenlaboratoria@proton.me";
  return (
    <>
      <Head>
        <title>Van Diemen Laboratoria UG</title>
        <meta name="description" content="Business card for Van Diemen Laboratoria UG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>       
          <a
            href="https://vandiemenlaboratoria.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Van Diemen Laboratoria-4.png"
              alt="Van Diemen Laboratoria"
              className={styles.image}
              // width={720}
              // height={720}
              fill={true}
              priority
            />
          </a>
        </div>

        <div className={styles.grid}>
          <a
            href={mailtTo}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Infrastructure<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Responsible, principled, &amp; secure blockchain node operations since 2019
            </p>
          </a>

          <a
            href={mailtTo}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Architecture<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Full stack and web3 solution design with twenty years experience in distributed systems
            </p>
          </a>

          <a
            href={mailtTo}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Economic Design <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Experienced tokenomics methodologies and design
            </p>
          </a>

          <a
            href={mailtTo}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Smart Contracts <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Masters in complex Solidity and EVM development
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
