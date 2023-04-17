import './CustomButton.scss';

interface customButtonProps {
  text?: string;
  customClickEvent?: () => void;
  customClassName?: string;
}

function CustomButton({text = '', customClassName = '', customClickEvent }: customButtonProps) {
  return  (
    <button className={`customButton ${customClassName}`} onClick={customClickEvent}>{text}</button>
  )
}

export default CustomButton