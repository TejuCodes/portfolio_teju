import { Sketch } from "./Sketches";
import inkProps from "./inkProps";

function Hatch({ d }) {
  return <path d={d} />;
}

export function SketchSecurityNotebook() {
  return (
    <Sketch viewBox="0 0 240 180" className="cyber-sketch cyber-sketch--notebook">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M22 36C48 28 91 30 117 38L116 147C87 139 50 139 24 147C20 118 19 66 22 36Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".18s" }} d="M121 38C148 30 193 29 218 37C222 66 220 118 216 147C188 140 150 140 121 147Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".28s" }} d="M119 39C116 70 117 115 119 147" />
        <path pathLength="1" data-draw style={{ "--dd": ".4s" }} d="M36 57C57 53 83 54 101 58M36 70C53 67 72 68 90 70M36 83C54 80 78 81 96 84M36 96C52 94 66 95 82 97" />
        <path pathLength="1" data-draw style={{ "--dd": ".55s" }} d="M139 57C161 53 184 53 203 57M139 70C160 67 185 68 202 70M139 83C158 80 177 81 197 84M139 96C157 94 178 95 195 97" />
        <path pathLength="1" data-draw style={{ "--dd": ".68s" }} d="M36 109C48 106 62 107 73 110M139 109C154 106 168 107 183 110" />
        <path pathLength="1" data-draw style={{ "--dd": ".8s" }} d="M27 48L31 49M27 63L31 64M27 78L31 79M27 93L31 94M27 108L31 109" />
        <path pathLength="1" data-draw style={{ "--dd": ".9s" }} d="M52 121C65 117 81 118 93 121" />
      </g>
      <path className="loop-trace accent-stroke" pathLength="1" strokeWidth="1.6" d="M35 99C52 96 70 97 86 100" />
      <g className="cyber-hatch" {...inkProps}>
        <Hatch d="M33 128L40 135M42 126L49 133M185 126L192 133M194 125L201 132" />
        <Hatch d="M110 52L114 55M110 67L114 70M110 82L114 85M110 97L114 100" />
      </g>
      <g className="loop-sweep cyber-magnifier">
        <circle {...inkProps} cx="166" cy="111" r="22" />
        <path {...inkProps} d="M182 127L199 145" />
        <path className="cyber-detail" d="M153 108C158 102 168 100 175 104" />
      </g>
      <path className="accent-stroke" {...inkProps} d="M189 46L198 41L203 49" />
      <text className="cyber-note" x="181" y="160" textAnchor="middle">review twice</text>
    </Sketch>
  );
}

export function SketchAIProcessor() {
  return (
    <Sketch viewBox="0 0 240 180" className="cyber-sketch cyber-sketch--processor">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M66 34C96 28 145 29 174 35L172 143C142 149 98 149 68 143Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".18s" }} d="M80 48C103 43 138 44 160 49L159 128C137 133 104 133 81 128Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".32s" }} d="M66 49L52 49M66 67L49 67M66 86L52 86M66 105L49 105M66 124L53 124M174 49L188 49M174 67L191 67M174 86L188 86M174 105L191 105M174 124L187 124" />
        <path pathLength="1" data-draw style={{ "--dd": ".44s" }} d="M85 34L85 22M104 33L104 19M123 33L123 21M142 34L142 19M85 143L85 157M104 144L104 160M123 144L123 157M142 143L142 159" />
        <path pathLength="1" data-draw style={{ "--dd": ".6s" }} d="M96 77C91 66 100 57 110 63C115 53 130 56 131 67C143 69 144 83 136 88C141 99 131 108 122 103C116 113 102 109 101 100C90 97 88 84 96 77Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".72s" }} d="M116 63C111 73 111 91 117 104M126 66C133 76 132 91 126 101" />
      </g>
      <path className="loop-trace accent-stroke" pathLength="1" d="M95 117C108 121 132 121 145 116" />
      <circle className="loop-pulse cyber-led" style={{ "--ld": "3.3s" }} cx="184" cy="143" r="3" />
      <circle className="loop-pulse cyber-led cyber-led--small" style={{ "--ld": "4.4s" }} cx="55" cy="37" r="2" />
      <text className="cyber-micro" x="120" y="169" textAnchor="middle">LOCAL INFERENCE / REV 02</text>
      <g className="cyber-hatch" {...inkProps}>
        <Hatch d="M77 39L83 43M84 38L90 42M150 137L157 141M157 136L164 140" />
      </g>
    </Sketch>
  );
}

export function SketchLaptopTerminal() {
  return (
    <Sketch viewBox="0 0 240 180" className="cyber-sketch cyber-sketch--laptop">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M35 22C74 18 166 19 204 23L201 119C162 123 77 123 38 119Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".18s" }} d="M48 34C80 31 158 31 190 35L188 106C154 109 82 109 51 106Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".34s" }} d="M28 130C77 126 162 126 212 130L225 147C171 153 69 153 15 147Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".5s" }} d="M92 135C112 134 132 134 149 136L153 142C135 144 105 144 87 142Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".65s" }} d="M65 48H110M65 61H145M65 74H123M65 87H158" />
        <path pathLength="1" data-draw style={{ "--dd": ".74s" }} d="M54 48L58 51L62 45" />
      </g>
      <rect className="loop-blink cyber-cursor" x="129" y="84" width="7" height="11" />
      <path className="loop-scan accent-stroke" d="M55 56H178" style={{ "--ty": "42px" }} strokeWidth="1.2" />
      <path className="loop-trace accent-stroke" pathLength="1" d="M18 149C66 155 171 156 223 149" />
      <text className="cyber-micro" x="58" y="29">SHELL / LOCAL</text>
      <text className="cyber-note" x="192" y="166" textAnchor="end">built by hand</text>
      <g className="cyber-hatch" {...inkProps}>
        <Hatch d="M34 112L41 117M44 112L51 117M194 113L201 118" />
        <Hatch d="M39 157L46 161M49 157L56 161" />
      </g>
    </Sketch>
  );
}

export function SketchBrowserAudit() {
  return (
    <Sketch viewBox="0 0 240 180" className="cyber-sketch cyber-sketch--browser-audit">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M25 25C71 20 169 20 215 26L211 151C166 156 73 156 29 151Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".16s" }} d="M25 48C75 44 166 44 215 49" />
        <circle pathLength="1" data-draw style={{ "--dd": ".26s" }} cx="39" cy="36" r="3" />
        <circle pathLength="1" data-draw style={{ "--dd": ".31s" }} cx="51" cy="36" r="3" />
        <circle pathLength="1" data-draw style={{ "--dd": ".36s" }} cx="63" cy="36" r="3" />
        <path pathLength="1" data-draw style={{ "--dd": ".44s" }} d="M43 66H100M43 80H160M43 94H126M43 108H111M43 122H150" />
        <path pathLength="1" data-draw style={{ "--dd": ".6s" }} d="M118 62L130 69L118 76M141 62H171" />
      </g>
      <path className="loop-scan accent-stroke" d="M38 61H183" style={{ "--ty": "70px" }} strokeWidth="1.25" />
      <path className="loop-trace accent-stroke" pathLength="1" d="M39 105C61 101 83 101 104 105" />
      <circle className="loop-pulse cyber-led" style={{ "--ld": "3.7s" }} cx="170" cy="108" r="5" />
      <text className="cyber-micro" x="181" y="139" textAnchor="end">INPUT / REVIEWED</text>
      <g className="cyber-hatch" {...inkProps}>
        <Hatch d="M196 66L203 73M197 78L204 85M33 134L27 140M43 134L37 141" />
      </g>
    </Sketch>
  );
}

export function SketchBugAudit() {
  return (
    <Sketch viewBox="0 0 240 180" className="cyber-sketch cyber-sketch--bug-audit">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M28 24C67 19 173 20 212 26L209 153C161 157 78 156 31 151Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".16s" }} d="M28 47C81 43 160 44 212 48" />
        <circle pathLength="1" data-draw style={{ "--dd": ".23s" }} cx="41" cy="36" r="3" />
        <circle pathLength="1" data-draw style={{ "--dd": ".28s" }} cx="53" cy="36" r="3" />
        <path pathLength="1" data-draw style={{ "--dd": ".4s" }} d="M43 66H112M43 80H151M43 94H124M43 108H104M43 122H155" />
        <path pathLength="1" data-draw style={{ "--dd": ".54s" }} d="M87 58L94 64L87 70M112 58H142" />
        <path pathLength="1" data-draw style={{ "--dd": ".72s" }} d="M168 57C177 55 185 57 190 62C194 69 192 79 187 84C181 89 171 88 166 82C161 75 162 64 168 57Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".82s" }} d="M187 83L201 99" />
        <path pathLength="1" data-draw style={{ "--dd": ".92s" }} d="M177 64C180 61 185 63 185 67C185 70 182 71 181 74" />
      </g>
      <path className="loop-trace accent-stroke" pathLength="1" d="M159 51C177 45 197 53 198 71C199 89 178 95 162 86C150 78 149 60 159 51Z" />
      <path className="loop-scan accent-stroke" d="M40 59H158" style={{ "--ty": "68px" }} strokeWidth="1.1" />
      <path className="accent-stroke" {...inkProps} d="M212 111L218 117L229 102" />
      <text className="cyber-note" x="185" y="139" textAnchor="middle">inspect the input</text>
      <g className="cyber-hatch" {...inkProps}>
        <Hatch d="M34 135L41 141M44 135L51 141M198 126L204 132" />
      </g>
    </Sketch>
  );
}

/** A personal field desk: terminal, notebook, pencil and a small shield. */
export function SketchWorkspace() {
  return (
    <Sketch viewBox="0 0 340 240" className="cyber-sketch cyber-sketch--workspace">
      <g {...inkProps}>
        <path pathLength="1" data-draw d="M24 27C71 21 160 22 205 28L202 137C160 142 71 142 28 137Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".16s" }} d="M39 41C82 37 147 37 190 42L188 119C148 123 80 123 42 119Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".3s" }} d="M57 61H104M57 75H151M57 89H126M57 103H165" />
        <path pathLength="1" data-draw style={{ "--dd": ".4s" }} d="M17 149C63 144 161 144 211 149L224 165C170 172 69 172 7 165Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".5s" }} d="M91 153C111 151 132 152 150 154L155 160C134 162 105 162 86 160Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".56s" }} d="M221 91C245 86 291 87 317 92L315 185C288 190 246 189 222 184Z" />
        <path pathLength="1" data-draw style={{ "--dd": ".7s" }} d="M231 111C254 107 284 107 306 111M231 124C255 121 285 121 305 124M231 137C251 134 277 135 300 138" />
        <path pathLength="1" data-draw style={{ "--dd": ".82s" }} d="M230 98L235 99M230 111L235 112M230 124L235 125M230 137L235 138" />
      </g>
      <g {...inkProps}>
        <path pathLength="1" data-draw style={{ "--dd": "1.02s" }} d="M18 187C39 184 72 185 92 189L90 218C69 221 39 220 19 217Z" />
        <path pathLength="1" data-draw style={{ "--dd": "1.12s" }} d="M28 196C39 194 50 194 60 196M28 202C39 201 49 201 59 202M28 208C39 207 48 207 58 208" />
        <circle pathLength="1" data-draw style={{ "--dd": "1.18s" }} cx="76" cy="204" r="8" />
        <path pathLength="1" data-draw style={{ "--dd": "1.24s" }} d="M76 198L76 204L80 207" />
      </g>
      <g className="workspace-pencil loop-drift" style={{ "--lt": "8.4s", "--ld": "-2s" }} {...inkProps}>
        <path d="M208 81L274 27L284 38L218 93Z" />
        <path d="M208 81L202 100L218 93" />
        <path d="M274 27L281 21L291 32L284 38" />
        <path className="cyber-detail" d="M217 85L282 32" />
      </g>
      <g className="workspace-shield" {...inkProps}>
        <path pathLength="1" data-draw style={{ "--dd": ".94s" }} d="M274 151L296 157L294 174C290 184 282 190 274 194C266 189 258 182 255 173L254 158Z" />
        <path className="loop-trace accent-stroke" pathLength="1" d="M265 172L272 179L285 164" />
      </g>
      <path className="loop-blink cyber-cursor" d="M169 101V114" strokeWidth="2" />
      <path className="loop-scan accent-stroke" d="M47 53H180" style={{ "--ty": "58px", "--ld": "-1.1s" }} strokeWidth="1.1" />
      <path className="loop-trace accent-stroke" pathLength="1" d="M232 145C250 142 279 143 300 147" style={{ "--ld": "-2.3s" }} />
      <circle className="loop-pulse cyber-led" cx="84" cy="213" r="2" style={{ "--ld": "2.8s" }} />
      <path className="loop-correction" d="M28 128L35 132M37 127L44 131M301 76L307 80M310 76L316 80" />
      <text className="cyber-micro" x="48" y="34">SHELL / NOTES</text>
      <text className="cyber-micro" x="54" y="216" textAnchor="middle">ARCHIVE / SSD</text>
      <text className="cyber-note loop-note" x="138" y="207">observe · question · defend</text>
      <text className="cyber-micro" x="315" y="207" textAnchor="end">FIELD NOTE 01</text>
      <g className="cyber-hatch" {...inkProps}>
        <path d="M32 126L38 132M41 125L47 131M195 128L201 134M226 179L232 184M305 180L311 185" />
      </g>
    </Sketch>
  );
}

const skillDrawings = {
  terminal: (
    <>
      <path pathLength="1" data-draw d="M13 13C34 10 69 10 87 14L85 59C65 62 33 61 15 59Z" />
      <path pathLength="1" data-draw style={{ "--dd": ".18s" }} d="M20 21H80M26 33L32 38L26 43M39 42H58" />
      <path className="loop-blink cyber-cursor" d="M61 35V44" strokeWidth="2" />
      <path pathLength="1" data-draw style={{ "--dd": ".32s" }} d="M45 60L43 69M57 60L59 69M34 70C47 68 61 68 69 71" />
    </>
  ),
  browser: (
    <>
      <path pathLength="1" data-draw d="M11 14C30 11 69 11 88 15L86 63C66 66 31 65 13 62Z" />
      <path pathLength="1" data-draw style={{ "--dd": ".16s" }} d="M12 25C32 23 69 23 87 25M19 20L22 20M27 20L30 20M36 20L39 20M22 35H49M22 43H63M22 51H43" />
      <circle className="loop-pulse cyber-led" cx="72" cy="48" r="5" style={{ "--ld": "3.5s" }} />
      <path className="skill-select-stroke" pathLength="1" d="M65 34C75 30 83 36 82 45C81 54 69 57 63 50C58 44 59 38 65 34Z" />
      <path className="skill-select-stroke" pathLength="1" d="M80 51L90 62" />
    </>
  ),
  monitor: (
    <>
      <path pathLength="1" data-draw d="M12 15C31 12 69 12 88 16L86 59C65 62 34 62 14 59Z" />
      <path pathLength="1" data-draw style={{ "--dd": ".2s" }} d="M20 23H80M24 34H52M24 42H62M49 60L47 68M59 60L61 68M38 69C49 67 62 67 71 70" />
      <path className="loop-scan accent-stroke" d="M21 29H78" style={{ "--ty": "23px", "--ld": "-1s" }} />
      <circle className="loop-pulse cyber-led" cx="74" cy="48" r="3.5" style={{ "--ld": "3.2s" }} />
      <path className="skill-select-stroke" pathLength="1" d="M68 30C77 27 84 34 83 41C82 48 72 51 66 46C60 41 62 33 68 30Z" />
    </>
  ),
  shield: (
    <>
      <path pathLength="1" data-draw d="M50 9L80 17L78 43C74 60 62 68 50 74C36 67 26 57 22 42L21 17Z" />
      <path className="skill-select-stroke" pathLength="1" d="M36 41L46 51L66 29" />
      <path pathLength="1" data-draw style={{ "--dd": ".22s" }} d="M43 38V32C43 22 57 22 57 32V38M38 38H62V54H38Z" />
    </>
  ),
  laptop: (
    <>
      <path pathLength="1" data-draw d="M21 12C37 10 66 10 81 13L80 51C63 53 38 53 22 51Z" />
      <path pathLength="1" data-draw style={{ "--dd": ".18s" }} d="M15 59C35 56 68 56 87 59L91 67C69 70 35 70 10 67Z" />
      <path className="skill-select-stroke" pathLength="1" d="M28 23H50M28 31H65M28 39H55" />
      <path className="loop-trace accent-stroke" pathLength="1" d="M19 66C40 69 67 69 84 66" style={{ "--ld": "-1.6s" }} />
    </>
  ),
  processor: (
    <>
      <path pathLength="1" data-draw d="M27 14C40 11 61 11 74 14L73 61C60 64 41 64 28 61Z" />
      <path pathLength="1" data-draw style={{ "--dd": ".2s" }} d="M35 23H65V53H35ZM27 22H17M27 34H15M27 46H17M74 22H84M74 34H87M74 46H84M39 14V7M51 14V5M63 14V7M40 61V69M52 61V72M64 61V69" />
      <path className="skill-select-stroke" pathLength="1" d="M43 42C36 35 42 26 49 30C54 23 64 29 61 36C68 43 60 50 54 46C49 53 40 49 43 42Z" />
      <circle className="loop-pulse cyber-led" cx="67" cy="57" r="2.4" style={{ "--ld": "4.2s" }} />
    </>
  ),
};

export function SketchSkillObject({ kind }) {
  return (
    <Sketch viewBox="0 0 100 80" className={`cyber-sketch skill-sketch skill-sketch--${kind}`}>
      <g {...inkProps}>{skillDrawings[kind] || skillDrawings.terminal}</g>
    </Sketch>
  );
}
