import React from "react";
import Image from "next/image";
import styles from "./footer.module.css"
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="Wasi Uddin" width={50} height={50} />
            </div>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolore possimus neque, animi dolor aspernatur ea vitae esse aliquam. Cumque officiis reprehenderit commodi tempora a incidunt molestias expedita unde provident.
            </p>
            <div className={styles.icons}>
              <Image src="/facebook.png" alt="" width={18} height={18}/>
              <Image src="/instagram.png" alt="" width={18} height={18}/>
              <Image src="/tiktok.png" alt="" width={18} height={18}/>
              <Image src="/youtube.png" alt="" width={18} height={18}/>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <span className={styles.listTitle}>Links</span>
              <Link href="/">Homepage</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Blog</Link>
            </div>
            <div className={styles.list}>
              <span className={styles.listTitle}>Tags</span>
              <Link href="/">Style</Link>
              <Link href="/">Fashion</Link>
              <Link href="/">Culture</Link>
              <Link href="/">Coding</Link>
            </div>
            <div className={styles.list}>
              <span className={styles.listTitle}>Social</span>
              <Link href="/">Facebook</Link>
              <Link href="/">Tiktok</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Youtube</Link>
            </div>
          </div>
        </div>
      );
}
 
export default Footer;