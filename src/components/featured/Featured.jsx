import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>
            <b>Hey, Wasi Uddin!!</b> Discover more and more here.
          </h1>
          <div className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.postTitle}>Lorem ipsum dolor sit </h1>
              <p className={styles.postDesc}>
                amet consectetur adipisicing elit. Sed 
                repellat aliquam iusto. Rerum labore placeat atque ipsum aliquam. 
                Dignissimos voluptatibus quisquam blanditiis 
                quas nostrum eum excepturi iusto placeat i
                ncidunt nesciunt.
              </p>
              <button className={styles.button}>Read More</button>
            </div>
          </div>
        </div>
      );
}
 
export default Featured;