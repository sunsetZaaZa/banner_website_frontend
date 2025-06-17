import NavGuide from "../components/NavGuide/NavGuide";
import './scss/UserPrivacy.scss';

export default function UserPrivacy() {
    return (
        <span>
            <NavGuide></NavGuide>
            <div className="userPrivacyMassMover">
                Wickerblocks LLC nor its applications use your information for resale. Applications do not inspect your device or permissioned areas for the purpose of collecting personal information. Zero information about or related to your account is mined with machine learning or AI, or put up for resale.
                <br></br>
                <div style={{paddingTop: '10px'}}>contact@wickerblocks.com </div>
            </div>
        </span>
    )
}