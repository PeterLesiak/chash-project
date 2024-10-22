import { Code, makeScene2D, Node } from '@motion-canvas/2d';
import {
    all,
    beginSlide,
    createRef,
    DEFAULT,
    easeOutSine,
    waitFor,
    zoomInTransition,
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
class Base {

    protected string chatGPTKey = "...";

}`}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontWeight={600}
            />

            <AccessSummary
                ref={summary}
                modifier={'protected'}
                accessibility={[true, true, false]}
                position={[430, 0]}
                opacity={0}
            />
        </Node>,
    );

    yield* zoomInTransition(code().cacheBBox(), 1.5);

    yield* waitFor(1.5);

    yield* code().code.insert(
        [4, 1],
        `\


class Derived extends Base {

    public string Expose() {
        return chatGPTKey;
    }

}`,
        0.9,
    );

    yield* beginSlide('Protected | Code');

    yield* waitFor(1.5);

    yield* all(code().fontSize(33, 0.8, easeOutSine), code().position.x(-500, 0.8, easeOutSine));

    yield* summary().opacity(1, 0.8, easeOutSine);

    yield* waitFor(1.5);

    yield* code().selection(code().findAllRanges('protected'), 0.6);

    yield* waitFor(0.6);

    yield* summary().turnOn();

    yield* waitFor(1.5);

    yield* code().selection(DEFAULT, 0.6);

    yield* beginSlide('Protected | Summary');
});
