import Lottie from 'lottie-react-native';
import React, { useState } from 'react';
import { DimensionValue, ViewStyle } from 'react-native';

interface LottieViewerProps {
  source: string;
  imgWidth: DimensionValue;
  imgHeight: DimensionValue;
  allowLoop?: boolean;
  styles?: ViewStyle;
  keepLastFrame?: boolean;
}

const LottieViewer = ({
  source,
  imgWidth,
  imgHeight,
  allowLoop = true,
  styles = {},
  keepLastFrame = false,
}: LottieViewerProps) => {
  const [renderLottie, setRenderLottie] = useState(true);

  const handleFinishAnimation = () => {
    if (!allowLoop && !keepLastFrame) {
      setRenderLottie(false);
    }
  };

  return (
    <>
      {renderLottie && (
        <Lottie
          source={source}
          style={[
            {
              width: imgWidth,
              height: imgHeight,
              justifyContent: 'center',
              alignItems: 'center',
            },
            styles,
          ]}
          autoPlay={true}
          loop={allowLoop}
          onAnimationFinish={handleFinishAnimation}
        />
      )}
    </>
  );
};

export default LottieViewer;
