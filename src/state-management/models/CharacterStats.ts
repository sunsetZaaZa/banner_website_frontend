import { AnimationStats } from "./AnimationStats";

export enum TypeOfCharacter {
    crunch = 1,
    speakingCrunch = 2,
    rightBlimp = 3,
    leftBlimp = 4
}

export type CharacterStats = {
    prefix: String | null;
    type: TypeOfCharacter;
    identifier: String | null;
    index: number;
    attachedTo: String | null;
    currentX: number;
    currentY: number;
    preCalculated: boolean;
    movement: AnimationStats | null;
    updated: boolean;
    active: boolean;
    toRender: boolean;
}