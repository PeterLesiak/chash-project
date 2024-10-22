import { Code, makeScene2D, Node } from '@motion-canvas/2d';
import {
    all,
    beginSlide,
    createRef,
    DEFAULT,
    easeOutSine,
    waitFor,
    zoomOutTransition,
} from '@motion-canvas/core';

import { AccessSummary } from '../components/AccessSummary';

export default makeScene2D(function* (view) {
    view.fill('#121212');

    const root = createRef<Node>();
    const code = createRef<Code>();
    const summary = createRef<AccessSummary>();

    view.add(
        <Node ref={root}>
            <Code
                ref={code}
                code={`\
class KeepPrivate {

    private string phone = "667 584 036";

    private string email = "hotdelfinek69@yahoo.pl";

    private string address = "52.21566045341923, 21.017910271221744";

}`}
                fontSize={40}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontWeight={600}
            />

            <AccessSummary
                ref={summary}
                modifier={'private'}
                accessibility={[true, false, false]}
                position={[430, 0]}
                opacity={0}
            />
        </Node>,
    );

    yield* zoomOutTransition(root().cacheBBox(), 1.5);

    yield* beginSlide('Private | Code');

    yield* waitFor(2.5);

    yield* all(
        code().fontSize(25, 0.8, easeOutSine),
        code().position([-500, -50], 0.8, easeOutSine),
    );

    yield* code().rotation(-55, 0.8, easeOutSine);

    yield* summary().opacity(1, 0.8, easeOutSine);

    yield* waitFor(1.5);

    yield* code().selection(code().findAllRanges('private'), 0.6);

    yield* waitFor(0.6);

    yield* summary().turnOn();

    yield* waitFor(1.5);

    yield* code().selection(DEFAULT, 0.6);

    yield* all(
        root().rotation(55, 0.8, easeOutSine),
        root().position([200, 400], 0.8, easeOutSine),
        code().fontSize(40, 0.8, easeOutSine),
    );

    yield* beginSlide('Private | Summary');
});
