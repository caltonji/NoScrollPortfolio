import * as React from 'react';

import "./blurredEffect.svg";
import "./HalfBlurredPhoto.css";

interface IHalfBlurredPhotoProps {
    url: string
}

export default class HalfBlurredPhoto extends React.Component<IHalfBlurredPhotoProps, {}> {
    public render() {
        const { url } = this.props;

        return (
            <div className={ "halfBlurred__container" }>
                <div className={ "halfBlurred__photoContainer"}>
                    <div className={ "halfBlurred__photoInnerContainer halfBlurred__photoInnerContainer--left" }>
                        <img className={ "halfBlurred__photo halfBlurred__photo--left" } src={ url } />
                    </div>
                </div>
                <div className={ "halfBlurred__photoContainer" }>
                    <div className={ "halfBlurred__photoInnerContainer halfBlurred__photoInnerContainer--right" }>
                        <img className={ "halfBlurred__photo halfBlurred__photo--blurred" } src={ url } />
                    </div>
                </div>
            </div>
        );
    }
}