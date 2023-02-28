import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer()
{
    return <>
        <div className={styles.footer}>
        <a
            href="https://github.com/atran02/"
            target="_blank"
            rel="noopener noreferrer"
          >
          {/* © */}
          <p>Angelyne Tran © 2023</p>
          </a>
        </div>
    </>
}