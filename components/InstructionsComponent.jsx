import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";



export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					bit<span>N</span>byte
				</h1>
				<p>
					Get started by editing this page
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"#"}
				>
					<div className={styles.button}>
						<p>NFT Gallary</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"#"}
				>
					<div className={styles.button}>
						<p>Mint - coming soon (core apes)</p>
					</div>
				</a>								
			</div>

			<div>
				<p>Made with 💙 by the AlchemyFam</p>
			</div>
		</div>
	);
}
