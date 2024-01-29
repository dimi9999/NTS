import EWRLogo from '../assets/images/EWR_Logo_CMYK_Black.png';
import NTSLogo from '../assets/images/EWRNeedToSell2.png';

export default function Logos() {
    return (
        <div className='logo'>
            <img src={EWRLogo} alt="Need to Sell" />
            <img src={NTSLogo} alt="Need to Sell" />
        </div>
    )
}