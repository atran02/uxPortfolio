import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import Link from 'next/link'

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900']
  })
  

export default function Footer()
{
  return <>
    <div className={poppins.className}>
      <div className={styles.footCont}>
        
        <h1 style={{color:"white"}}>Lets Connect!</h1>
        <hr/>
        <p>Check out my links below!!</p>
        <div className={styles.footImg}>
          <Link href={'https://www.linkedin.com/in/angelyne-tran-b75857245/'}>
            <Image src={'/assetIcons/linkedin.png'} alt={"Linkedin"} width={56} height={56}/>
          </Link>

          <Link href={'https://github.com/atran02/'}>
            <Image src={'/assetIcons/github.png'} alt={"Github"} width={56} height={56}/>
          </Link>
          
          <Link href={'mailto:angelynentran@gmail.com'}>
            <Image src={'/assetIcons/email.png'} alt={"mail"} width={56} height={56}/>
          </Link>
        </div>

        <div className={styles.footer}>
          <div className={styles.footLinks}>
            <Link href="/">
              Home
            </Link>
            <Link href="/">
              Projects
            </Link>
            <Link href="/">
              About
            </Link>
          </div>
          <Link
            href="https://github.com/atran02/"
            target="_blank"
            rel="noopener noreferrer"
          >
          {/* © */}
            <p>Angelyne Tran © 2023</p>
          </Link>
        </div>

      </div>
    </div>
  </>
}