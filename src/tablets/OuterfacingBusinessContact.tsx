import NavGuide from "../components/NavGuide/NavGuide";
import './scss/OuterfacingBusinessContact.scss';

export default function OuterfacingBusinessContact() {
    return (
        <span>
            <NavGuide></NavGuide>
            <div className="massMover">              
                <div className="contactMover">
                contact@wickerblocks.com                
                </div>
                <div className="addressMover">
                    Wickerblocks LLC
                    <br></br>
                    Memphis, TN
                </div>
            </div>
        </span>
    )
}