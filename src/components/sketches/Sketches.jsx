import useInView from "../../hooks/useInView";
import inkProps from "./inkProps";
import "./sketches.css";

export function Sketch({
  viewBox = "0 0 200 140",
  className = "",
  title,
  preserveAspectRatio,
  children,
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -4% 0px",
    once: false,
  });

  return (
    <svg
      ref={ref}
      className={`sketch ${inView ? "is-inview" : ""} ${className}`.trim()}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      fill="none"
      focusable="false"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : "true"}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function SketchMonitor() {
  return (
    <Sketch viewBox="0 0 240 180" className="loop-chroma">
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M26 26C64 20 166 20 202 27C209 62 208 104 199 128C160 134 66 134 30 127C23 100 21 56 26 26Z"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".38s" }}
          d="M41 41C74 36 152 36 186 42C191 66 190 96 183 112C148 117 76 117 46 112C41 89 40 62 41 41Z"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".62s" }} d="M104 128L100 148" />
        <path pathLength="1" data-draw style={{ "--dd": ".7s" }} d="M104 128C112 136 116 142 118 148" />
        <path pathLength="1" data-draw style={{ "--dd": ".8s" }} d="M76 158C96 163 136 163 154 157" />
        <path pathLength="1" data-draw style={{ "--dd": ".9s" }} d="M162 158C182 166 196 144 216 152C224 156 228 164 230 172" />
        <path pathLength="1" data-draw style={{ "--dd": ".55s" }} d="M58 55H88" />
        <path
          className="loop-typing"
          pathLength="1"
          data-draw
          style={{ "--dd": ".6s", "--ld": "-1.5s" }}
          d="M58 64H116"
        />
        <path
          className="loop-typing"
          pathLength="1"
          data-draw
          style={{ "--dd": ".66s", "--ld": "-3s" }}
          d="M58 73H101"
        />
        <path
          className="loop-typing"
          pathLength="1"
          data-draw
          style={{ "--dd": ".72s", "--ld": "-4.5s" }}
          d="M58 82H124"
        />
        <path
          className="loop-typing"
          pathLength="1"
          data-draw
          style={{ "--dd": ".78s", "--ld": "-0.8s" }}
          d="M58 91H78"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".86s" }} d="M64 99L69 94L74 99" />
      </g>
      <rect
        className="loop-blink"
        x="84"
        y="94"
        width="8"
        height="10"
        fill="currentColor"
        stroke="none"
      />
      <g className="accent-stroke" {...inkProps} strokeWidth="1.4">
        <path pathLength="1" data-draw style={{ "--dd": "1s" }} d="M148 58L157 67" />
        <path pathLength="1" data-draw style={{ "--dd": "1.05s" }} d="M157 58L148 67" />
        <path pathLength="1" data-draw style={{ "--dd": ".95s" }} d="M214 34L214 44" />
        <path pathLength="1" data-draw style={{ "--dd": "1s" }} d="M209 39L219 39" />
      </g>
      <path
        className="loop-scan accent-stroke"
        d="M55 57H164"
        style={{ "--ty": "34px" }}
        strokeWidth="1.1"
      />
      <g className="hatch" {...inkProps}>
        <path d="M22 48L16 56" />
        <path d="M21 58L15 66" />
        <path d="M22 68L16 76" />
        <path d="M206 48L212 56" />
        <path d="M206 58L213 66" />
        <path d="M206 68L212 76" />
        <path d="M36 118L30 124" />
        <path d="M46 117L40 123" />
      </g>
    </Sketch>
  );
}

export function SketchShield() {
  return (
    <Sketch viewBox="0 0 180 200">
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M90 12C69 23 48 27 31 31C31 70 36 110 56 137C70 156 82 167 90 176C98 167 110 156 124 137C144 110 149 70 149 31C132 27 111 23 90 12Z"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".4s" }}
          d="M90 25C74 34 55 38 43 41C44 72 48 106 65 130C76 146 84 155 90 162C96 155 104 146 115 130C132 106 136 72 137 41C125 38 106 34 90 25Z"
        />
        <circle
          pathLength="1"
          data-draw
          style={{ "--dd": ".85s" }}
          cx="90"
          cy="86"
          r="11"
        />
        <path pathLength="1" data-draw style={{ "--dd": "1s" }} d="M90 97L83 122H97Z" />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M128 62L140 68" />
        <path d="M130 74L142 80" />
        <path d="M130 86L142 92" />
        <path d="M128 98L138 104" />
        <path d="M124 112L134 118" />
        <path d="M120 126L130 132" />
        <path d="M52 62L40 68" />
        <path d="M50 74L38 80" />
        <path d="M50 86L38 92" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.3">
        <path pathLength="1" data-draw style={{ "--dd": "1.1s" }} d="M56 58h-9v9" />
        <path pathLength="1" data-draw style={{ "--dd": "1.15s" }} d="M124 58h9v9" />
        <path pathLength="1" data-draw style={{ "--dd": "1.2s" }} d="M155 118v8" />
        <path pathLength="1" data-draw style={{ "--dd": "1.25s" }} d="M151 122h8" />
      </g>
      <path
        className="loop-trace accent-stroke"
        pathLength="1"
        strokeWidth="1.6"
        d="M90 12C69 23 48 27 31 31C31 70 36 110 56 137C70 156 82 167 90 176C98 167 110 156 124 137C144 110 149 70 149 31C132 27 111 23 90 12Z"
      />
    </Sketch>
  );
}

export function SketchBrowser() {
  return (
    <Sketch viewBox="0 0 240 176">
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M24 22C74 17 166 17 216 25C221 62 220 114 211 146C162 152 64 152 28 145C22 108 20 60 24 22Z"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".4s" }} d="M24 45C74 41 168 41 216 46" />
        <circle pathLength="1" data-draw style={{ "--dd": ".55s" }} cx="38" cy="34" r="3" />
        <circle pathLength="1" data-draw style={{ "--dd": ".6s" }} cx="49" cy="34" r="3" />
        <circle pathLength="1" data-draw style={{ "--dd": ".65s" }} cx="60" cy="34" r="3" />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".7s" }}
          d="M74 28C100 26 132 26 154 29L153 40C128 42 100 42 75 40Z"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".8s" }} d="M42 66H116" />
        <path pathLength="1" data-draw style={{ "--dd": ".86s" }} d="M42 78H158" />
        <path pathLength="1" data-draw style={{ "--dd": ".92s" }} d="M42 90H96" />
        <path pathLength="1" data-draw style={{ "--dd": ".98s" }} d="M42 102H138" />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": "1.05s" }}
          d="M42 118C82 115 134 115 170 118C173 132 172 140 168 144C130 147 82 147 43 144C40 136 40 126 42 118Z"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": "1.2s" }}
          d="M116 88L128 116L122 114L126 124L120 127L116 117L108 123Z"
        />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M198 66L204 76" />
        <path d="M198 82L205 92" />
        <path d="M198 98L204 108" />
        <path d="M32 128L24 134" />
        <path d="M32 138L24 144" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.4">
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": "1.3s" }}
          d="M186 84L178 98L187 93L179 105"
        />
      </g>
      <path
        className="loop-scan accent-stroke"
        style={{ "--ty": "68px" }}
        d="M40 62H162"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
    </Sketch>
  );
}

export function SketchLock() {
  return (
    <Sketch viewBox="0 0 160 190">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M48 78V52C48 32 62 20 80 20C98 20 112 33 112 53V78" />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".35s" }}
          d="M56 78V54C56 38 67 28 80 28C93 28 104 39 104 54V78"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".5s" }}
          d="M38 78C64 74 96 74 120 78C126 110 125 148 118 166C94 172 64 172 40 166C33 146 32 108 38 78Z"
        />
        <circle pathLength="1" data-draw style={{ "--dd": ".9s" }} cx="80" cy="110" r="10" />
        <path pathLength="1" data-draw style={{ "--dd": "1s" }} d="M80 120L74 144H86Z" />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M46 94L38 102" />
        <path d="M45 106L36 114" />
        <path d="M45 118L37 126" />
        <path d="M114 94L122 102" />
        <path d="M115 106L124 114" />
        <path d="M115 118L123 126" />
      </g>
      <g className="dot">
        <circle cx="47" cy="155" r="2.1" />
        <circle cx="113" cy="155" r="2.1" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.3">
        <path pathLength="1" data-draw style={{ "--dd": "1.1s" }} d="M128 56l8 8" />
        <path pathLength="1" data-draw style={{ "--dd": "1.15s" }} d="M136 56l-8 8" />
      </g>
      <path
        className="loop-trace accent-stroke"
        pathLength="1"
        d="M48 78V52C48 32 62 20 80 20C98 20 112 33 112 53V78"
      />
    </Sketch>
  );
}

export function SketchDocs() {
  return (
    <Sketch viewBox="0 0 210 170">
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M28 40C66 32 122 28 154 33C158 66 162 106 158 138C122 146 68 148 34 141C29 108 26 70 28 40Z"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".35s" }}
          d="M52 50C88 44 136 41 168 47C172 82 175 118 171 148C134 156 84 157 56 150C50 118 49 80 52 50Z"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".55s" }}
          d="M168 47C160 54 152 62 150 66C157 69 164 73 168 78"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".7s" }} d="M70 70H118" />
        <path pathLength="1" data-draw style={{ "--dd": ".76s" }} d="M70 82H140" />
        <path pathLength="1" data-draw style={{ "--dd": ".82s" }} d="M70 94H104" />
        <path pathLength="1" data-draw style={{ "--dd": ".88s" }} d="M70 106H132" />
        <path pathLength="1" data-draw style={{ "--dd": ".94s" }} d="M70 118H88" />
        <path pathLength="1" data-draw style={{ "--dd": "1s" }} d="M42 54H62" />
        <path pathLength="1" data-draw style={{ "--dd": "1.05s" }} d="M42 66H62" />
      </g>
      <path
        className="loop-scan accent-stroke"
        style={{ "--ld": "0.4s", "--ty": "68px" }}
        d="M60 64H160"
        strokeDasharray="2 3"
        strokeWidth="1.2"
      />
      <g className="hatch" {...inkProps}>
        <path d="M64 128L52 138" />
        <path d="M78 130L64 140" />
        <path d="M92 132L78 142" />
        <path d="M142 128L154 134" />
        <path d="M142 140L152 146" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.4">
        <path
          className="loop-throb"
          pathLength="1"
          data-draw
          style={{ "--dd": "1.15s" }}
          d="M98 30C92 20 106 14 112 22C118 30 122 44 124 54"
        />
      </g>
    </Sketch>
  );
}

export function SketchPortrait() {
  return (
    <Sketch viewBox="0 0 190 220">
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M96 28C122 27 141 45 143 72C144 88 139 102 132 112C127 120 126 128 129 138L68 138C66 127 60 121 54 111C44 95 40 78 44 61C50 41 70 29 96 28Z"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".3s" }} d="M129 138C124 151 122 164 130 174" />
        <path pathLength="1" data-draw style={{ "--dd": ".35s" }} d="M68 138C71 150 70 163 62 174" />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".45s" }}
          d="M26 218C46 192 78 178 104 180C130 182 154 196 168 218"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".5s" }}
          d="M46 68C44 36 68 18 96 18C124 18 146 36 144 66"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".6s" }}
          d="M132 60C146 58 154 68 152 84C150 98 142 105 132 102C136 90 137 74 132 60Z"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".7s" }} d="M136 66C140 76 140 90 136 98" />
        <path pathLength="1" data-draw style={{ "--dd": ".75s" }} d="M52 82C46 88 47 96 53 100" />
        <path pathLength="1" data-draw style={{ "--dd": ".8s" }} d="M104 80C110 78 116 78 120 80" />
        <path pathLength="1" data-draw style={{ "--dd": ".85s" }} d="M124 88C127 96 124 102 118 104" />
        <path pathLength="1" data-draw style={{ "--dd": ".9s" }} d="M108 114C113 116 119 115 122 112" />
        <path pathLength="1" data-draw style={{ "--dd": ".95s" }} d="M58 190C76 184 94 184 108 188" />
        <path pathLength="1" data-draw style={{ "--dd": "1s" }} d="M104 180C108 188 112 194 116 200" />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M50 56C62 42 82 34 102 36" />
        <path d="M46 68C64 52 88 44 110 48" />
        <path d="M52 82C70 66 94 60 116 64" />
        <path d="M58 96C76 82 100 78 122 82" />
        <path d="M64 110C80 98 100 96 120 98" />
        <path d="M138 92L150 98" />
        <path d="M136 102L148 108" />
        <path d="M132 112L142 118" />
        <path d="M128 122L138 128" />
        <path d="M126 146L138 152" />
        <path d="M56 186L48 196" />
        <path d="M68 184L60 194" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.4">
        <path pathLength="1" data-draw style={{ "--dd": "1.1s" }} d="M160 138l7 7" />
        <path pathLength="1" data-draw style={{ "--dd": "1.15s" }} d="M167 138l-7 7" />
        <path pathLength="1" data-draw style={{ "--dd": "1.2s" }} d="M32 124C26 130 26 138 31 143" />
      </g>
    </Sketch>
  );
}

export function SketchFlag() {
  return (
    <Sketch viewBox="0 0 160 180">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M46 20L42 160" />
        <path pathLength="1" data-draw style={{ "--dd": ".2s" }} d="M44 20L40 160" />
        <path pathLength="1" data-draw style={{ "--dd": ".5s" }} d="M26 162C36 168 52 168 60 161" />
        <g className="loop-wave">
          <path
            pathLength="1"
            data-draw
            style={{ "--dd": ".6s" }}
            d="M46 32C64 24 84 36 106 28C110 48 108 66 104 84C82 92 64 80 46 86Z"
          />
          <path pathLength="1" data-draw style={{ "--dd": ".85s" }} d="M46 40C64 34 84 44 104 38" />
          <path pathLength="1" data-draw style={{ "--dd": ".92s" }} d="M46 52C64 46 82 54 104 48" />
          <path pathLength="1" data-draw style={{ "--dd": ".99s" }} d="M46 64C64 58 82 66 102 60" />
          <path pathLength="1" data-draw style={{ "--dd": "1.06s" }} d="M46 76C64 70 82 78 100 72" />
        </g>
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.3">
        <path pathLength="1" data-draw style={{ "--dd": "1.2s" }} d="M72 48l3 6l6 1l-5 4l1 6l-5 -3l-5 3l1 -6l-5 -4l6 -1z" />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M124 140L134 146" />
        <path d="M124 152L132 158" />
      </g>
    </Sketch>
  );
}

export function SketchSpine() {
  return (
    <Sketch
      viewBox="0 0 60 1000"
      preserveAspectRatio="none"
      className="exp-spine-svg"
    >
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          style={{ "--dur": "2.6s", "--dd": ".1s" }}
          d="M30 4C44 90 14 170 30 250S46 410 30 490S12 650 28 730S44 880 30 996"
        />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M24 160C30 158 36 160 38 164" />
        <path d="M20 400C26 397 32 399 35 403" />
        <path d="M22 640C28 637 34 639 37 643" />
        <path d="M20 850C26 847 32 849 35 853" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.1">
        <path
          className="loop-march"
          style={{ "--ld": "0.3s" }}
          d="M30 4C44 90 14 170 30 250S46 410 30 490S12 650 28 730S44 880 30 996"
        />
      </g>
    </Sketch>
  );
}

export function DoodleArrow({ className = "" }) {
  return (
    <Sketch viewBox="0 0 130 64" className={className}>
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M6 14C28 48 66 52 108 30" />
        <path pathLength="1" data-draw style={{ "--dd": ".3s" }} d="M100 20L110 30L96 36" />
      </g>
    </Sketch>
  );
}

export function DoodleArrowDown({ className = "" }) {
  return (
    <Sketch viewBox="0 0 60 120" className={className}>
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M30 8C23 36 36 64 29 88" />
      </g>
      <g className="loop-nudge" {...inkProps}>
        <path pathLength="1" data-draw style={{ "--dd": ".3s" }} d="M18 80L29 94L40 80" />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M16 50C22 54 30 54 36 51" />
      </g>
    </Sketch>
  );
}

export function DoodleCircle({ className = "" }) {
  return (
    <Sketch viewBox="0 0 220 90" className={className}>
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M20 46C26 20 190 10 200 38C210 66 40 82 16 54C8 44 20 28 46 20"
        />
        <path
          pathLength="1"
          data-draw
          style={{ "--dd": ".35s" }}
          d="M28 62C90 78 176 70 208 50"
        />
      </g>
    </Sketch>
  );
}

export function DoodleUnderline({ className = "" }) {
  return (
    <Sketch viewBox="0 0 240 20" className={className}>
      <g className="loop-flicker" style={{ "--ld": "-1.2s" }} {...inkProps}>
        <path pathLength="1" data-draw d="M6 13C60 7 150 5 232 10" />
        <path pathLength="1" data-draw style={{ "--dd": ".3s" }} d="M14 18C86 13 164 11 224 16" />
      </g>
    </Sketch>
  );
}

export function DoodleDivider({ className = "" }) {
  return (
    <Sketch viewBox="0 0 400 18" className={className}>
      <g className="loop-drift" style={{ "--lt": "10s" }} {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M4 10C40 3 76 16 112 9S184 4 220 10S292 16 328 8S376 4 396 10"
        />
      </g>
    </Sketch>
  );
}

export function DoodleStar({ className = "" }) {
  return (
    <Sketch viewBox="0 0 40 40" className={className}>
      <g className="loop-drift" style={{ "--lt": "9s" }} {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M20 4L23 17L36 20L23 23L20 36L17 23L4 20L17 17Z"
        />
      </g>
    </Sketch>
  );
}

export function DoodleCross({ className = "" }) {
  return (
    <Sketch viewBox="0 0 24 24" className={className}>
      <g className="loop-drift" style={{ "--lt": "7s", "--ld": "-2.4s" }} {...inkProps}>
        <path pathLength="1" data-draw d="M6 6C10 10 14 14 18 18" />
        <path pathLength="1" data-draw style={{ "--dd": ".2s" }} d="M18 6C14 10 10 14 6 18" />
      </g>
    </Sketch>
  );
}

export function DoodleSpiral({ className = "" }) {
  return (
    <Sketch viewBox="0 0 44 44" className={className}>
      <g {...inkProps}>
        <path
          pathLength="1"
          data-draw
          d="M22 22C22 16 30 16 30 22C30 30 18 30 16 20C14 8 32 6 36 18C39 28 24 36 14 28"
        />
      </g>
    </Sketch>
  );
}

export function SketchCertificate() {
  return (
    <Sketch viewBox="0 0 150 130" className="cert-ribbon-svg">
      <g {...inkProps}>
        <rect
          pathLength="1"
          data-draw
          x="18"
          y="12"
          width="114"
          height="82"
          rx="3"
        />
        <rect
          pathLength="1"
          data-draw
          style={{ "--dd": ".25s" }}
          x="26"
          y="20"
          width="98"
          height="66"
          rx="2"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".5s" }} d="M54 38H96" />
        <path pathLength="1" data-draw style={{ "--dd": ".58s" }} d="M44 48H106" />
        <path pathLength="1" data-draw style={{ "--dd": ".66s" }} d="M44 56H90" />
        <circle
          pathLength="1"
          data-draw
          style={{ "--dd": ".78s" }}
          cx="75"
          cy="72"
          r="10"
        />
        <path pathLength="1" data-draw style={{ "--dd": ".9s" }} d="M75 82L69 98H81Z" />
      </g>
      <g className="accent-stroke" {...inkProps} strokeWidth="1.3">
        <path
          className="loop-trace"
          pathLength="1"
          style={{ "--ld": ".3s" }}
          d="M96 72l4 4l7 -9"
        />
        <path
          className="loop-pulse"
          style={{ "--ld": "0s" }}
          d="M75 62l1.6 4.4l4.4 1.6l-4.4 1.6l-1.6 4.4l-1.6 -4.4l-4.4 -1.6l4.4 -1.6z"
        />
      </g>
      <g className="hatch" {...inkProps}>
        <path d="M124 26L132 32" />
        <path d="M124 38L132 44" />
        <path d="M124 50L132 56" />
        <path d="M18 26L10 32" />
        <path d="M18 38L10 44" />
      </g>
    </Sketch>
  );
}
