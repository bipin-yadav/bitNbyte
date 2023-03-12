import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import NftGallery from "../components/nftGallery.jsx"

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
      <InstructionsComponent></InstructionsComponent>
      <NftGallery></NftGallery>
      </main>
    </div>
  );
}
