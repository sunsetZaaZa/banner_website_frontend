import { BlimpCrunchCords } from "./BlimpCrunchCords";

import { BlimpDirectedLeft } from "../Blimp/BlimpDirectedLeft";
import { BlimpDirectedRight } from "../Blimp/BlimpDirectedRight";
import { Crunch } from "../Crunch/Crunch";

export const BlimpsNCrunch = (component: BlimpCrunchCords) => {
    let autoGen = [];

    if(component.crunchX != undefined && component.crunchY != undefined) {
        autoGen.push(<Crunch currentX={component.crunchX} currentY={component.crunchY}></Crunch>)
    }
    if(component.blimpNormX != undefined && component.blimpNormY != undefined) {
        autoGen.push(<BlimpDirectedRight currentX={component.blimpNormX} currentY={component.blimpNormY}></BlimpDirectedRight>)
    }
    if(component.blimpNormAnotherX != undefined && component.blimpNormAnotherY != undefined) {
        autoGen.push(<BlimpDirectedRight currentX={component.blimpNormAnotherX} currentY={component.blimpNormAnotherY}></BlimpDirectedRight>)
    }
    if(component.blimpReversedX != undefined && component.blimpReversedY!= undefined) {
        autoGen.push(<BlimpDirectedLeft currentX={component.blimpReversedX} currentY={component.blimpReversedY}></BlimpDirectedLeft>)
    }
    
    return (
        <span>
            {autoGen}
        </span>
    )
};