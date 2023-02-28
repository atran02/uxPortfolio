import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function CardItem({text,link,hText,pType,imgCard})
{
    return <a href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className={styles.icard}>
                <Image src={imgCard} width={300} height={300} className={styles.cardImg}/>
                <div className={styles.cardInfo}>
                    <h3>{hText}</h3>
                    <h4>{pType}</h4>
                    <p>{text}</p>
                </div>
                
            </div>
        </a>
        
}