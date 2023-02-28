import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function CardItem({text,link,hText,pType,imgCard,btnText})
{
    return <a href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className={styles.icard}>
                <Image src={imgCard} width={300} height={300} className={styles.cardImg}/>
                <div className={styles.cardInfo}>
                    <h3 style={{color:'var(--monkey1)', fontSize:'2rem', fontWeight:'500'}}>{hText}</h3>
                    <h4 style={{color:'var(--monkey2)', fontSize:'1rem', fontWeight:'500'}}>{pType}</h4>
                    <p style={{fontSize:'1rem', fontWeight:'500'}}>{text}</p>
                    <div className={styles.popIcon}>
                        <p>{btnText}</p>
                        <Image src={'/assetIcons/arrowGrey.svg'} width={30} height={30}/>
                    </div>
                </div>
                
            </div>
        </a>
        
}