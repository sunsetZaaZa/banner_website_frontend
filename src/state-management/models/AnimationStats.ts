export type AnimationStats = {
    xInterval: number;
    yInterval: number;
    directionOne: MovementDirection,
    directionTwo: MovementDirection,
    boundingBox: AnimationBoundingBox,
    rotateDegree: number,
    xRate: number;
    yRate: number;
}

export type AnimationBoundingBox = {
    xBound: number;
    yBound: number;
    xOrigin: number;
    yOrigin: number;
    shape: AnimationBoundingShape
}

export enum AnimationBoundingShape {
    triangle = 2,
    square = 3,
    rectangle = 4,
    trapizod = 5,
    hexagon = 6
}

export enum MovementDirection {
    up = 1,
    down = 2,
    right = 3,
    left = 4,
}