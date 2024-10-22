// #version 300 es
// precision highp float;

#include "@motion-canvas/core/shaders/common.glsl"

vec2 VogelDiskSample(int sampleIndex, int sampleCount, float phi)
{
    float sampleIndexf = float(sampleIndex);
    float sampleCountf = float(sampleCount);
    
    float goldenAngle = 2.39996;

    float r = sqrt((sampleIndexf + 0.5) / sampleCountf);
    float theta = sampleIndexf * goldenAngle + phi;

    return vec2(cos(theta), sin(theta)) * r;
}

vec4 godRays() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy/resolution;
    
    // config variables:
    int radialSmpCount = 48;
    int softnessSmpCount = 10;
    float range = -0.5;
    float blurRadius = 0.1;
    float attenuationSoftness = 0.3;
 
 
    float rangePerSample = range / float(radialSmpCount);
 
    
    vec2 radialOrigin = vec2(0.5, 0.8); 
    radialOrigin += vec2(sin(time * 2.0), cos(time)) * vec2(0.1, 0.05) + vec2(0.1);
    
    vec4 buffer = vec4(0);
    for(int softnessSmpIdx = 0; softnessSmpIdx < softnessSmpCount; softnessSmpIdx++)
    {
        vec2 softnessOffset = VogelDiskSample(softnessSmpIdx, softnessSmpCount, 0.0) * blurRadius;
        vec2 uvOffset = softnessOffset + radialOrigin;
        vec2 uvCentered = uv - uvOffset;
        for(int radialIdx = 0; radialIdx < radialSmpCount; radialIdx++)
        {
            float stepSize = float(radialIdx) * rangePerSample;
            vec2 uv = uvCentered * (1.0 + stepSize) + uvOffset ;
            buffer += max(vec4(0.0), texture(sourceTexture, uv) - vec4(0.9)); 
        }
    }
    
  
    vec4 radialBlurTarget = buffer / float(softnessSmpCount * radialSmpCount);
    // compute attenuation
    {
        vec2 vecToOrigin = radialOrigin - uv;
        
        float invSqrFalloff = 1.0 / (dot(vecToOrigin, vecToOrigin) + attenuationSoftness);
        radialBlurTarget *= invSqrFalloff;
    }
    radialBlurTarget *=  exp2(0.9);

    vec4 background = texture(sourceTexture, sourceUV) * 0.95;
    vec4 finalColor = radialBlurTarget + background;
    
    // frankenstein reinhard tonemapping
    finalColor = (finalColor / (2.0 + finalColor)) * 2.0;
    
    // Output to screen 
    return finalColor;
}