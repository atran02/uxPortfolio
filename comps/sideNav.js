import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Button from './button'
import { Poppins } from '@next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900']
  })
  

export default function SideNav()
{
    const [menu,menuOpen] = useState(false);
    return <>
    <div className={poppins.className}>
        <div className={styles.sNav}>
            
            <Image id='aCloud' src={'/images/m_cloud.gif'} width={112} height={112}
                onMouseEnter={()=>{menuOpen(true)}}
                // onClick={()=>{menuOpen(true)}}
            />

            {menu && <div className={styles.oMenu} onMouseLeave={()=>{menuOpen(false)}}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='http://angelynetran.com/portfolio/'>Project</Link></li>
                    <li><Link href='/'>About</Link></li>
                </ul>

                <div className={styles.popIcon}>
                    <h3>Back to Top</h3>
                    {/* <Image src={'/assetIcons/arrowGrey.svg'} alt={"arrow icon"} width={30} height={30}/> */}
                </div>
            </div>}
         
            {/* <a href='/'>          
                <img src='/images/a_monkeyLogo.png' alt={"monkey banana image"} width={56} height={56}/>
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
            </div> */}
        </div>
        </div>
    </>
}