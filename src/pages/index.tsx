import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const mailtTo = "mailto:vandiemenlaboratoria@proton.me";

	return (
		<Layout>
			<div className={styles.grid}>
				<a
					href={mailtTo}
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Infrastructure <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Responsible, principled, &amp; secure blockchain node
						operations since 2019
					</p>
				</a>

				<a
					href={mailtTo}
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Architecture <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Full stack and web3 solution design with twenty years
						experience in distributed systems
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
						Mastery of complex Solidity and EVM development
					</p>
				</a>
			</div>
		</Layout>
	);
}
