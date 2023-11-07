import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
            <Link href="/" className={styles.item}>
              { withImage &&( <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
              </div>)}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.travel}`}>
                  Travel
                </span>
                <h3 className={styles.postTitle}>
                  lorem ipsum dolor sit amet adiscufs slite
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Wasi Uddin - </span>
                  <span className={styles.date}>10.11.2022</span>
                </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
              { withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
              </div>)}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.culture}`}>
                  Culture
                </span>
                <h3 className={styles.postTitle}>
                  lorem ipsum dolor sit amet adiscufs slite
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Wasi Uddin - </span>
                  <span className={styles.date}>10.11.2022</span>
                </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
              {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
              </div>)}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.coding}`}>
                  Coding
                </span>
                <h3 className={styles.postTitle}>
                  lorem ipsum dolor sit amet adiscufs slite
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Wasi Uddin - </span>
                  <span className={styles.date}>10.11.2022</span>
                </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
              {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
              </div>)}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.fashion}`}>
                  Fashion
                </span>
                <h3 className={styles.postTitle}>
                  lorem ipsum dolor sit amet adiscufs slite
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Wasi Uddin - </span>
                  <span className={styles.date}>10.11.2022</span>
                </div>
              </div>
            </Link>
          </div>
      
    
  )
}

export default MenuPosts
