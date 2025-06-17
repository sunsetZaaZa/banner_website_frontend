import { CharacterCords } from "../CharacterCords";

export const BlimpDirectedRight = (prop: CharacterCords) => {
    return (
        <span style={{position: 'absolute', top: prop.currentY, left: prop.currentX}}>
            <img style={{height: '56px', width: '112px'}} src="/blimp_cover_norm_web.png"/>
        </span>
    )
};