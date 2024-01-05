import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import doc from '../assets/doc.png';
import '../components/Acceuil.css';
import dentiste from '../assets/dentiste.jpg';
import user from '../assets/user.svg';
const Acceuil = () => {
    return (
    <>
        <div className='header'> 
             <ul className='nav justify-content-center' id='nav'>
                <img src={doc} alt="logo" className='img-fluid float-top' id='logo'/>
                <li className='nav-link active'  id='nav'>Acceuil</li>
                <li className='nav-link' id='nav'>Services</li>
                <li className='nav-link' id='nav'>Emploi du temps</li>
            </ul>
    

            <div id='deux'>
                    <h5 id='inscription'>S'inscrire</h5>
                    <img src={user} alt="user" className='img-fluid' id='sary-user' />   
            </div> 
        </div>
        <div id='contenu'>

            <div id='soratra2'>
                        <h2 className='display-6' id='soratra1'>BIENVENUE DANS <br/><p className='doc'>e-DOC</p></h2>
                        <p className='font-weight-light' id='soratra'>Le site de sante que vous avez besoin pour prendre <br/> soin
                                                                        de votre dentset gerer votre temps</p>
            </div> 
                    
                     <img src={dentiste} alt="dentiste" className='img-fluid' id='dentiste'/>
        </div>


        <div className='triangle'>    
        </div> 
                 
                 <button type='button' className='btn btn-success btn-lg' id='bouton'>Demarrer</button> 

                    
                    
    </>                    

    
                 
    );
};

export default Acceuil;