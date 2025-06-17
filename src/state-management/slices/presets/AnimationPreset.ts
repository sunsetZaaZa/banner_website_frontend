import { AnimationBoundingShape, MovementDirection } from "../../models/AnimationStats";
import { CharacterStats, TypeOfCharacter } from "../../models/CharacterStats";
import { PageAnimationInfluence } from "../../models/PageAnimationInfluence";
import { PageBreakdown } from "../../models/RuntimeAnimationMetadata";
import { UIBranches } from "../../models/UIBranches";

export interface AnimationState {
    identifier: number;
    runtimeMetadata: Map<UIBranches, PageBreakdown[]>;
    characterTracker: Map<UIBranches, CharacterStats[]>;
    previousPage: UIBranches;
    currentPage: UIBranches;
    pageInfluences:  Map<UIBranches, PageAnimationInfluence | null>;
}

export const initialState: AnimationState = {
    identifier: -1,
    runtimeMetadata: new Map<UIBranches, PageBreakdown[]>([
        [
            UIBranches.homepage, [
                {
                    type: TypeOfCharacter.leftBlimp | TypeOfCharacter.rightBlimp, howMany: 3
                }, 
                {
                    type: TypeOfCharacter.crunch, howMany: 1
                }
            ],
        ],
        [
            UIBranches.mobileapps, []
        ],
        [
            UIBranches.contactEstafette, []
        ],
        [
            UIBranches.consulting, []
        ],
        [
            UIBranches.libraries, [
                {
                    type: TypeOfCharacter.leftBlimp | TypeOfCharacter.rightBlimp, howMany: 3
                }, 
                {
                    type: TypeOfCharacter.crunch, howMany: 1
                }
            ],
        ],
        [
            UIBranches.cciea, [
                {
                    type: TypeOfCharacter.leftBlimp | TypeOfCharacter.rightBlimp, howMany: 3
                }, 
                {
                    type: TypeOfCharacter.crunch, howMany: 1
                }
            ],
        ],
        [
            UIBranches.contact, []
        ],
        [
            UIBranches.userprivacy, []
        ],
    ]),
    characterTracker: new Map<UIBranches, CharacterStats[]>([
        [
            UIBranches.homepage, [
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
        ],
        [
            UIBranches.mobileapps, []  
        ],
        [
            UIBranches.contactEstafette, []
        ],
        [
            UIBranches.consulting, []
        ],
        [
            UIBranches.libraries, [
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
        ],
        [
            UIBranches.cciea, [
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
        ],
        [
            UIBranches.contact, [
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
        ],
        [
            UIBranches.userprivacy, []
        ]
    ]),
    previousPage: UIBranches.homepage,
    currentPage: UIBranches.homepage,
    pageInfluences: new Map<UIBranches, PageAnimationInfluence | null>([
        [UIBranches.homepage, PageAnimationInfluence.linear],
        [UIBranches.mobileapps, null],
        [UIBranches.contactEstafette, null],
        [UIBranches.consulting, null],
        [UIBranches.libraries, PageAnimationInfluence.linear],
        [UIBranches.cciea, PageAnimationInfluence.linear],
        [UIBranches.contact, null],
        [UIBranches.userprivacy, null],
    ])
}