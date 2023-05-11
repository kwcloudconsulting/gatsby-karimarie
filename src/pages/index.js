import React from "react";
//import { Link } from 'gatsby'
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Cloud Computing & web developer based in Houston.</p>
        </div>
        <StaticImage src="../images/banner.png" alt="site banner" />
      </section>
    </Layout>
  );
}
