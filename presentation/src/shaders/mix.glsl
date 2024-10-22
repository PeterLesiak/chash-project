#version 300 es
precision highp float;

#include "@motion-canvas/core/shaders/common.glsl"

#include "./matrix.glsl"
#include "./glow.glsl"
#include "./godRays.glsl"

void main() {
    outColor = glow(matrix()) + godRays();
}