export function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={32}
      height={32}
      fill="none"
      stroke={"#fff"}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="21" x2="3" y1="18" y2="18"></line>
      <line x1="21" x2="3" y1="12" y2="12"></line>
      <line x1="21" x2="3" y1="6" y2="6"></line>
    </svg>
  );
}
