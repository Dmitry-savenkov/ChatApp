import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MessageIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.404 7.06 12 11.859l9.596-4.797A2.4 2.4 0 0 0 19.2 4.8H4.8a2.4 2.4 0 0 0-2.396 2.26Z"
      fill="#C5C5C7"
    />
    <Path
      d="m21.6 9.742-9.6 4.8-9.6-4.8V16.8a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V9.742Z"
      fill="#C5C5C7"
    />
  </Svg>
);

export default MessageIcon;
