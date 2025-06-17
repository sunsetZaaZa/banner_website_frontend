import './NavGuide.scss';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router';
import { RootState } from '../../state-management/store';
import { Dispatch } from '@reduxjs/toolkit';

import { nextFrame, updateToken } from '../../state-management/slices/AnimationSlice';
import { UIBranches } from '../../state-management/models/UIBranches';
import { CharacterStats } from '../../state-management/models/CharacterStats';

export default function NavGuide() {
    let charStats = useSelector((state: RootState) => state.animation);
    const dispatch = useDispatch();

    return (
        <ul className="navGuideMover">
            <li className="NavTopic">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranches.homepage) }} style={{ fontFamily: 'ShareTech', textDecoration: 'none', color: 'inherit', fontSize: '18px', marginLeft: '-6px' }} to="/">wickerblocks</Link>
            </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranches.mobileapps) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/mobileapps">mobile apps</Link>
                </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranches.consulting) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/consulting">consulting</Link>
            </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranches.libraries) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/software_libaries">libraries</Link>
            </li>
            <li className="NavEntry">
                <Link onClick={() => { EngineCycle(dispatch, charStats.currentPage, charStats.identifier, UIBranches.contact) }} style={{ textDecoration: 'none', color: 'inherit' }} to="/about">contact</Link>
            </li>
        </ul>
    )
}

const EngineCycle = (dispatch: Dispatch, currentPage: UIBranches, currentIdentifier: number, uiBranch: UIBranches) => {
    if(currentPage == uiBranch && currentIdentifier != -1) { //animation should still be running until complete / no change in character stats

    } else if(currentPage == uiBranch && currentIdentifier== -1) { 
        let identifier: number = setInterval(() => {
            let charStats: Map<UIBranches, CharacterStats[]> = useSelector((state: RootState) => state.animation.characterTracker);

            updatedChars = engineUpdate(charStats, uiBranch)

            let forwardResult: EngineForwardResult = engineForward(updatedChars, uiBranch);

            if(forwardResult.moveComplete) {
                clearInterval(identifier);
            }

            dispatch(nextFrame(updatedChars));
        });
        dispatch(updateToken({token: identifier, currentPage: uiBranch}));
    } else if(currentPage != uiBranch && currentIdentifier != -1) {
        clearInterval(currentIdentifier);
        dispatch(updateToken({token:-1, currentPage: undefined}));

        let identifier: number = setInterval(() => {
            let charStats: Map<UIBranches, CharacterStats[]> = useSelector((state: RootState) => state.animation.characterTracker);

            updatedChars = engineUpdate(charStats, uiBranch)

            let forwardResult: EngineForwardResult = engineForward(updatedChars, uiBranch);

            if(forwardResult.moveComplete) {
                clearInterval(identifier);
            }

            dispatch(nextFrame(updatedChars));
        });
        dispatch(updateToken({token: identifier, currentPage: uiBranch}));

    } else if(currentPage != uiBranch && currentIdentifier == -1) {

        let identifier: number = setInterval(() => {
            let charStats: Map<UIBranches, CharacterStats[]> = useSelector((state: RootState) => state.animation.characterTracker);

            updatedChars = engineUpdate(charStats, uiBranch)

            let forwardResult: EngineForwardResult = engineForward(updatedChars, uiBranch);

            if(forwardResult.moveComplete) {
                clearInterval(identifier);
            }

            dispatch(nextFrame(updatedChars));
        });
        dispatch(updateToken({token: identifier, currentPage: uiBranch}));
    }
}

export type EngineForwardResult = {
    moveComplete: boolean,
    charStats: Map<UIBranches, CharacterStats[]>,
}

const engineUpdate = (charStats: Map<UIBranches, CharacterStats[]>, _page: UIBranches) => {
    return charStats;
}

const engineForward = (charStats: Map<UIBranches, CharacterStats[]>, page: UIBranches): EngineForwardResult => {
    let updatedCharStats = charStats.get(page);
    let animationDone = true;


    return {moveComplete: animationDone, charStats: charStats.set(page, updatedCharStats)};
}