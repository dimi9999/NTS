// 1. Importing Components
import {Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logos from '../../src/components/Logos'
import NavBar from '../../src/components/Navbar'

// 2. Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faSignOut } from '@fortawesome/free-solid-svg-icons';

export default function Forgot() {
    return (
      <div> 
      <main>
        <div className='wrapper'> 
          <div className='container'>
            <div className='formContainer'>
              <Logos />
              <div className='row'>
                    Please enter your email address to generate a new pin
              </div>
              <div className='buttonsContainer'>
                <form> 
                {/* PIN Input */}  
                <div className='row'>
                        <FontAwesomeIcon icon={faKey} className='icon' />
                        <input type='email' required placeholder='Please enter your email address' />           
                    </div>
                    <div className='row'> 
                    <Link to="/success" className="btn btn-primary block">
                        Generate a new PIN
                    </Link>
                    </div>
                    <div className='row'>
                      <p className='seperator'> Or </p>
                    </div>
                    <div className='row'>
                    <Link to="/contact" className="btn btn-secondary block">
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