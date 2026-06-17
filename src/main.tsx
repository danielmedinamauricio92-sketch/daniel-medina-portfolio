import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  Linkedin,
  Mail,
  MonitorCog,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    name: "Destellos",
    description:
      "Experiencia editorial web construida para publicar relatos breves con una identidad visual cuidada.",
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    status: "En producción",
  },
  {
    name: "Job Alerts",
    description:
      "Automatización para revisar correos, filtrar oportunidades y ordenar alertas laborales.",
    stack: ["Apps Script", "Gmail", "Automatización"],
    status: "Interno",
  },
  {
    name: "Reels Engine",
    description:
      "Sistema para transformar historias en videos verticales con escenas, timing y assets reutilizables.",
    stack: ["Remotion", "React", "Node.js"],
    status: "Experimental",
  },
];

const skills = [
  { icon: Code2, label: "Frontend", detail: "React, Next.js, TypeScript, Tailwind" },
  { icon: Server, label: "Backend", detail: "Node.js, APIs, integraciones y datos" },
  { icon: MonitorCog, label: "Producto", detail: "UI funcional, performance y despliegue" },
  { icon: ShieldCheck, label: "Workflow", detail: "Git, automatización, testing y documentación" },
];

const commands = [
  "whoami",
  "Daniel Medina",
  "stack --list",
  "React  TypeScript  Node  Vercel",
  "mission --current",
  "Construir experiencias web claras, veloces y memorables.",
];

function App() {
  return (
    <main className="portfolio-shell">
      <div className="grid-glow" />
      <nav className="nav-bar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <Terminal size={19} />
          <span>daniel@portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <Zap size={16} />
            Disponible para crear, mejorar y desplegar productos web
          </p>
          <h1>Daniel Medina</h1>
          <p className="role">Desarrollador web con mentalidad full stack.</p>
          <p className="intro">
            Diseño y construyo interfaces modernas, automatizaciones útiles y
            experiencias digitales con foco en claridad, velocidad y detalle.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#proyectos">
              Ver proyectos
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-action" href="#contacto">
              Contactar
              <Mail size={18} />
            </a>
          </div>
        </div>

        <aside className="terminal-card" aria-label="Terminal decorativa">
          <div className="terminal-header">
            <span />
            <span />
            <span />
            <strong>system.exe</strong>
          </div>
          <div className="terminal-body">
            {commands.map((command, index) => (
              <p key={`${command}-${index}`} className={index % 2 === 0 ? "prompt" : "output"}>
                {index % 2 === 0 ? "$ " : ""}
                {command}
              </p>
            ))}
            <p className="prompt active">$ iniciando_portfolio<span className="cursor">_</span></p>
          </div>
        </aside>
      </section>

      <section className="section-band about-band">
        <div>
          <p className="section-kicker">Sobre mí</p>
          <h2>Construyo con criterio técnico y sensibilidad visual.</h2>
        </div>
        <p>
          Me interesa convertir ideas en piezas digitales concretas: sitios,
          herramientas, automatizaciones y flujos que funcionan bien desde el
          primer uso. Trabajo combinando estructura, estética y una obsesión
          sana por dejar las cosas más claras de lo que estaban.
        </p>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Stack</p>
          <h2>Herramientas listas para producción.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article className="skill-card" key={skill.label}>
                <Icon size={24} />
                <h3>{skill.label}</h3>
                <p>{skill.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="section-heading">
          <p className="section-kicker">Proyectos</p>
          <h2>Trabajos con intención, código y despliegue.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <Braces size={22} />
                <span>{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contacto">
        <div>
          <p className="section-kicker">Contacto</p>
          <h2>¿Construimos algo?</h2>
          <p>
            Estoy listo para colaborar en proyectos web, automatizaciones y
            productos digitales que necesiten una ejecución prolija.
          </p>
        </div>
        <div className="contact-actions">
          <span aria-label="Email pendiente de configurar">
            <Mail size={18} />
            Email pronto
          </span>
          <a
            href="https://github.com/danielmedinamauricio92-sketch"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mauricio-daniel-medina"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <Rocket size={17} />
        <span>Daniel Medina · Portfolio cyber terminal · 2026</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
