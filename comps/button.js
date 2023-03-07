import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Button({text,link})
{
    return <Link href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <button className={styles.mBtn}>
                {text}
            </button>
        </Link>
        
}