import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Button from './button'
import { Poppins } from '@next/font/google'
import Link from 'next/link'

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900']
  })
  

export default function NavBar()
{
    return <>
    <div className={poppins.className}>
        <div className={styles.nav}>
            <Link href='/'>          
                <Image src='/images/a_monkeyLogo.png' alt={"monkey banana image"} width={56} height={56}/>
            </Link> 
            <div className={styles.navAlign}>
                <div className={styles.navItem1}>
                    <Link href='/'
                    >Home</Link>
                    <Link href='http://angelynetran.com/portfolio/'
                    >Projects</Link>
                    <Link href='http://angelynetran.com/about/'
                    >About</Link>
                </div>
                <Button text={"Resume"} link={"http://angelynetran.com/wp-content/uploads/2023/02/angelyneTran_resume.pdf"}/>
            </div>
        </div>
        </div>
    </>
}