
interface ResumeBtnProps {
    size?: string;
}

function ResumeBtn({ size }: ResumeBtnProps) {
  const openResume = () => {
    window.open("/CharlieCarrResumeMAR2023.pdf");
  };

  return (
    <button
      className={`${size === 'large' && 'w-[250px]'} bg-white/[.6] text-black text-sm rounded-lg px-4 py-2 hover:drop-shadow-2xl hover:bg-white/[.90] ease-in duration-200 z-50`}
      onClick={openResume}
    >
      Resume
    </button>
  );
}

export default ResumeBtn;
