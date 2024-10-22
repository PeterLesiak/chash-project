import { Layout, Rect, signal, Txt, type LayoutProps } from '@motion-canvas/2d';
import {
    easeOutExpo,
    makeRef,
    sequence,
    type SignalValue,
    type SimpleSignal,
} from '@motion-canvas/core';

export type SummaryItems = [boolean, boolean, boolean];

export interface AccessSummaryProps extends LayoutProps {
    modifier: SignalValue<string>;

    accessibility: SignalValue<SummaryItems>;
}

export class AccessSummary extends Layout {
    @signal()
    public declare readonly modifier: SimpleSignal<string, this>;

    @signal()
    public declare readonly accessibility: SimpleSignal<SummaryItems, this>;

    private readonly texts: Txt[] = [];

    public constructor(props?: AccessSummaryProps) {
        super({ ...props, layout: true });

        const summaryItems = [
            'Dostępny w klasie',
            'Dostępny w innych klasach',
            'Dostępny z zewnątrz',
        ];

        this.add(
            <Rect layout direction={'column'} gap={50} padding={50} radius={25} fill={'#0c0c0c'}>
                <Layout layout justifyContent={'center'}>
                    <Txt
                        fill={'white'}
                        fontSize={65}
                        fontFamily={'JetBrainsMono Nerd Font'}
                        fontWeight={700}
                    >
                        Modyfikator {this.modifier()}
                    </Txt>
                </Layout>

                {summaryItems.map((summary, index) => (
                    <Rect
                        layout
                        direction={'column'}
                        gap={100}
                        padding={50}
                        radius={25}
                        fill={'#151515'}
                    >
                        <Txt
                            ref={makeRef(this.texts, index)}
                            fill={'#a1a1a1'}
                            fontSize={50}
                            fontFamily={'JetBrainsMono Nerd Font'}
                            fontWeight={700}
                        >
                            {summary}
                        </Txt>
                    </Rect>
                ))}
            </Rect>,
        );
    }

    public *turnOn() {
        yield* sequence(
            0.6,
            ...this.texts.map((text, index) =>
                text.fill(this.accessibility()[index] ? '#7ee787' : '#ff7b72', 0.6, easeOutExpo),
            ),
        );
    }
}
