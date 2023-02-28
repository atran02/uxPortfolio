import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import NavBar from '@/comps/navBar'
import Footer from '@/comps/footer'
import CardItem from '@/comps/btnCard'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Angelyne Tran | UI/UX</title>
        <meta name="description" content="inspirational bananas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/a_monkeyLogo.png" />
      </Head>

      <NavBar/>

      <main className={poppins.className}>
        <div className={styles.bgLight}>

         <div className={styles.bgM}>
          {/* <br/> */}

          {/* <Image src={'/images/c1.svg'} width={250} height={250}/> */}

          <Image src={'/images/a_ded.png'} width={250} height={250}/>

          <span className={styles.hText}>
            <h1 className='regHead'>Hi, I’m Angelyne Tran!</h1>
            <br/>
            <p className={styles.pCont}>I'm a creative, curious and empathetic 
              UI/UX designer based in Vancouver. I find 
              joy in utilizing my design skills to create
              an intuitive and accessible experience.
            </p>
          </span>
         </div>

          <div className={styles.itemCont}>
            <div id='divider'>
              <h1>UI/UX Projects</h1>
              <hr/>
            </div>
            <CardItem imgCard={'/assetImages/ltm_1.png'}
              hText={"LocalToMe"}
              pType={"UI/UX Design"}
              text={"potatos depression meiw fhhfjhgkj jfshfjksh fksahhcna d hoa akjh fhajkf akh hire me pls"}
            />
            <CardItem imgCard={'/assetImages/ltm_1.png'}
              hText={"LocalToMe"}
              pType={"UI/UX Design"}
              text={"potatos depression meiw fhhfjhgkj jfshfjksh fksahhcna d hoa akjh fhajkf akh hire me pls"}
            />
          </div>

        </div>
      </main>
      <Footer/>
    </>
  )
}
