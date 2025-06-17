import { CharacterCords } from "../CharacterCords";

export const SpeakingCrunch = (prop: CharacterCords) => {
    return (
        <span className='tooltip' style={{position: 'absolute', top: prop.currentY, left: prop.currentX}}>
            <img style={{height: '56px', width: '56px'}} src="/crunch_norm_right_web.png"/>
            <span className='tooltipText' style={{fontFamily: 'CorneritaRegular'}}>
                All in the pursuit to befriend doggos
            </span>
        </span>
    )
};