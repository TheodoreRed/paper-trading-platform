interface Props {
  textContent: string;
  isDisabled?: boolean;
}

const LandingPageButton: React.FC<Props> = ({ textContent, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className={`w-full px-10 py-5 text-3xl text-center transition duration-300 ease-in-out border rounded-full  ${isDisabled ? "border-stone-600 text-stone-600" : "hover:bg-customRed border-customRed"} `}
    >
      {textContent}
    </button>
  );
};

export default LandingPageButton;
