import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Button from './button'

export default function NavBar()
{
    return <>
        <div className={styles.nav}>
            <a href='/'>          
                <img src='/images/a_monkeylogo.png' width={56} height={56}/>
            </a> 
            <div className={styles.navAlign}>
                <div className={styles.navItem1}>
                    <a href='http://angelynetran.com/portfolio/'
                        target="_blank"
                    >Works</a>
                    <a href='http://angelynetran.com/about/'
                        target="_blank"
                    >About</a>
                </div>
                <Button text={"Resume"} link={"http://angelynetran.com/wp-content/uploads/2023/02/angelyneTran_resume.pdf"}/>
            </div>
        </div>
    </>
}