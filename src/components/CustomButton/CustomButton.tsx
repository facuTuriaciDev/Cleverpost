import './CustomButton.scss';

interface customButtonProps {
  text?: string;
  color?: string;
  customClickEvent?: () => void;
}

function CustomButton({text = '', color = '', customClickEvent }: customButtonProps) {
  return  (
    <>
      <button className="customButton" onClick={customClickEvent}>{text}</button>
    </>
  )
}

export default CustomButton