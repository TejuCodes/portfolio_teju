import useInView from "../hooks/useInView";

export default function Reveal({
  as: Tag = "div",
  className = "",
  paper = false,
  delay = 0,
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px",
    once: false,
  });

  const classes = [
    "reveal",
    paper ? "reveal--paper" : "",
    inView ? "is-inview" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, "--d": `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
