import { defineConfig } from 'vite';
import motionCanvasBroken from '@motion-canvas/vite-plugin';

const motionCanvas = (motionCanvasBroken as any).default;

export default defineConfig({
    plugins: [
        motionCanvas({
            buildForEditor: true,
        }),
    ],

    //root: './page',
});
