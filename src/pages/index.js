import React from "react";
//import { Link } from 'gatsby'
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
//import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <>
        <section className={styles.header}>
          <div>
            <h2>
              Karimarie is{" "}
              <em>
                <strong>sleepy</strong>
              </em>
              .
            </h2>
          </div>
        </section>
      </>
    </Layout>
  );
}
