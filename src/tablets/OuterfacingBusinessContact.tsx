import './scss/OuterfacingBusinessContact.scss';

import type { RootState } from '../state-management/store';
import { useSelector } from 'react-redux';

import NavGuide from "../components/NavGuide/NavGuide";
import { BlimpCrunchCords } from '../components/BlimpsNCrunch/BlimpCrunchCords';
import { BlimpsNCrunch } from '../components/BlimpsNCrunch/BlimpsNCrunch';
import { UIBranch } from '../state-management/models/UIBranch';

import { TypeOfCharacter } from '../state-management/models/CharacterStats';
import { BlimpDirectedRight } from '../components/Blimp/BlimpDirectedRight';
import { BlimpDirectedLeft } from '../components/Blimp/BlimpDirectedLeft';
import { Crunch } from '../components/Crunch/Crunch';


export default function OuterfacingBusinessContact() {
    let charStats = useSelector((state: RootState) => state.animation);

    let autoGen = [];
    if(charStats != undefined) {
        charStats.characterTracker.forEach((charTrackEntry, idx) => {
            if(charTrackEntry.page == UIBranch.contact) {
                charTrackEntry.chars.forEach((entry, index) => {
                    if(entry.type == TypeOfCharacter.rightBlimp) {
                        autoGen.push(<BlimpDirectedRight key={index} currentX={entry.currentX} currentY={entry.currentY}></BlimpDirectedRight>)
                    } else if(entry.type == TypeOfCharacter.leftBlimp) {
                        autoGen.push(<BlimpDirectedLeft key={index} currentX={entry.currentX} currentY={entry.currentY}></BlimpDirectedLeft>)
                    } else if(entry.type == TypeOfCharacter.crunch) {
                        autoGen.push(<Crunch key={index} currentX={entry.currentX} currentY={entry.currentY}></Crunch>)
                    }
                });
            }
        });
    } else {
        const details : BlimpCrunchCords = {
            crunchY: undefined,
            crunchX: undefined,
            blimpNormY: 20,
            blimpNormX: 120,
            blimpNormAnotherY: 15,
            blimpNormAnotherX: 420,
            blimpReversedY: 400,
            blimpReversedX: 60
        }
        autoGen.push(<BlimpsNCrunch {...details}></BlimpsNCrunch>)
    }

    return (
        <span>
            <NavGuide></NavGuide>
            {autoGen}
            <div className="massMover">              
                <div className="contactMover">
                    <span style={{display: 'flex', flexDirection: 'column', alignContent: 'flex-start'}}> 
                        <span style={{fontSize: '16px', color: "grey"}}>Email Address</span>
                        <span style={{paddingLeft: '10px'}}>contact@wickerblocks.com</span> 
                    </span>            
                </div>
                <div className="addressMover">
                    <span style={{display: 'flex', flexDirection: 'column'}}> 
                        <span>Wickerblocks</span>
                        <span style={{marginTop: '-2px', paddingLeft: '10px'}}>Memphis, TN</span>
                    </span>
                </div>
            </div>
        </span>
    )
}