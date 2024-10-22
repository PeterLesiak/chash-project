import { Code, Layout, Line, lines, makeScene2D, Node, Rect, Txt, word } from '@motion-canvas/2d';
import {
    all,
    beginSlide,
    createRef,
    DEFAULT,
    Direction,
    easeOutQuint,
    slideTransition,
    waitFor,
} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fill('#121212');

    const getterText = createRef<Txt>();
    const setterText = createRef<Txt>();
    const getterOutline = createRef<Line>();
    const setterOutline = createRef<Line>();
    const getter = createRef<Line>();
    const setter = createRef<Line>();

    const code = createRef<Code>();
    const sandbox = createRef<Layout>();

    view.add(
        <Node>
            <Txt
                ref={getterText}
                position={[320, 140]}
                fill={'white'}
                opacity={0}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontWeight={600}
            >
                get
            </Txt>

            <Line
                ref={getterOutline}
                points={[
                    [-515, 207],
                    [515, 207],
                ]}
                stroke={'#4c4c4c'}
                lineWidth={16}
                end={0}
            />

            <Line
                ref={getter}
                points={[
                    [-515, 207],
                    [515, 207],
                ]}
                stroke={'lightseagreen'}
                lineWidth={16}
                end={0}
            />

            <Txt
                ref={setterText}
                position={[-320, 390]}
                fill={'white'}
                opacity={0}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontWeight={600}
            >
                set
            </Txt>

            <Line
                ref={setterOutline}
                points={[
                    [-515, 340],
                    [515, 340],
                ]}
                stroke={'#4c4c4c'}
                lineWidth={16}
                end={0}
            />

            <Line
                ref={setter}
                points={[
                    [-515, 340],
                    [515, 340],
                ]}
                stroke={'tomato'}
                lineWidth={16}
                end={0}
            />

            <Code
                ref={code}
                code={`\
class Storage {
    public string Property { get; set; } = "https://tiny.pl/9w4rc";
}

class Backend extends Storage {}

class User {
    Backend backend = new();
}`}
                position={[0, -200]}
                opacity={0}
                fontSize={40}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontWeight={600}
            />

            <Layout
                ref={sandbox}
                layout
                position={[0, 275]}
                width={'100%'}
                justifyContent={'space-around'}
                opacity={0}
            >
                <Rect
                    layout
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    padding={30}
                    radius={25}
                    size={250}
                    fill={'#eecd8b'}
                >
                    <Txt fontFamily={'JetBrainsMono Nerd Font'} fontWeight={900}>
                        Storage
                    </Txt>

                    <Rect
                        layout
                        alignItems={'center'}
                        justifyContent={'center'}
                        radius={25}
                        marginBottom={20}
                        width={220}
                        height={80}
                        fill={'#eaad61'}
                    >
                        <Txt fontSize={35} fontFamily={'JetBrainsMono Nerd Font'} fontWeight={700}>
                            Property
                        </Txt>
                    </Rect>
                </Rect>

                <Rect
                    layout
                    justifyContent={'center'}
                    alignItems={'center'}
                    radius={25}
                    size={250}
                    fill={'#ea6161'}
                >
                    <Txt fontSize={50} fontFamily={'JetBrainsMono Nerd Font'} fontWeight={900}>
                        Backend
                    </Txt>
                </Rect>

                <Rect
                    layout
                    justifyContent={'center'}
                    alignItems={'center'}
                    radius={25}
                    size={250}
                    fill={'#cce0ac'}
                >
                    <Txt fontSize={60} fontFamily={'JetBrainsMono Nerd Font'} fontWeight={900}>
                        User
                    </Txt>
                </Rect>
            </Layout>
        </Node>,
    );

    yield* slideTransition(Direction.Right, 1.5);

    yield* code().opacity(1, 1, easeOutQuint);

    yield* sandbox().opacity(1, 1, easeOutQuint);

    yield* all(getterOutline().end(1, 1, easeOutQuint), setterOutline().end(1, 1, easeOutQuint));

    yield* waitFor(1.5);

    yield* all(
        getterText().opacity(1, 1.5, easeOutQuint),
        setterText().opacity(1, 1.5, easeOutQuint),
    );

    yield* beginSlide('Properties | Start');

    yield* all(getterText().opacity(0, 1, easeOutQuint), setterText().opacity(0, 1, easeOutQuint));

    yield* code().selection(word(1, 0, 40), 0.6, easeOutQuint);

    yield* all(getter().end(1, 2, easeOutQuint), setter().end(1, 2, easeOutQuint));

    yield* beginSlide('Properties | All Public');

    yield* code().selection(DEFAULT, 0.6, easeOutQuint);

    yield* all(code().code.insert([1, 34], `protected `, 0.6), code().fontSize(35, 0.6));

    yield* waitFor(1.5);

    yield* code().selection(word(1, 0, 50), 0.6, easeOutQuint);

    yield* setter().end(0.5, 2, easeOutQuint);

    yield* beginSlide('Properties | Public Protected');

    yield* code().selection(DEFAULT, 0.6, easeOutQuint);

    yield* all(
        code().code.replace(word(1, 4, 6), `private`, 0.6),
        code().code.replace(word(1, 34, 10), `public `, 0.6),
    );

    yield* code().fontSize(38, 0.6);

    yield* waitFor(1.5);

    yield* code().selection(word(1, 0, 48), 0.6, easeOutQuint);

    yield* all(getter().end(0, 2, easeOutQuint), setter().end(1, 2, easeOutQuint));

    yield* beginSlide('Properties | Private Public');

    yield* code().selection(DEFAULT, 0.6, easeOutQuint);

    yield* all(
        getter().opacity(0, 1, easeOutQuint),
        getterOutline().opacity(0, 1, easeOutQuint),
        setter().opacity(0, 1, easeOutQuint),
        setterOutline().opacity(0, 1, easeOutQuint),
        sandbox().opacity(0, 1, easeOutQuint),
    );

    yield* all(
        code().position([-50, 140], 1.5, easeOutQuint),
        code().scale(1.3, 1.5, easeOutQuint),
    );

    yield* waitFor(0.75);

    yield* all(
        code().code.replace(word(1, 4, 7), `public`, 1.2),
        code().code.replace(
            word(1, 29),
            `\


        private get { return otherProperty }

        set {
            if (value == "") {
                throw new Exception("Can not be empty!");
            }

            otherProperty = value;
        }

    } // no initializer
`,
            1.2,
        ),
    );

    yield* waitFor(1.5);

    yield* code().selection(lines(3), 0.6, easeOutQuint);

    yield* beginSlide('Properties | Custom Getter');

    yield* code().selection(lines(5, 11), 0.6, easeOutQuint);

    yield* beginSlide('Properties | Custom Setter');

    yield* code().selection(lines(13), 0.6, easeOutQuint);

    yield* beginSlide('Properties | No Initializer');
});
