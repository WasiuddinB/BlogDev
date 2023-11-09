import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {

    const status="authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated"?(
      <div className={styles.write}>
        <textarea placeholder='Write A Comment...' className={styles.input}/>
        <button className={styles.button}>Send</button>
      </div>
      ) : (
      <Link href="/login"> Login to write a comment </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}> WASI UDDIN</span>
                    <span className={styles.date}> 09.11.2022</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iste error fugiat maiores rerum sit commodi repudiandae, ipsa, qui incidunt id voluptatem. Maxime, voluptatibus ex autem voluptas incidunt iure placeat?</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}> WASI UDDIN</span>
                    <span className={styles.date}> 09.11.2022</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iste error fugiat maiores rerum sit commodi repudiandae, ipsa, qui incidunt id voluptatem. Maxime, voluptatibus ex autem voluptas incidunt iure placeat?</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}> WASI UDDIN</span>
                    <span className={styles.date}> 09.11.2022</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iste error fugiat maiores rerum sit commodi repudiandae, ipsa, qui incidunt id voluptatem. Maxime, voluptatibus ex autem voluptas incidunt iure placeat?</p>
        </div>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}> WASI UDDIN</span>
                    <span className={styles.date}> 09.11.2022</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iste error fugiat maiores rerum sit commodi repudiandae, ipsa, qui incidunt id voluptatem. Maxime, voluptatibus ex autem voluptas incidunt iure placeat?</p>
        </div>
      </div>
    </div>
  )
}

export default Comments;
