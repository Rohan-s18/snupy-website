//  Author: Rohan Singh
//  6/1/2023
//  REact Component for SNUPy Homepage


//  Imports
import styles from '../styles/Home.module.css'
import Link from 'next/link'


//  Export function
export default function Homepage(){

    return(
        <>

            <div className={styles.jocs_home}>

                <h2>
                    The SNUPy Project
                </h2>

                <br></br>

                <p>

                    SNUPy is a tech startup co-founded by Rachel Tjarksen and Rohan Singh. We specialize in providing customized 
                    Natural Language Processing models using Transformer Models and other Machine Learning solutions. 
        

                </p>


                <br></br> <br></br>
                    
                <h2>
                    SNUPy Library
                </h2>

                <br></br>

                <p>

                    The SNUPy Python Library is an open source Machine Learning Toolkit that provides essential NLP and ML tools for 
                    developers to work with and to make their own more complex ML and NLP models. 

                </p>

                <br></br> <br></br>

                <h2>
                    Community Work
                </h2>

                <br></br>

                <p>

                    We believe that software, like most forms of knowledge, must be freely accessible for everyone and should not be locked
                    in a corporate codebase. So we plan on making our models publicly accessible on our github repository

                    <br></br>
                    <br></br>



                </p>

            </div>
        
        </>
    )

}