import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Button({text,link})
{
    return <a href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <button className={styles.mBtn}>
                {text}
            </button>
        </a>
        
}