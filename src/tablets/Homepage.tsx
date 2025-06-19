import './scss/Homepage.scss'

import type { RootState } from '../state-management/store';
import { useSelector } from 'react-redux';

import NavGuide from "../components/NavGuide/NavGuide";
import { BlimpCrunchCords } from '../components/BlimpsNCrunch/BlimpCrunchCords';
import { BlimpsNCrunch } from '../components/BlimpsNCrunch/BlimpsNCrunch';
import { UIBranch } from '../state-management/models/UIBranch';

import { TypeOfCharacter } from '../state-management/models/CharacterStats';
import {SpeakingCrunch} from '../components/Crunch/SpeakingCrunch';
import { BlimpDirectedRight } from '../components/Blimp/BlimpDirectedRight';
import { BlimpDirectedLeft } from '../components/Blimp/BlimpDirectedLeft';
import { ControlPanelToggle } from '../components/ControlPanel/ControlPanelToggle/ControlPanelToggle';


export default function HomePage() {
    let charStats = useSelector((state: RootState) => state.animation);
    let controlPanel = useSelector((state: RootState) => state.controlPanel);

    let autoGen = [];
    if(charStats != undefined) {
        charStats.characterTracker.forEach((charTrackEntry, idx) => {
            if(charTrackEntry.page == UIBranch.homepage) {
                charTrackEntry.chars.forEach((entry, index) => {
                    if(entry.type == TypeOfCharacter.rightBlimp) {
                        autoGen.push(<BlimpDirectedRight key={index} currentX={entry.currentX} currentY={entry.currentY}></BlimpDirectedRight>)
                    } else if(entry.type == TypeOfCharacter.leftBlimp) {
                        autoGen.push(<BlimpDirectedLeft key={index} currentX={entry.currentX} currentY={entry.currentY}></BlimpDirectedLeft>)
                    } else if(entry.type == TypeOfCharacter.speakingCrunch) {
                        autoGen.push(<SpeakingCrunch key={index} currentX={entry.currentX} currentY={entry.currentY}></SpeakingCrunch>)
                    }
                });
            }
        });
    } else {
        const details : BlimpCrunchCords = {
            crunchY: 30,
            crunchX: 50,
            blimpNormY: 70,
            blimpNormX: 50,
            blimpNormAnotherY: 88,
            blimpNormAnotherX: 464,
            blimpReversedY: 400,
            blimpReversedX: 45
        }
        autoGen.push(<BlimpsNCrunch {...details}></BlimpsNCrunch>)
    }

    return (
        <span>
            <span style={{marginTop: '5px'}}>
                <ControlPanelToggle showOpen={controlPanel.openControlPanel}></ControlPanelToggle>
            </span>

            <NavGuide></NavGuide>
            {autoGen}
            <span style={{display: 'inline-block', margin: '60px 0px 0px 170px'}}>
                <span style={{display: 'flex', flexDirection: 'column', margin: '40px 0px 0px 15px'}}>
                    <span style={{display: 'flex', flexDirection: 'column',  marginTop: '25px'}}>
                        <span style={{display: 'inline-block',}}>Feel free to wander around toward the libraries as the blimps do</span>
                        <span style={{display: 'inline-block', marginTop: '5px'}}>Could your ideas become even more potent?</span>
                        <span style={{display: 'inline-block', marginTop: '5px'}}>1.1.0 of CCEIA is stable and ready for iOS and Android</span>
                    </span>

                     <span style={{display: 'flex', flexDirection: 'column', marginTop: '25px'}}>
                        <span style={{display: 'inline-block', marginTop: '5px'}}>Crunch knows a few paths to a mobile app that creates a backup of a contact</span>
                        <span style={{display: 'inline-block', marginTop: '2px'}}>with privacy and security as key design elements</span>
                    </span>

                    <span style={{display: 'flex', flexDirection: 'column', marginTop: '25px'}}>
                        <span style={{display: 'inline-block'}}>1.0.2 of Contact Estafette will be out for iOS and Android in July</span>
                        <span style={{display: 'inline-block'}}>Includes the following new features</span>
                        <span style={{display: 'flex', flexDirection: 'column', marginTop: '2px', marginLeft: '12px'}}>
                            <span style={{display: 'inline-block', color: '#CDA832'}}>View entire Contact prior to Import</span>
                            <span style={{display: 'inline-block'}}>Toggle wether or not to import a Contact after seeing its contents</span>
                            <span style={{display: 'inline-block', color: '#CDA832'}}>Turn auto aggregation On and Off prior to importing Contacts</span>
                            <span style={{display: 'inline-block'}}>See details of a Contact from the Address Book view area</span>
                            <span style={{display: 'inline-block', color: '#CDA832'}}>View a Contact while its in the Export area</span>
                            <span style={{display: 'inline-block'}}>Double tap a Contact in the Export screen to cycle through its details</span>
                            <span style={{display: 'inline-block', color: '#CDA832'}}>A reworked UI of color scheme, user controls, and display of information</span>
                        </span>
                    </span>
                </span>
            </span>
        </span>
    )
}