import './ContralPanelToggle.scss'

import { useDispatch } from "react-redux";
import { closeControlPanel, openControlPanel } from "../../../state-management/slices/ControlPanelSlice";

export type ControlPanelProps = {
    showOpen: boolean;
}

export const ControlPanelToggle = (props: ControlPanelProps) => {
    let dispatch = useDispatch();
    if(props.showOpen) {
        return (
            <div className="controlsBoxBorderOpen">
                <button className='controlsBoxInner' onClick={() => dispatch(closeControlPanel())}>Animation Panel</button>
            </div>
        );
    } else {
        return (
            <div className="controlsBoxBorderClosed">
                <button className='controlsBoxInner' onClick={() => dispatch(openControlPanel())}>Animation Panel</button>
            </div>
        );
    }
}