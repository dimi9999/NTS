import EWRLogo from '../assets/images/EWR_Logo_CMYK_Black-v2.png';
import NTSLogo from '../assets/images/EWRNeedToSell2.png';
import { AuthData } from "../auth/AuthWrapper";

export default function Logos() {
    const { user, logout } = AuthData();
    
    return (
        <div className='logo'>
            <img src={EWRLogo} alt="Need to Sell" />
        </div>
    )
}