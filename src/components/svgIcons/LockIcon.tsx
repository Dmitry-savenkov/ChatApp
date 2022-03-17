import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LockIcon = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 9V7a5 5 0 1 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm8-2v2H7V7a3 3 0 1 1 6 0Z"
      fill="#C5C5C7"
    />
  </Svg>
);

export default LockIcon;
