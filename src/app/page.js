import styles from "./page.module.css";
import Hero from "@/component/Hero/Hero";
import Services from "@/component/Services/Services";
import Category from "@/component/Category/Category";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Category />  
    </main>
  );
}
