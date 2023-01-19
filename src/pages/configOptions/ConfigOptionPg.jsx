import React from 'react';
import ConfigButton from '../../components/configOption/button/ConfigButton';
import LayoutOption from '../../components/configOption/layoutOption/LayoutOption';
import OtherOption from '../../components/configOption/otherOption/OtherOption';
import WithLabelExample from '../../components/configOption/progress/ProgressBar';
import TrackOption from '../../components/configOption/trackOption/TrackOption';
import WindowOption from '../../components/configOption/windowOption/WindowOption';
import MenuThree from '../../components/menus/Menu3/MenuThree';

export default function ConfigOptionPg() {
  return (
    <div>
      <MenuThree />
      <WithLabelExample />
      <LayoutOption/>
      <WindowOption />
      <TrackOption />
      <OtherOption />
      <ConfigButton billingPg={false} firstBtnText="Preview" secondBtnText="Add to Cart" />
    </div>
  )
}

