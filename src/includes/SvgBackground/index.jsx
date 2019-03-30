import React from 'react';
import SvgDotBackground from './SvgDotBackground';
import SvgCirclePattern from './SvgCirclePattern';
import SvgCircleOutline from './SvgCircleOutline';
import SvgCircleFilledPink from './SvgCircleFilledPink';
import SvgCircleFilledYellow from './SvgCircleFilledYellow';

const SvgBackground = _ => {
    return (
        <div className="svg-background">
            <SvgDotBackground />
            <SvgCirclePattern />
            <SvgCircleOutline />
            <SvgCircleFilledPink />
            <SvgCircleFilledYellow />
        </div>
    )
}

export default SvgBackground;