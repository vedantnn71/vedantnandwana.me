type MenuIconProps = {
  color?: string;
  size?: number;
}

export const MenuIcon = ({
  color = "#fff",
  size = 36,
}: MenuIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="21" x2="3" y1="18" y2="18"></line>
    <line x1="21" x2="3" y1="12" y2="12"></line>
    <line x1="21" x2="3" y1="6" y2="6"></line>
  </svg>
);

