import { Link, useNavigate } from "react-router";
import './scss/SoftwareLibraries.scss';

import type { RootState } from '../state-management/store';
import { useSelector } from 'react-redux';

import NavGuide from "../components/NavGuide/NavGuide";
import { BlimpCrunchCords } from '../components/BlimpsNCrunch/BlimpCrunchCords';
import { BlimpsNCrunch } from '../components/BlimpsNCrunch/BlimpsNCrunch';
import { UIBranches } from '../state-management/models/UIBranches';

import { TypeOfCharacter } from '../state-management/models/CharacterStats';
import { BlimpDirectedRight } from '../components/Blimp/BlimpDirectedRight';
import { BlimpDirectedLeft } from '../components/Blimp/BlimpDirectedLeft';
import { Crunch } from "../components/Crunch/Crunch";

export default function SoftwareLibraries() {
    let charStats = useSelector((state: RootState) => state.animation);
    let navigate = useNavigate();

    let autoGen = [];
    if(charStats != undefined) {
        charStats.characterTracker.get(UIBranches.libraries).forEach((entry, index) => {
            if(entry.type == TypeOfCharacter.rightBlimp) {
                autoGen.push(<BlimpDirectedRight key={index} currentX={entry.currentX} currentY={entry.currentY}></BlimpDirectedRight>)
            } else if(entry.type == TypeOfCharacter.leftBlimp) {
                autoGen.push(<BlimpDirectedLeft key={index} currentX={entry.currentX} currentY={entry.currentY}></BlimpDirectedLeft>)
            } else if(entry.type == TypeOfCharacter.crunch) {
                autoGen.push(<Crunch key={index} currentX={entry.currentX} currentY={entry.currentY}></Crunch>)
            }
        }); 
    } else {
        const details : BlimpCrunchCords = {
            crunchY: 30,
            crunchX: 78,
            blimpNormY: 20,
            blimpNormX: 120,
            blimpNormAnotherY: 15,
            blimpNormAnotherX: 420,
            blimpReversedY: 250,
            blimpReversedX: 20
        }
        autoGen.push(<BlimpsNCrunch {...details}></BlimpsNCrunch>)
    }

    return (
        <span>
            <NavGuide></NavGuide>
            {autoGen}
            <div className="mobileAppsMassMover">                
                <span style={{display: 'flex', flexDirection: 'column'}}>
                    <span>
                        <Link style={{ marginLeft: '40px', fontSize: '20px' }} className='btn_cceia' to="/software_libraries/cceia">CCEIA</Link>
                        <span style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', cursor: 'pointer' }} onClick={() => { navigate("/software_libraries/cceia") }}>
                            <span style={{fontSize: '14px'}}>Contacts</span>
                            <span style={{fontSize: '14px'}}>Calendar</span>
                            <span style={{fontSize: '14px'}}>Events</span>
                            <span style={{fontSize: '14px'}}>iOS & Android</span>
                        </span>
                    </span>
                </span>
            </div>
        </span>
    )
}