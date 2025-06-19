import { AnimationBoundingShape, MovementDirection } from "../../models/AnimationStats";
import { CharacterStats, TypeOfCharacter } from "../../models/CharacterStats";
import { PageAnimationInfluence } from "../../models/PageAnimationInfluence";
import { PageBreakdown } from "../../models/RuntimeAnimationMetadata";
import { UIBranch } from "../../models/UIBranch";

export type RuntimeMetadata = {
    page: UIBranch,
    breakdown: PageBreakdown[]
}

export type CharacterTracker = {
    page: UIBranch,
    chars: CharacterStats[]
}

export type PageInfluence = {
    page: UIBranch,
    chars: PageAnimationInfluence | null
}

export type AnimationState = {
    identifier: number;
    runtimeMetadata: RuntimeMetadata[];
    characterTracker: CharacterTracker[];
    previousPage: UIBranch;
    currentPage: UIBranch;
    pageInfluences: PageInfluence[];
} 

export const initialState: AnimationState = {
    identifier: -1,
    runtimeMetadata: [
        {
            page: UIBranch.homepage,
            breakdown: [
                {
                    type: TypeOfCharacter.leftBlimp | TypeOfCharacter.rightBlimp, howMany: 3
                }, 
                {
                    type: TypeOfCharacter.crunch, howMany: 1
                }
            ]
        },
        {
            page: UIBranch.mobileapps,
            breakdown: []
        },
        {
            page: UIBranch.contactEstafette,
            breakdown: []
        },
        {
            page: UIBranch.consulting,
            breakdown: []
        },
        {
            page: UIBranch.libraries,
            breakdown: []
        },
        {
            page: UIBranch.cciea,
            breakdown: []
        },
        {
            page: UIBranch.contact,
            breakdown: []
        }
    ],
    characterTracker: [ 
        {
            page: UIBranch.homepage,
            chars: [
                {
                    prefix: null, type: TypeOfCharacter.speakingCrunch, identifier: 'crunch', index: 1, attachedTo: 'blimp1', 
                    currentX: 30, currentY: 50, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 1, attachedTo: 'crunch1', 
                    currentX: 70, currentY: 50, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.leftBlimp, identifier: 'blimp', index: 1, attachedTo: null, 
                    currentX: 88, currentY: 464, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 1, attachedTo: null, 
                    currentX: 400, currentY: 45, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                }
            ]
        }, 
        {
            page: UIBranch.mobileapps,
            chars: []
        },
        {
            page: UIBranch.contactEstafette,
            chars: []
        },
        {
            page: UIBranch.contactEstafette,
            chars: []
        },
        {
            page: UIBranch.libraries,
            chars: [
                {
                    prefix: null, type: TypeOfCharacter.crunch, identifier: 'crunch', index: 1, attachedTo: 'blimp1', 
                    currentX: 30, currentY: 78, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.leftBlimp, identifier: 'blimp', index: 1, attachedTo: 'crunch1', 
                    currentX: 20, currentY: 120, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 2, attachedTo: null, 
                    currentX: 15, currentY: 420, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 3, attachedTo: null, 
                    currentX: 250, currentY: 20, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                }
            ] 
        },
        {
            page: UIBranch.cciea,
            chars: [
                {
                    prefix: null, type: TypeOfCharacter.crunch, identifier: 'crunch', index: 1, attachedTo: 'blimp1', 
                    currentX: 30, currentY: 78, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 1, attachedTo: 'crunch1', 
                    currentX: 20, currentY: 120, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 2, attachedTo: null, 
                    currentX: 15, currentY: 420, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 3, attachedTo: null, 
                    currentX: 400, currentY: 10, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                }
            ]  
        },
        {
            page: UIBranch.contact,
            chars: [
                {
                    prefix: null, type: TypeOfCharacter.leftBlimp | TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 1, attachedTo: 'crunch1', 
                    currentX: 20, currentY: 100, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.rightBlimp, identifier: 'blimp', index: 2, attachedTo: null, 
                    currentX: 15, currentY: 420, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                },
                {
                    prefix: null, type: TypeOfCharacter.leftBlimp, identifier: 'blimp', index: 3, attachedTo: null, 
                    currentX: 400, currentY: 60, preCalculated: false, movement: { xInterval: 10, yInterval: 10, directionOne: MovementDirection.right, directionTwo: MovementDirection.right, 
                                                                                 boundingBox: { xBound: 20, yBound: 20, xOrigin: 0, yOrigin: 0, shape: AnimationBoundingShape.square }, 
                                                                                 rotateDegree: 0, xRate: 1, yRate: 1 }, 
                    updated: false, active: true, toRender: true
                }
            ]
        },
        {
            page: UIBranch.userprivacy,
            chars: []
        }
    ],
    previousPage: UIBranch.homepage,
    currentPage: UIBranch.homepage,
    pageInfluences: [
        {
            page: UIBranch.homepage,
            chars: PageAnimationInfluence.linear
        },
        {
            page: UIBranch.mobileapps,
            chars: null
        },
        {
            page: UIBranch.contactEstafette,
            chars: null
        },
        {
            page: UIBranch.consulting,
            chars: null
        },
        {
            page: UIBranch.libraries,
            chars: PageAnimationInfluence.linear
        },
        {
            page: UIBranch.cciea,
            chars: PageAnimationInfluence.linear
        },
        {
            page: UIBranch.contact,
            chars: null
        },
        {
            page: UIBranch.userprivacy,
            chars: null
        }
    ]
}