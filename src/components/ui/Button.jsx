export default function Button({
  className = "",
  variant = "primary",
  children,
  ...props
}) {
  const style = {
    primary: "bg-black text-white",
    secondary: "bg-white text-black",
  };

  return (
    <button
      className={`w-fit py-2 cursor-pointer px-3 text-[14px] leading-[16px] text-[#000] font-light rounded-full ${
        style[variant] || style.primary
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
