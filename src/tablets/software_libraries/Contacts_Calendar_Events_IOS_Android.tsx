import './Contacts_Calendar_Events_iOS_Android.scss';

import type { RootState } from '../../state-management/store';
import { useSelector } from 'react-redux';

import NavGuide from "../../components/NavGuide/NavGuide";
import { BlimpCrunchCords } from '../../components/BlimpsNCrunch/BlimpCrunchCords';
import { BlimpsNCrunch } from '../../components/BlimpsNCrunch/BlimpsNCrunch';
import { UIBranch } from '../../state-management/models/UIBranch';

import { TypeOfCharacter } from '../../state-management/models/CharacterStats';
import { BlimpDirectedRight } from '../../components/Blimp/BlimpDirectedRight';
import { BlimpDirectedLeft } from '../../components/Blimp/BlimpDirectedLeft';
import { Crunch } from '../../components/Crunch/Crunch';

export default function CCEIA() {
    let charStats = useSelector((state: RootState) => state.animation);

    let autoGen = [];
    if(charStats != undefined) {
        charStats.characterTracker.forEach((charTrackEntry, idx) => {
            if(charTrackEntry.page == UIBranch.cciea) {
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
            crunchY: 30,
            crunchX: 78,
            blimpNormY: 20,
            blimpNormX: 120,
            blimpNormAnotherY: 15,
            blimpNormAnotherX: 420,
            blimpReversedY: 400,
            blimpReversedX: 10
        }
        autoGen.push(<BlimpsNCrunch {...details}></BlimpsNCrunch>)
    }


    return (
        <span>
            <NavGuide></NavGuide>
            {autoGen}
            <span style={{display: 'inline-block', marginTop: '50px', marginLeft: '200px'}}> 
                <span style={{display: 'inline-block', marginTop: '20px', marginLeft: '40px', marginBottom: '7px', fontSize: '18px'}}>For enquiries and sales reach out to contact@wickerblocks.com</span>

                <span style={{display: 'flex', flexDirection: 'row'}}>

                <span style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{display: 'flex', flexDirection: 'column', backgroundColor: 'black', padding: '7px 10px 12px 20px', borderRadius: '25px', minWidth: '400px', maxWidth: '600px'}}>
                        <span style={{fontSize: '18px'}}>Contacts</span>
                        <span style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '20px', marginBottom: '10px'}}>
                            <span style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <span>Data Structures to represent the entire Contact down to each sub component</span>
                                <span>at the platform level, as well as the outer library level</span>
                            </span>

                            <span style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '17px'}}>
                                <span style={{marginLeft: '7px'}}>&bull; Contact</span>
                                <span style={{marginLeft: '7px'}}>&bull; Name</span>
                                <span style={{marginLeft: '7px'}}>&bull; Phones</span>
                                <span style={{marginLeft: '7px'}}>&bull; Addresses</span>
                                <span style={{marginLeft: '7px'}}>&bull; Emails</span>
                                <span style={{marginLeft: '7px'}}>&bull; Organizations</span>
                                <span style={{marginLeft: '7px'}}>&bull; Events</span>
                                <span style={{marginLeft: '7px'}}>&bull; Websites</span>
                                <span style={{marginLeft: '7px'}}>&bull; Social Medias</span>
                                <span style={{marginLeft: '7px'}}>&bull; Notes</span>
                                <span style={{marginLeft: '7px'}}>&bull; Groups(iOS) & Labels(Android)</span>
                            </span>
                        </span>

                        <span style={{marginLeft: '20px'}}>
                            <span>Request all details of a contact or sub components in a single command</span>
                            <span style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                                <span>&bull; A single Contact by its unique identifier or a detail of its sub component</span>
                                <span>&bull; Reqeust all Contacts at once</span>
                                <span>&bull; Request a range of Contacts while using pagination</span>
                            </span>

                            <span style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                                <span>Capablities of updating details of a Contact</span>
                                <span style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                                    <span>&bull; Issue an update to a single Contact</span>
                                    <span>&bull; Update multiple Contacts via batches for increased throughput</span>
                                    <span style={{display: 'flex', flexDirection: 'column'}}>
                                        <span style={{display: 'flex', flexDirection: 'row'}}> 
                                            <span>Aggregation support provided by</span><span style={{marginTop: '4px', marginLeft: '5px', fontSize: '12px'}}>(can per turned on and off on a per Contact basis)</span>
                                        </span>
                                        <span style={{display: 'flex', flexDirection: 'column', marginLeft: '35px'}}>
                                            <span>iOS Plaform</span>
                                            <span>Android Platform</span>
                                            <span>Entire Contact or individual fields within a component via CCEIA Library</span>
                                            <span style={{marginLeft: '15px'}}>Supports Sync Adapters / Automated Backup scenarios</span>
                                        </span>
                                    </span>
                                </span>
                            </span>

                            <span style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                                <span>Insert a Contact to the Address Book / Contacts List</span>
                                <span style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                                    <span>&bull; Add a single Contact</span>
                                    <span>&bull; Insert multiple Contacts via batches for increased throughput</span>
                                    <span style={{display: 'flex', flexDirection: 'column'}}>
                                        <span style={{display: 'flex', flexDirection: 'row'}}> 
                                            <span>Aggregation support provided by</span><span style={{marginTop: '4px', marginLeft: '5px', fontSize: '12px'}}>(can per turned on and off on a per Contact basis)</span>
                                        </span>
                                        <span style={{display: 'flex', flexDirection: 'column', marginLeft: '35px'}}>
                                            <span>iOS Plaform</span>
                                            <span>Android Platform</span>
                                            <span>Entire Contact or individual fields within a component</span>
                                            <span style={{marginLeft: '10px'}}>Supports Sync Adapters / Automated Backup scenarios</span>
                                        </span>
                                    </span>
                                </span>
                            </span>

                            <span style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                                <span>Remove a Contact to the Address Book / Contacts List</span>
                                <span style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                                    <span>&bull; Delete a single Contact</span>
                                    <span>&bull; Delete multiple Contacts via batches for increased throughput</span>
                                </span>
                            </span>
                        </span>

                    </span>

                    <span style={{display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px', backgroundColor: 'black', padding: '7px 10px 7px 20px', borderRadius: '25px', minWidth: '400px', maxWidth: '600px'}}>
                        <span style={{fontSize: '18px'}}>Calendar</span>
                        <span style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '20px', marginBottom: '10px'}}>
                            <span style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <span>Data Structures to represent the entire Calendar down to each sub component</span>
                                <span>at the platform level, as well as the outer library level</span>
                            </span>
                            <span style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <span>&bull; Calendars</span>
                                <span>&bull; Events</span>
                                <span>&bull; Attendies / Participants</span>
                                <span>&bull; Reminders / Alerts</span>
                            </span>
                        </span>
                    </span>

                    <span style={{display: 'flex', flexDirection: 'column', marginBottom: '20px', backgroundColor: 'black', padding: '7px 10px 7px 20px', borderRadius: '25px', minWidth: '400px', maxWidth: '600px'}}>
                        <span style={{fontSize: '18px'}}>Events</span>
                        <span style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '20px', marginBottom: '10px'}}>
                            <span style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                                <span>Data Structures to represent the entire Event down to each sub component</span>
                                <span>at the platform level, as well as the outer library level</span>
                            </span>
                            <span style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <span>&bull; Events</span>
                                <span>&bull; Attendies / Participants</span>
                            </span>
                        </span>
                    </span>
                </span>

                    <span style={{display: 'flex', flexDirection: 'column', marginLeft: '7px', backgroundColor: 'black', padding: '7px 10px 7px 20px', borderRadius: '25px', width:'180px', height: '120px'}}>
                        <span>Platforms</span>
                        <span style={{display: 'flex', flexDirection: 'column', marginLeft: '7px'}}>
                            <span>&bull; Native iOS</span>
                            <span>&bull; Native Android</span>
                            <span>&bull; Flutter with iOS and</span>
                            <span style={{display: 'inline-block', margin: '0 0 0 10px'}}>Android</span>
                        </span>
                    </span>
                </span>

            </span>
        </span>
    )
}