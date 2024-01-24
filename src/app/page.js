import styles from "./page.module.css";
import Hero from "@/component/Hero/Hero";
import Services from "@/component/Services/Services";
import Category from "@/component/Category/Category";
import FeaturedProducts from "@/component/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Category />  
      <FeaturedProducts/>
    </main>
  );
}
