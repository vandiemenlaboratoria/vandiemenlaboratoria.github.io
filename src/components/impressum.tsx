import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Impressum() {
	return (
		<div className={styles.card}>
			<div className={inter.className}>
				<p>Disclosures in accordance with § 5 TMG</p>
				<br />

				<p>Van Diemen Laboratoria UG (haftungsbeschränkt)</p>
				<p>Chausseestraße 122</p>
				<p>Berlin, 10115, Berlin</p>
				<br />

				<p>
					<Link href="mailto:vandiemenlaboratoria@proton.me">
						vandiemenlaboratoria@proton.me
					</Link>
				</p>
				<p>
					<Link href="https://www.vandiemenlaboratoria.xyz">
						https://www.vandiemenlaboratoria.xyz
					</Link>
				</p>
				<br />
				<p>Registry: Amtsgericht Charlottenburg</p>
				<p>Register number: HRB 236839 B</p>
				<br />

				<p>VAT ID number in accordance with § 27 UStG: DE355718042</p>
			</div>
		</div>
	);
}
