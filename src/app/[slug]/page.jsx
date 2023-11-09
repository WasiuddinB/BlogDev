import React from 'react'
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu"
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet c</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />        
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>User Name: Lorem Ipsum</span>
                    <span className={styles.date}> 09.11.2022</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsa animi sunt, dolores obcaecati repellendus culpa accusantium repellat perferendis vel est nihil beatae hic voluptatem minus molestiae impedit. Reprehenderit, sint.</p>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsa animi sunt, dolores obcaecati repellendus culpa accusantium repellat perferendis vel est nihil beatae hic voluptatem minus molestiae impedit. Reprehenderit, sint.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsa animi sunt, dolores obcaecati repellendus culpa accusantium repellat perferendis vel est nihil beatae hic voluptatem minus molestiae impedit. Reprehenderit, sint.</p>
            </div>
            <div className={styles.comment}>
              <Comments/>
            </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage
