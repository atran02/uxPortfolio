import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Button from './button'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900']
  })
  

export default function Divider({hText})
{
    return <>
    <div className={poppins.className}>
        <div id='divider'>
              <h2>{hText}</h2>
              <hr/>
            </div>
        </div>
    </>
}