import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Braces,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Terminal,
  Zap,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    name: "Destellos",
    description:
      "Experiencia editorial web para publicar relatos breves con navegación por emociones, piezas relacionadas e identidad visual propia.",
    longDescription:
      "Destellos es una plataforma narrativa desarrollada con Next.js, React y TypeScript. El proyecto organiza relatos en un archivo editorial con rutas individuales, estados de publicación, categorías emocionales, relaciones entre historias y una experiencia visual inmersiva pensada para lectura web.",
    stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Vercel"],
    features: [
      "Archivo de relatos con piezas publicadas y semillas futuras",
      "Rutas individuales para cada destello",
      "Clasificación por emociones y temas narrativos",
      "Relaciones entre relatos para navegación contextual",
      "Hero editorial con imagen full screen y motion sutil",
      "Diseño responsive enfocado en lectura e identidad visual",
    ],
    solved: [
      "Modelo de datos reusable para contenido editorial",
      "Navegación por historias relacionadas",
      "Optimización de imágenes y rutas con Next.js",
    ],
    deploy:
      "Frontend desplegado en Vercel, con estructura preparada para seguir sumando relatos, imágenes y nuevas páginas sin rearmar la experiencia base.",
    status: "Editorial web",
    url: "https://destellos.vercel.app/",
    demoLabel: "Ver sitio",
    repoLabel: "Repositorio privado",
  },
  {
    name: "Zentra",
    description:
      "Ecommerce full stack de tecnología con autenticación, carrito persistente, checkout, stock y panel admin.",
    longDescription:
      "Plataforma ecommerce desarrollada con frontend en Next.js y backend en Node.js/Express. Incluye catálogo tecnológico por categorías, ofertas, imágenes en Cloudinary, login tradicional, Google OAuth, sesión segura con cookies HTTP-only, carrito persistente en backend y administración de productos.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "Cloudinary",
      "Vercel",
      "Railway",
    ],
    features: [
      "9 categorías con 11 productos visibles por categoría",
      "Página de ofertas separada del catálogo",
      "Login tradicional y Google OAuth",
      "Carrito persistente en backend",
      "Checkout funcional y gestión de stock",
      "Panel admin para productos, precios, imágenes y ofertas",
    ],
    solved: [
      "Sesión segura con cookies HTTP-only",
      "Persistencia del carrito sin localStorage",
      "Deploy separado: frontend en Vercel y backend en Railway",
    ],
    deploy:
      "Preparado con variables de entorno, API separada, base de datos PostgreSQL y assets optimizados en Cloudinary.",
    status: "Full stack",
    url: "https://zentra-danielmedinamauricio92-2024s-projects.vercel.app",
    demoLabel: "Ver demo",
    repoLabel: "Repositorio pronto",
  },
];

const technologies = [
  {
    name: "HTML5",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Vercel",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Railway",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg",
  },
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

        <aside className="hero-console" aria-label="Perfil cyber terminal">
          <div className="portrait-frame">
            <img src="/daniel-medina.png" alt="Retrato de Daniel Medina" />
            <div className="portrait-scanline" />
            <div className="portrait-badge">PROFILE_LOCKED</div>
          </div>
          <div className="terminal-card" aria-label="Terminal decorativa">
            <div className="terminal-header">
              <span />
              <span />
              <span />
              <strong>system.exe</strong>
            </div>
            <div className="terminal-body">
              {commands.map((command, index) => (
                <p
                  key={`${command}-${index}`}
                  className={index % 2 === 0 ? "prompt" : "output"}
                >
                  {index % 2 === 0 ? "$ " : ""}
                  {command}
                </p>
              ))}
              <p className="prompt active">
                $ iniciando_portfolio<span className="cursor">_</span>
              </p>
            </div>
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
          <h2>Tecnologías que uso para construir.</h2>
        </div>
        <div className="tech-grid">
          {technologies.map((technology) => (
            <article className="tech-card" key={technology.name}>
              <img src={technology.image} alt="" loading="lazy" />
              <h3>{technology.name}</h3>
            </article>
          ))}
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
              {"longDescription" in project ? (
                <p className="project-long">{project.longDescription}</p>
              ) : null}
              {project.url ? (
                <a
                  className="project-preview"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.name}`}
                >
                  <span className="preview-toolbar">
                    <span />
                    <span />
                    <span />
                    <strong>
                      {project.name === "Zentra"
                        ? "zentra.vercel.app"
                        : "destellos.vercel.app"}
                    </strong>
                  </span>
                  <span className="preview-content">
                    <span className="preview-kicker">{project.name}</span>
                    <span className="preview-title">
                      {project.name === "Zentra"
                        ? "Ecommerce full stack de tecnología"
                        : "Relatos breves con identidad visual"}
                    </span>
                    <span className="preview-link">
                      {project.demoLabel}
                      <ArrowUpRight size={15} />
                    </span>
                  </span>
                </a>
              ) : null}
              {"features" in project ? (
                <div className="project-detail">
                  <div>
                    <h4>Funcionalidades</h4>
                    <ul>
                      {project.features?.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Problemas resueltos</h4>
                    <ul>
                      {project.solved?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="deploy-note">
                    <h4>Producción / deploy</h4>
                    <p>{project.deploy}</p>
                  </div>
                </div>
              ) : null}
              {"repoLabel" in project ? (
                <div className="project-actions">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.demoLabel}
                    <ArrowUpRight size={15} />
                  </a>
                  <span>{project.repoLabel}</span>
                </div>
              ) : null}
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
          <a href="mailto:danielmedinamauricio92@gmail.com" aria-label="Enviar email">
            <Mail size={18} />
            Email
          </a>
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
