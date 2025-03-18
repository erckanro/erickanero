import styles from "../styles/page.module.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./FooterSection";

export default function MyApp() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
