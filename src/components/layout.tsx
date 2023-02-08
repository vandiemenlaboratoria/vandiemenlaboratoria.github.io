import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Impressum from "./impressum";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
	const [showImpressum, setShowImpressum] = useState(false);

	function toggleImpressum() {
		setShowImpressum(!showImpressum);
	}

	return (
		<>
			<Head>
				<title>Van Diemen Laboratoria UG</title>
				<meta
					name="description"
					content="Business card for Van Diemen Laboratoria UG"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.center}>
					<Link href="https://vandiemenlaboratoria.xyz">
						<Image
							src="/Van Diemen Laboratoria-5.png"
							alt="Van Diemen Laboratoria"
							className={styles.image}
							fill={true}
							priority
						/>
					</Link>
				</div>
				{children}
				<footer className={styles.footer}>
					<button className={styles.button} onClick={toggleImpressum}>
						<h2 className={inter.className}>
							Impressum
							<span>
								{showImpressum ? <>&lt;-</> : <>-&gt;</>}
							</span>
						</h2>
					</button>
					<br />
					<div style={{ display: showImpressum ? "block" : "none" }}>
						<Impressum></Impressum>
					</div>
				</footer>
			</main>
		</>
	);
}
