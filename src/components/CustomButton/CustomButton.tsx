import './CustomButton.scss';

interface customButtonProps {
  text?: string;
  customClickEvent?: () => void;
}

function CustomButton({text = '', customClickEvent }: customButtonProps) {
  return  (
    <button className="customButton" onClick={customClickEvent}>{text}</button>
  )
}

export default CustomButton