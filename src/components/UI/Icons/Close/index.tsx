import { Svg } from "../styles";

interface Props {
  // This should be the function
  // that makes the boolean value to false
  onClose?: () => void;
}

const Close: React.FC<Props> = ({ onClose }) => {
  return (
    <Svg
      onClick={onClose}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M20.5833 6.94425L19.0558 5.41675L13 11.4726L6.94413 5.41675L5.41663 6.94425L11.4725 13.0001L5.41663 19.0559L6.94413 20.5834L13 14.5276L19.0558 20.5834L20.5833 19.0559L14.5275 13.0001L20.5833 6.94425Z" />
    </Svg>
  );
};

export default Close;
