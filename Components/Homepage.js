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

                    The SNUPy project aims to bring Free Software to all users and developers through its open source 
                    software products. These products currently vary from Machine Learning to close-to-metal libraries.  
                     
                    


                    <br></br><br></br>

                    Specifically, free software means users have the four essential freedoms: (0) to run the program, 
                    (1) to study and change the program in source code form, (2) to redistribute exact copies, and 
                    (3) to distribute modified versions.  

                    <br></br><br></br>

                    The SNUPy Project also aims to create learning modules for upcoming software developers so that they can learn 
                    concepts in the field of Computer Science that most college programs and courses fail to do.  
                    
                    <br></br><br></br>

                </p>

                <br></br> <br></br>

                <h2>
                    The SNUPy Manifesto
                </h2>

                <br></br>

                <p>

                    Software, like most forms of knowledge, must be freely accessible for everyone and should not be locked
                    in a corporate codebase. 

                    <br></br>
                    <br></br>

                    The Collegiate monopoly over the field of Computer Science must end. Making students recite what Dijkstra's 
                    algorithm is, without knowing how to code it will only deteriorate the field.  

                    <br></br>
                    <br></br>


                </p>

            </div>
        
        </>
    )

}