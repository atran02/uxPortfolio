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
        <div className={styles.footer}>
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
    </>
}