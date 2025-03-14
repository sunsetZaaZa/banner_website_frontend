import { Link } from "react-router";
import NavGuide from "../components/NavGuide/NavGuide";
import './scss/MobileApps.scss';

export default function MobileApps() {
    return (
        <>
            <NavGuide></NavGuide>
            <div className="mobileAppsMassMover">
                <Link style={{ textDecoration: 'none' }} to="/mobileapps/contactestafette">Contact Estafette</Link>
            </div>
        </>
    )
}