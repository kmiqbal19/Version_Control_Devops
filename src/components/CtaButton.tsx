interface CtaButtonProps {
    text: string;
    onClick: () => void;
}

const CtaButton = ({text, onClick}: CtaButtonProps) => {
  return (
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default CtaButton