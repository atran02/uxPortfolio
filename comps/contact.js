import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import Link from 'next/link'

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900']
  })
  

export default function Contact()
{
  return <>
    <div className={poppins.className}>
      
    </div>
  </>
}