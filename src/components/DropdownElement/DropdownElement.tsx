import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { translate } from '../../utils/utils';
import './DropdownElement.scss';

interface DropdownElementProps {
  customFunction?: () => void;
  icon: IconDefinition;
  color?: string;
  size?: SizeProp;
  classProp?: string;
  customText?: string;
}

function DropdownElement({ customFunction, icon, color = '', size = 'xl', classProp = '', customText = '' }: DropdownElementProps) {
  return (
    <div className={classProp} onClick={customFunction}>
      <FontAwesomeIcon icon={icon} size={size} color={color}/>
      <p>{translate(customText)}</p>
    </div>
  );
}

export default DropdownElement;