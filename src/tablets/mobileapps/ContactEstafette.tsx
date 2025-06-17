import { Link } from "react-router";
import './ContactEstafette.scss';
import NavGuide from "../../components/NavGuide/NavGuide";

export default function ContactEstafette() {
    return (
        <span>
            <NavGuide></NavGuide>
            <div className="contactEstafettePrivacyNotice">
                <Link style={{ textDecoration: 'none', color: '#bda79e' }} to='/user_privacy'>User Privacy</Link>
            </div>
            <div className="contactEstafetteMassMover">
                <div style={{marginLeft: '-5px'}}>
                    <span style={{marginTop: '-50px', display: 'inline-grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr', rowGap: '10px'}}>
                        <img style={{marginLeft: '-50px', height: '130px', width: '200px'}} src="/mobileapps/contact_estafette/icon_260_260.png"/>
                        <span style={{marginTop: '25px', display: 'grid'}}>
                            <a href="https://apps.apple.com/us/app/contact-estafette/id6743372609"><img style={{height: '22px', width: '22px', marginRight: '10px'}} src="/iso_web_icon.png"/></a>
                            <a href="https://play.google.com/store/apps/details?id=com.wickerblocks.contactestafette"><img style={{height: '22px', width: '22px'}} src="/android_web_icon.png"/></a>
                        </span>
                    </span>

                    <div style={{marginLeft: '-32px', marginTop: '-30px'}}>
                        <span style={{display: 'block', marginTop: '7px', color: '#fffade'}}>Features</span>
                        <span style={{display: 'block', marginLeft: '-7px', fontSize: '12px'}}>
                            <div style={{color: '#fffade'}}>Onboard a securable Contact container to the address book</div>
                            <div style={{color: '#fffade'}}>Offload a securable Contact container to the device file-system</div>
                            <span style={{display: 'block', marginLeft: '15px'}}>
                                <span style={{display: 'block', color: '#fffade'}}>Supports all fields of a contact</span>
                                <span style={{display: 'block', color: '#fffade'}}>Supports interacting with notes</span>
                                <span style={{display: 'block', color: '#fffade'}}>Supports the photo and thumbnail of a contact</span>
                            </span>

                            <div style={{marginTop: '7px', color: '#fffade'}}>Encryption Algorithms</div>
                            <span style={{display: 'block', marginLeft: '15px'}}>
                                <span style={{display: 'block', color: '#fffade'}}>AES-GCM</span>
                                <span style={{display: 'block', color: '#fffade'}}>XChaCha20</span>
                                <span style={{display: 'block', color: '#fffade'}}>ChaCha20</span>
                            </span>

                            <div style={{marginTop: '7px', color: '#fffade'}}>Compression Algorithms</div>
                            <span style={{display: 'block', marginLeft: '15px'}}>
                                <span style={{display: 'block', color: '#fffade'}}>Zstd</span>
                                <span style={{display: 'block', color: '#fffade'}}>XZ</span>
                                <span style={{display: 'block', color: '#fffade'}}>Zlib</span>
                            </span>
                        </span>

                        <span style={{display: 'block', marginTop: '17px', color: '#fffade'}}>Highlights</span>
                        <span style={{display: 'block', marginLeft: '-7px', fontSize: '12px'}}>
                            <span style={{display: 'block', color: '#fffade'}}>
                                <span style={{display: 'block', color: '#753a00'}}>An address book has limits</span>
                                <span style={{display: 'block', color: '#753a00', marginTop: '5px'}}>Move Contacts around to suit your storage strategy</span>
                                <span style={{display: 'block', marginLeft: '15px', width: '300px', wordWrap: 'break-word'}}>
                                    The resulting backup container / vCard can be moved off the device via the app provided by a cloud storage service or by connecting to your computer
                                </span>
                            </span>
                            <span style={{display: 'block', marginTop: '6px', color: '#fffade'}}>
                                The crpytography library used is open sourced on github: <a href="https://github.com/sunsetZaaZa/fluter_cryptography">fluter_cryptography</a>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </span>
    )
}