import { Layout, makeScene2D, Txt } from '@motion-canvas/2d';
import {
    beginSlide,
    createRef,
    delay,
    easeOutBounce,
    easeOutElastic,
    loop,
    useRandom,
} from '@motion-canvas/core';

import shader from '../shaders/mix.glsl';

export default makeScene2D(function* (view) {
    view.fill('#121212');

    const root = createRef<Layout>();

    const random = useRandom();

    view.add(
        <Layout ref={root} gap={30} alignItems={'center'} layout>
            <Txt
                fill={'white'}
                fontFamily={'JetBrainsMono Nerd Font'}
                fontSize={400}
                fontWeight={900}
            >
                C#
            </Txt>

            <Layout direction={'column'} layout>
                <Txt
                    fill={'white'}
                    fontFamily={'JetBrainsMono Nerd Font'}
                    fontSize={150}
                    fontWeight={900}
                >
                    Enkapsulacja
                </Txt>

                <Layout gap={40} justifyContent={'space-between'} layout>
                    <Txt
                        fill={'#ee6055'}
                        fontFamily={'JetBrainsMono Nerd Font'}
                        fontSize={130}
                        fontWeight={700}
                    >
                        Piotr
                    </Txt>

                    <Txt
                        fill={'#aaf683'}
                        fontFamily={'JetBrainsMono Nerd Font'}
                        fontSize={130}
                        fontWeight={700}
                    >
                        Lesiak
                    </Txt>
                </Layout>
            </Layout>
        </Layout>,
    );
    ``;

    view.shaders(shader);

    yield* loop(3, () =>
        delay(
            1.75,
            root()
                .scale(random.nextFloat(1.07, 1.13), random.nextFloat(1.2, 1.7), easeOutElastic)
                .wait(1.0)
                .back(0.8, easeOutBounce),
        ),
    );

    yield* beginSlide('Introduction');
});
