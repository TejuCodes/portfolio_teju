import "./Projects.css";

const projects = [

{
title:"Trident RedOps Academy",
description:"Modern cybersecurity academy website built using React and Vite.",
stack:"React • Vite • CSS",
},

{
title:"Hermes AI Agent",
description:"Local AI Agent integrated with Ollama, Telegram Bot and custom LLM.",
stack:"Python • Ollama • AI",
},

{
title:"Cyber Buddy Robot",
description:"Affordable ESP32-powered cybersecurity desktop assistant.",
stack:"ESP32 • IoT • Arduino",
},

{
title:"Portfolio Website",
description:"Personal portfolio built with React and modern UI design.",
stack:"React • CSS",
},

{
title:"DVWA Lab Notes",
description:"Hands-on vulnerable web application testing and exploitation.",
stack:"Security • OWASP",
}

];

function Projects(){

return(

<section className="projects-page">

<div className="projects-header">

<p className="section-tag">
PROJECTS
</p>

<h1>
Things I've Built
</h1>

<p>
A collection of cybersecurity, AI and web development projects.
</p>

</div>

<div className="project-list">

{projects.map((project,index)=>(

<div className="project-item" key={index}>

<div>

<h2>{project.title}</h2>

<p>{project.description}</p>

</div>

<span>{project.stack}</span>

</div>

))}

</div>

</section>

)

}

export default Projects;