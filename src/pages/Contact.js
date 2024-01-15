// 1. Importing Components
import {Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logos from '../../src/components/Logos'
import NavBar from '../../src/components/Navbar'

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faPerson, faSignOut } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
      <div> 
      <main>
        <div className='wrapper'> 
          <div className='container'>
            <div className='formContainer'>
              <Logos />
              <div className='row'>
                    Please complete the following form to request a new pin
              </div>
              <div className='buttonsContainer'>
                <form> 
                     {/* First Name */}  
                     <div className='row'>
                        <FontAwesomeIcon icon={faPerson} className='icon' />
                        <input id="fname" type='text' required placeholder='Please enter your first name' />           
                    </div>
                   
                    {/* Email Address */}  
                    <div className='row'>
                        <FontAwesomeIcon icon={faPerson} className='icon' />
                        <input id="lname" type='text' required placeholder='Please enter your last name' />           
                    </div> {/* Email Address */}  
                    <div className='row'>
                        <FontAwesomeIcon icon={faKey} className='icon' />
                        <input id="email" type='email' required placeholder='Please enter your email address' />           
                    </div>
                   
                    <div className='row'>
                    <Link to="/contactus" className="btn btn-primary block">
                        Email us to request a new PIN
                    </Link>
                    </div>
                    </form>
                </div>
                 
          </div>
          </div>
        </div>
      </main>
      </div>
    )
}