/*
	Installed from https://reactbits.dev/default/
*/

import "./ShinyText.css";

// Adds an optional `as` prop to control the rendered tag (e.g., 'h2', 'span')
// Renders a base text (always visible) and a shiny overlay that animates across.
const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  as = "span",
  baseColor, // optional solid color for the base text; defaults to inherited color
}) => {
  const animationDuration = `${speed}s`;
  const Component = as;

  return (
    <Component
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={baseColor ? { color: baseColor } : undefined}
    >
      <span className="shiny-text__base">{text}</span>
      <span
        className="shiny-text__shine"
        style={{ animationDuration }}
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
};

export default ShinyText;
