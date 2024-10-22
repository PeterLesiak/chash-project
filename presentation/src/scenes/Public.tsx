import { Code, makeScene2D, Node } from '@motion-canvas/2d';
import {
    beginSlide,
    chain,
    createRef,
    DEFAULT,
    Direction,
    easeOutSine,
    slideTransition,
    waitFor,
} from '@motion-canvas/core';

import { AccessSummary } from '../components/AccessSummary';

export default makeScene2D(function* (view) {
    view.fill('#121212');

    const code = createRef<Code>();
    const summary = createRef<AccessSummary>();

    view.add(
        <Node>
            <Code
                ref={code}
                code={`\
class Vector2 {

    public double X = 21;

}`}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontWeight={600}
            />

            <AccessSummary
                ref={summary}
                modifier={'public'}
                accessibility={[true, true, true]}
                position={[430, 0]}
                opacity={0}
            />
        </Node>,
    );

    yield* slideTransition(Direction.Bottom, 1.5);

    yield* waitFor(1.5);

    yield* chain(
        code().code.insert([4, 0], `    public double Y = 37;\n\n`, 0.5),
        code().code.insert(
            [6, 0],
            `\
    public double Sum() {
        return X + Y;
    }\n\n`,
            0.6,
        ),
    );

    yield* beginSlide('Public | Code');

    yield* waitFor(1.5);

    yield* code().position.x(-520, 0.8, easeOutSine);

    yield* summary().opacity(1, 0.8, easeOutSine);

    yield* waitFor(1.5);

    yield* code().selection(code().findAllRanges('public'), 0.6);

    yield* waitFor(0.6);

    yield* summary().turnOn();

    yield* waitFor(1.5);

    yield* code().selection(DEFAULT, 0.6);

    yield* beginSlide('Public | Summary');
});
