import { Link } from "react-router";
import './ContactEstafette.scss';
import NavGuide from "../../components/NavGuide/NavGuide";

export default function ContactEstafette() {
    return (
        <>
            <NavGuide></NavGuide>
            <div className="contactEstafetteMassMover">
                <Link style={{ textDecoration: 'none' }} to='/user_privacy'>User Privacy</Link>
            </div>
        </>
    )
}