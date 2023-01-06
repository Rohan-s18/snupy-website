//  Author: Rohan Singh
//  1/5/2023
//  Web page for Operaiting Systems Course Page


//  Imports
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../Components/Footer'
import Lab from '../Components/Lab'


//  Export Function
export default function OperaitingSystems(){

    return(

        <div className={styles.container}>

          <Head>
            <title>Introduction to Operating Systems</title>
          </Head>

          <main className={styles.main}>

            <h1 className={styles.title}>Introduction to Operating Systems</h1>
          
            <Lab />

            <Footer />
        
          </main>

        </div>

    )

}