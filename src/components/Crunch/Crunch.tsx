import { CharacterCords } from "../CharacterCords";

export const Crunch = (prop: CharacterCords) => {
    return (
        <span style={{position: 'absolute', top: prop.currentY, left: prop.currentX}}>
            <img style={{height: '56px', width: '56px'}} src="/crunch_norm_right_web.png"/>
        </span>
    )
};