import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import NavBar from '@/comps/navBar'
import Footer from '@/comps/footer'
import CardItem from '@/comps/btnCard'
import SideNav from '@/comps/sideNav'
import Divider from '@/comps/divider'

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

      <SideNav/>

      <main className={poppins.className}>
        <div className={styles.bgLight}>

         <div className={styles.bgM}>
          {/* <br/> */}

          {/* <Image src={'/images/c1.svg'} width={250} height={250}/> */}

          <Image id='aCloud' src={'/images/a_cloud.gif'} alt={"angelyne custom illustration on a cloud"} width={400} height={400}/>

          <span className={styles.hText}>
            <h1 className='regHead'>Hi, I&apos;m Angelyne Tran!</h1>
            <br/>
            <p className={styles.pCont}>I&apos;m a creative, curious and empathetic 
              UI/UX designer based in Vancouver. I find 
              joy in utilizing my design skills to create
              an intuitive and accessible experience.
            </p>
          </span>
         </div>

          <div className={styles.itemCont}>
            <Divider hText={'UI/UX Projects'}/>

            <CardItem imgCard={'/assetImages/ltm_1.png'}
              link={'http://angelynetran.com/portfolio/localtome/'}
              hText={"LocalToMe"}
              pType={"UI/UX Design"}
              text={"LocalToMe is a web app that locates and provides low-income families/individuals with free & accessible food resources near their area within their budgets."}
              btnText={"View Case Study"}
            />
            <CardItem imgCard={'/assetImages/apprev.png'}
              link={'http://angelynetran.com/portfolio/aquapal/'}
              hText={"Aqua Pal"}
              pType={"UI/UX Design"}
              text={"AquaPal is a web application that helps you reach your water goals, to aid you reaching your goals, you can choose between having a monkey or an otter as a pet."}
              btnText={"View Project"}
            />
            <CardItem imgCard={'/assetImages/teokprev.png'}
              link={'http://angelynetran.com/portfolio/teoktome/'}
              hText={"Teok To Me"}
              pType={"UI/UX Design"}
              text={"Teok To Me is a mental app which helps people release stress and monitor their mental health. The main purpose of the app is for users to practice breathing exercises for relaxation."}
              btnText={"View Case Study"}
            />
          </div>

          <Divider hText={'Contact'}/>

        </div>
      </main>
      <Footer/>
    </>
  )
}
