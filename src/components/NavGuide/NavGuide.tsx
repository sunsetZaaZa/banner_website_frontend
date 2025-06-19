import './NavGuide.scss';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router';
import { RootState } from '../../state-management/store';
import { Dispatch } from '@reduxjs/toolkit';

import { nextFrame, updateToken } from '../../state-management/slices/AnimationSlice';
import { UIBranch } from '../../state-management/models/UIBranch';
import { CharacterStats } from '../../state-management/models/CharacterStats';
import { CharacterTracker } from '../../state-management/slices/presets/AnimationPreset';

export default function NavGuide() {
    let charStats = useSelector((state: RootState) => state.animation);
    const dispatch = useDispatch();

    return (
        <ul className="navGuideMover">
            <li className="NavTopic">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranch.homepage) }} style={{ fontFamily: 'ShareTech', textDecoration: 'none', color: 'inherit', fontSize: '18px', marginLeft: '-6px' }} to="/">wickerblocks</Link>
            </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranch.mobileapps) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/mobileapps">mobile apps</Link>
                </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranch.consulting) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/consulting">consulting</Link>
            </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranch.libraries) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/software_libaries">libraries</Link>
            </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranch.contact) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/about">contact</Link>
            </li>
        </ul>
    )
}

const EngineCycle = (dispatch: Dispatch, currentPage: UIBranch, currentIdentifier: number, uiBranch: UIBranch) => {
    if(currentPage == uiBranch && currentIdentifier != -1) { //animation should still be running until complete / no change in character stats

    } else if(currentPage == uiBranch && currentIdentifier== -1) { 
        let identifier: number = setInterval(() => {
            let charTrackers: CharacterTracker[] = useSelector((state: RootState) => state.animation.characterTracker);
            let index: number = charTrackers.findIndex(entry => entry.page == uiBranch)
            let charStats: CharacterStats[] = charTrackers[index].chars;

            let next_game_tick: DOMHighResTimeStamp = performance.now()

            let updatedChars: CharacterStats[];
            while() { //implement your frame pacing here
                updatedChars = engineUpdate(charStats, uiBranch)
            }

            //implement your frame pacing here as well
            let forwardResult: EngineForwardResult = engineForward(updatedChars, uiBranch);

            if(forwardResult.moveComplete) {
                clearInterval(identifier);
            }

            dispatch(nextFrame({uiBranch: currentPage, charStats: updatedChars}));
        });
        dispatch(updateToken({token: identifier, currentPage: uiBranch}));
    } else if(currentPage != uiBranch && currentIdentifier != -1) {
        clearInterval(currentIdentifier);
        dispatch(updateToken({token:-1, currentPage: undefined}));

        let identifier: number = setInterval(() => {
            let charTrackers: CharacterTracker[] = useSelector((state: RootState) => state.animation.characterTracker);
            let index: number = charTrackers.findIndex(entry => entry.page == uiBranch)
            let charStats: CharacterStats[] = charTrackers[index].chars;

            let next_game_tick: DOMHighResTimeStamp = performance.now()

            let updatedChars: CharacterStats[];
            while() { //implement your frame pacing here
                updatedChars = engineUpdate(charStats, uiBranch)
            }

            //implement your frame pacing here as well
            let forwardResult: EngineForwardResult = engineForward(updatedChars, uiBranch);

            if(forwardResult.moveComplete) {
                clearInterval(identifier);
            }

            dispatch(nextFrame({uiBranch: currentPage, charStats: updatedChars}));

        });
        dispatch(updateToken({token: identifier, currentPage: uiBranch}));

    } else if(currentPage != uiBranch && currentIdentifier == -1) {

        let identifier: number = setInterval(() => {
            let charTrackers: CharacterTracker[] = useSelector((state: RootState) => state.animation.characterTracker);
            let index: number = charTrackers.findIndex(entry => entry.page == uiBranch)
            let charStats: CharacterStats[] = charTrackers[index].chars;

            let next_game_tick: DOMHighResTimeStamp = performance.now()

            let updatedChars: CharacterStats[];
            while() { //implement your frame pacing here
                updatedChars = engineUpdate(charStats, uiBranch)

            }

            //implement your frame pacing here as well
            let forwardResult: EngineForwardResult = engineForward(updatedChars, uiBranch);

            if(forwardResult.moveComplete) {
                clearInterval(identifier);
            }

            dispatch(nextFrame({uiBranch: currentPage, charStats: updatedChars}));
        });
        dispatch(updateToken({token: identifier, currentPage: uiBranch}));
    }
}

export type EngineForwardResult = {
    moveComplete: boolean,
    charStats: CharacterStats[],
}

const engineUpdate = (charStats: CharacterStats[], _page: UIBranch) => {
    return charStats;
}

const engineForward = (charStats: CharacterStats[], _page: UIBranch): EngineForwardResult => {
    let updatedCharStats = charStats;
    let animationDone = true;

    return {moveComplete: animationDone, charStats: updatedCharStats};
}