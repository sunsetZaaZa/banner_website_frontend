import './scss/MobileApps.scss';

import { Link, useNavigate } from "react-router";
import NavGuide from "../components/NavGuide/NavGuide";

export default function MobileApps() {
    const navigate = useNavigate();
    return (
        <span>
            <NavGuide></NavGuide>
            <div className="mobileAppsMassMover">                
                <span className="flex-grid">
                    <img style={{height: '130px', width: '200px'}} src="/mobileapps/contact_estafette/icon_260_260.png" onClick={() => { navigate("/mobileapps/contactestafette"); }}/>
                    <span><Link style={{ textDecoration: 'none', color: 'inherit', marginLeft: '37.5px', width: '55' }} to="/mobileapps/contactestafette">Contact Estafette</Link></span>
                </span>
            </div>
        </span>
    )
}