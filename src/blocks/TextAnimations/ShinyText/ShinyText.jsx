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
  accentColor, // optional tint for the moving highlight
  highlightColor, // optional brightest point of the sheen
  trailColor, // optional transparent trail color
}) => {
  const animationDuration = `${speed}s`;
  const Component = as;
  const styleVars = {
    ...(baseColor
      ? { color: baseColor, "--shiny-text-base-color": baseColor }
      : {}),
    ...(accentColor ? { "--shiny-text-accent": accentColor } : {}),
    ...(highlightColor ? { "--shiny-text-glint": highlightColor } : {}),
    ...(trailColor ? { "--shiny-text-trail": trailColor } : {}),
  };

  return (
    <Component
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={Object.keys(styleVars).length ? styleVars : undefined}
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
