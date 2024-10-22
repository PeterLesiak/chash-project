import { makeScene2D } from '@motion-canvas/2d';
import { beginSlide, Direction, slideTransition, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fill('#121212');

    yield* slideTransition(Direction.Top, 1.5);

    yield* waitFor(2.5);

    yield* view.fill('white', 2.5);

    yield* beginSlide('Ending');
});
