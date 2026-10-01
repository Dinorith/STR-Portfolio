import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, Route, Switch, useLocation, useParams } from 'wouter';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import NotFound from '@/pages/not-found';
import type { SculptureControls } from '@/components/hero-sculpture-3d';

const HeroSculpture3D = lazy(() => import('@/components/hero-sculpture-3d'));

type Project = { slug:string; name:string; category:string; label:string; year:string; desc:string; theme:string; };
const projects:Project[] = [
  { slug:'niva-premium-app', name:'NIVA PREMIUM APP', category:'MOBILE PRODUCT DESIGN', label:'NIVA', year:'2026', desc:'A considered mobile product concept for making everyday money feel clearer, calmer, and more human.', theme:'featured' },
  { slug:'student-app', name:'STUDENT APP', category:'MOBILE APP', label:'STUDENT', year:'2026', desc:'A student-first mobile experience that brings campus life, schedules, and essential resources into one place.', theme:'student' },
  { slug:'mobile-design-system', name:'MOBILE DESIGN SYSTEM', category:'DESIGN SYSTEM', label:'SYSTEM', year:'2026', desc:'A modular visual language exploring consistency, flexibility, and useful detail across mobile interfaces.', theme:'system' },
  { slug:'creative-website', name:'CREATIVE WEBSITE', category:'WEB DESIGN', label:'WEBSITE', year:'2026', desc:'An editorial web direction built to give a creative practice a distinctive and flexible digital home.', theme:'website' },
];
const processItems = [
  ['01','DISCOVER','Get close to the brief, the people, and the conditions around the problem.'],
  ['02','RESEARCH','Look for patterns in what people need, do, and struggle with.'],
  ['03','DEFINE','Turn the signal into a focused problem and a useful direction.'],
  ['04','DESIGN','Shape the experience from structure to visual language.'],
  ['05','PROTOTYPE','Make ideas tangible enough to question, test, and improve.'],
  ['06','TEST','Learn from real use and refine what matters most.'],
];
const faqs = [
  ['WHAT TOOLS DO YOU USE?','Figma is at the centre of my process, with FigJam, Framer, Webflow, Notion, and Adobe tools supporting the work. The tool follows the problem.'],
  ['HOW LONG DOES A PROJECT TAKE?','It depends on the scope and how quickly we can make decisions together. We will agree on clear milestones before the work begins.'],
  ['DO YOU WORK WITH DEVELOPERS?','Yes. I value close collaboration with developers and prepare thoughtful, practical handoffs that keep the intent intact.'],
  ['CAN I HIRE YOU?','I am available for selected projects. Send a short note about what you are making and where you need design support.'],
  ['WHAT DO YOU NEED TO START?','A little context goes a long way: the challenge, the people it affects, what you have tried, and what a good outcome would mean.'],
];
const socials = ['BEHANCE','DRIBBBLE','LINKEDIN','INSTAGRAM'];

function Nav() {
  const [open,setOpen]=useState(false);
  const [location,setLocation]=useLocation();
  useEffect(()=>{ document.body.style.overflow=open?'hidden':''; return ()=>{document.body.style.overflow='';}; },[open]);
  const go=(hash:string)=>{setOpen(false); if(location!=='/') {setLocation('/');window.setTimeout(()=>document.getElementById(hash)?.scrollIntoView({behavior:'smooth'}),40);} else document.getElementById(hash)?.scrollIntoView({behavior:'smooth'});};
  return <>
    <header className="nav-shell">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Sothearith home">SR<sup>™</sup></Link>
        <div className="nav-links">
          <a href="/#about" onClick={e=>{e.preventDefault();go('about')}}>ABOUT</a>
          <a href="/#work" onClick={e=>{e.preventDefault();go('work')}}>WORK</a>
          <a href="/#process" onClick={e=>{e.preventDefault();go('process')}}>PROCESS</a>
          <a href="/#contact" onClick={e=>{e.preventDefault();go('contact')}}>CONTACT</a>
        </div>
        <a className="nav-cta" href="mailto:hello@example.com">START A PROJECT <ArrowRight size={14}/></a>
        <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?'Close menu':'Open menu'} data-testid="button-menu">{open?<><X size={15}/> CLOSE</>:<>MENU <Menu size={15}/></>}</button>
      </nav>
    </header>
    {open&&<div className="menu-overlay">
      <a href="/#about" onClick={e=>{e.preventDefault();go('about')}}>ABOUT</a>
      <a href="/#work" onClick={e=>{e.preventDefault();go('work')}}>WORK</a>
      <a href="/#process" onClick={e=>{e.preventDefault();go('process')}}>PROCESS</a>
      <a href="/#contact" onClick={e=>{e.preventDefault();go('contact')}}>CONTACT <ArrowUpRight size={34}/></a>
      <p className="mono">CAMBODIA — AVAILABLE FOR SELECTED PROJECTS</p>
    </div>}
  </>;
}

function Loader() {
 const [show,setShow]=useState(true);
 useEffect(()=>{const t=window.setTimeout(()=>setShow(false),480);return()=>window.clearTimeout(t);},[]);
 return <div className={`loading-screen ${show?'':'done'}`} aria-hidden={!show}><div className="loader-title">SOTHEARITH™</div><div className="mono">INITIALIZING EXPERIENCE...</div><div className="loader-bar"/><div className="mono">80% / READY</div></div>;
}
function Marquee({ reverse=false }: { reverse?:boolean }) {
 const text='UI/UX DESIGN — PRODUCT DESIGN — DIGITAL EXPERIENCES — INTERACTION — ';
 return <div className={`marquee ${reverse?'reverse':''}`} aria-label="UI/UX design, product design, digital experiences"><div className="marquee-track" aria-hidden="true">{Array.from({length:4},(_,i)=><span key={i}>{text}</span>)}</div></div>;
}
function Sculpture() {
  const controls = useRef<SculptureControls>({ targetX: 0, targetY: 0, dragging: false });
  const [ready, setReady] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(query.matches);
    updateMotionPreference();
    query.addEventListener('change', updateMotionPreference);

    try {
      const testCanvas = document.createElement('canvas');
      const context = testCanvas.getContext('webgl2') ?? testCanvas.getContext('webgl');
      setWebglAvailable(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setWebglAvailable(false);
    }

    return () => query.removeEventListener('change', updateMotionPreference);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse' || window.matchMedia('(pointer: coarse)').matches) return;
    if (controls.current.dragging) {
      controls.current.targetY += event.movementX * 0.007;
      controls.current.targetX += event.movementY * 0.007;
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    controls.current.targetY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.32;
    controls.current.targetX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -0.24;
  };

  return <div className={`hero-art${ready ? ' webgl-active' : ''}`} aria-label="Interactive dark chrome digital sculpture">
   <div className="sculpture-stage" tabIndex={0} role="group" data-cursor="drag" aria-label="Interactive chrome sculpture. Move your pointer or drag to rotate; use the arrow keys when focused."
    onPointerMove={handlePointerMove}
    onPointerLeave={()=>{if(!controls.current.dragging){controls.current.targetX=0;controls.current.targetY=0;}}}
    onPointerDown={event=>{if(!reducedMotion&&event.pointerType==='mouse'&&!window.matchMedia('(pointer: coarse)').matches){controls.current.dragging=true;event.currentTarget.setPointerCapture(event.pointerId);}}}
    onPointerUp={event=>{controls.current.dragging=false;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);}}
    onPointerCancel={()=>{controls.current.dragging=false;}}
    onKeyDown={event=>{if(reducedMotion)return;if(event.key==='ArrowLeft')controls.current.targetY-=0.12;else if(event.key==='ArrowRight')controls.current.targetY+=0.12;else if(event.key==='ArrowUp')controls.current.targetX-=0.1;else if(event.key==='ArrowDown')controls.current.targetX+=0.1;else return;event.preventDefault();}}>
    <div className="sculpture-orbit"/><div className="sculpture-orbit two"/><div className="sculpture"/>
    {webglAvailable&&<Suspense fallback={null}><HeroSculpture3D controls={controls} reducedMotion={reducedMotion} onReady={()=>setReady(true)}/></Suspense>}
   <span className="art-label top mono">OBJECT / 001<br/>DIGITAL ARTIFACT</span>
   <span className="art-label bottom mono">MATERIAL / CHROME<br/>DRAG TO EXPLORE</span>
  </div>
  <span className="coord mono">ROTATION / 032°</span>
 </div>;
}
function CustomCursor() {
 const [cursor,setCursor]=useState({x:0,y:0,visible:false,mode:'default'});
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarse=window.matchMedia('(pointer: coarse)');
  if(reduced.matches||coarse.matches)return;
  document.documentElement.classList.add('has-custom-cursor');
  const move=(event:PointerEvent)=>{
   if(event.pointerType!=='mouse')return;
   const target=event.target instanceof Element?event.target.closest('[data-cursor],a,button'):null;
   let mode='default';
   if(target instanceof HTMLElement)mode=target.dataset.cursor??'link';
   setCursor({x:event.clientX,y:event.clientY,visible:true,mode});
  };
  const hide=(event:PointerEvent)=>{if(event.relatedTarget===null)setCursor(value=>({...value,visible:false}));};
  window.addEventListener('pointermove',move);
  window.addEventListener('pointerout',hide);
  return()=>{document.documentElement.classList.remove('has-custom-cursor');window.removeEventListener('pointermove',move);window.removeEventListener('pointerout',hide);};
 },[]);
 return <div aria-hidden="true" className={`custom-cursor cursor-${cursor.mode}`} style={{left:cursor.x,top:cursor.y,opacity:cursor.visible?1:0}}>{cursor.mode==='project'?'VIEW →':cursor.mode==='drag'?'DRAG':''}</div>;
}
function Hero() {
 const reduceMotion=useReducedMotion();
 return <section className="hero wrap" id="top">
  <div className="hero-meta"><span className="mono">[01 / INTRODUCTION]</span><span className="mono availability"><i className="status-dot"/> AVAILABLE FOR SELECTED PROJECTS — 2026</span></div>
  <div className="hero-copy">
    <motion.h1 className="hero-title" initial={reduceMotion?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.42,ease:'easeOut'}}><span className="line">HEY, I'M</span><span className="line">SOTHEARITH.</span><span className="line muted" style={{marginTop:'.2em'}}>I DESIGN</span><span className="line blue">DIGITAL</span><span className="line muted">EXPERIENCES.</span></motion.h1>
   <div className="hero-role mono"><span>UI/UX DESIGNER</span><span>PRODUCT DESIGNER</span><span>CREATIVE THINKER</span></div>
   <p className="hero-description">I create thoughtful digital experiences that turn complex ideas into simple, useful products.</p>
   <div className="button-row"><a className="btn btn-dark" href="#work">VIEW MY WORK <ArrowUpRight size={15}/></a><a className="btn btn-light" href="mailto:hello@example.com">LET'S WORK <ArrowRight size={15}/></a></div>
  </div>
  <Sculpture/>
  <div className="hero-bottom"><span className="mono">11°33'N &nbsp; 104°55'E<br/>CAMBODIA → WORLDWIDE</span><a className="mono scroll-hint" href="#work">SCROLL TO EXPLORE <ArrowDown size={13}/></a><span className="mono">SYSTEM: DESIGN / RESEARCH / PROTOTYPE</span></div>
 </section>;
}

function Phone() {
 return <div className="phone" aria-hidden="true"><div className="phone-top"><span>9:41</span><span>•••</span></div><div className="app-mark">niva<span style={{color:'#0057ff'}}>.</span></div><div className="mono" style={{marginTop:5}}>YOUR MONEY, IN VIEW</div><div className="phone-hero">A little more<br/>room to grow.</div><div className="phone-row"><span>Everyday account</span><b>$2,480</b></div><div className="phone-row"><span>Weekly spend</span><b>$146</b></div><div className="phone-button">SEE YOUR ACTIVITY →</div></div>;
}
function ProjectVisual({ project }: { project:Project }) {
 if(project.theme==='featured') return <div className="project-visual"><div className="back-phone"/><Phone/></div>;
 if(project.theme==='student') return <div className="project-visual phone-set"><Phone/><Phone/><Phone/></div>;
 if(project.theme==='system') return <div className="project-visual"><div className="system-board"><div className="board-cell">BUTTONS<div className="btn-dark" style={{padding:8,fontSize:8}}>CONTINUE →</div></div><div className="board-cell">COLOUR<div className="swatches"><i/><i/><i/><i/></div></div><div className="board-cell">TYPEFACE<br/><b style={{fontSize:20,letterSpacing:'-.08em'}}>Aa Bb</b></div><div className="board-cell">INPUT<br/><span style={{borderBottom:'1px solid',padding:5}}>Search anything…</span></div></div></div>;
 return <div className="project-visual"><div className="mock-site"><div className="mock-header"><b>STUDIO / 04</b><span>MENU +</span></div><h3>MAKE<br/>SPACE<br/>FOR IDEAS.</h3><div className="mono">AN OPEN CANVAS FOR WHAT'S NEXT.</div><div className="mock-block"/></div></div>;
}
function Work() {
 const [active,setActive]=useState(projects[0].slug);
 useEffect(()=>{
  const observers:IntersectionObserver[]=[];
  projects.forEach(p=>{const el=document.getElementById(p.slug);if(el){const ob=new IntersectionObserver(entries=>{if(entries[0].isIntersecting)setActive(p.slug)},{rootMargin:'-35% 0px -45% 0px'});ob.observe(el);observers.push(ob);}});
  return()=>observers.forEach(o=>o.disconnect());
 },[]);
 return <section id="work" className="section wrap">
   <div className="section-kicker mono">02 / SELECTED WORK</div>
   <div className="projects-head"><h2 className="display">PROJECTS<br/>I'VE BUILT.</h2><p>A selection of interfaces, products, and digital experiences. Each project here is a design exploration, made to ask better questions and make useful ideas tangible.</p></div>
   <div className="project-layout">
    <nav className="project-index" aria-label="Project index">{projects.map((p,i)=><a key={p.slug} className={active===p.slug?'active':''} href={`#${p.slug}`}><span className="index-dot">{active===p.slug?'●':'○'}</span> 0{i+1} {p.label}</a>)}</nav>
    <div className="project-stack">{projects.map((p,i)=><Link href={`/work/${p.slug}`} className={`project-card ${p.theme}`} id={p.slug} key={p.slug} aria-label={`View case study: ${p.name}`} data-cursor="project" data-testid={`link-project-${p.slug}`}>
      <div className="project-info"><span className="project-number">0{i+1}</span><div><span className="mono">{p.category} / {p.year}</span><h3 className="project-title">{p.name}</h3><p className="project-detail">{p.desc}</p></div><div><div className="project-tags">{(i===0?['UX RESEARCH','UI DESIGN','PROTOTYPING']:i===1?['MOBILE UX','PRODUCT DESIGN']:i===2?['COMPONENTS','VISUAL SYSTEM']:['ART DIRECTION','WEB DESIGN']).map(tag=><span key={tag}>{tag}</span>)}</div><span className="project-link">VIEW CASE STUDY <ArrowRight size={14}/></span></div></div>
      <ProjectVisual project={p}/>
    </Link>)}</div>
   </div>
  </section>;
}
function About() {
 return <section id="about" className="section wrap">
  <div className="section-kicker mono">03 / ABOUT</div>
  <div className="about-grid"><div><h2 className="about-title">I LIKE<br/>MAKING<br/>COMPLICATED<br/>THINGS SIMPLE.</h2><p className="about-copy">I'm Sothearith, a UI/UX designer focused on creating digital products that are clear, useful, and intentional. I work from Cambodia, partnering with people who care about making things better.</p><div className="bio-facts">{[['NAME','SOTHEARITH'],['ROLE','UI/UX DESIGNER'],['LOCATION','CAMBODIA'],['STATUS','AVAILABLE']].map(([k,v])=><div className="bio-fact" key={k}><span className="mono">{k}</span><strong>{v}</strong></div>)}</div></div><div className="portrait-placeholder" role="img" aria-label="Abstract typographic portrait placeholder, portrait coming soon"><span className="portrait-text">PORTRAIT<br/>COMING<br/>SOON</span><span className="mono" style={{position:'absolute',bottom:12,left:12}}>NO IMAGE / BY DESIGN</span></div></div>
 </section>;
}
function Philosophy() {
 const data=[['01','CLARITY','Make the next step obvious.'],['02','FUNCTION','Design should solve a real problem.'],['03','DETAIL','Small decisions create meaningful experiences.']];
 return <section className="section wrap"><div className="section-kicker mono">DESIGN PHILOSOPHY</div><div className="principles">{data.map(d=><article className="principle" key={d[0]}><span className="principle-num">{d[0]} / PRINCIPLE</span><h3>{d[1]}</h3><p>{d[2]}</p></article>)}</div></section>;
}
function Process() {
 return <section className="section wrap" id="process"><div className="section-kicker mono">04 / PROCESS</div><div className="process-grid"><div className="process-intro"><h2 className="display">HOW<br/>I WORK.</h2><p style={{maxWidth:320,lineHeight:1.6}}>A flexible, collaborative path from a first question to a considered experience. The right process makes room for what we learn.</p></div><div className="timeline">{processItems.map(([n,title,description])=><article className="process-item" key={n}><span className="step">{n}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>;
}
function Toolbox() {
 const tools=['FIGMA','FRAMER','WEBFLOW','FIGJAM','NOTION','PHOTOSHOP','ILLUSTRATOR'];
 const skills=['UX RESEARCH','WIREFRAMING','PROTOTYPING','DESIGN SYSTEMS','INTERACTION DESIGN','RESPONSIVE DESIGN'];
 return <section className="section wrap"><div className="section-kicker mono">05 / TOOLBOX</div><div className="tool-layout"><div className="tool-intro"><h2 className="display">TOOLS<br/>I USE.</h2><p style={{lineHeight:1.6,maxWidth:290}}>A practical toolkit for asking, exploring, making, and communicating ideas.</p></div><div><div className="tool-tags">{tools.map(t=><span className="tool-tag" key={t}>{t}</span>)}</div><div className="skill-list">{skills.map(s=><span key={s}>{s}</span>)}</div></div></div></section>;
}
function FAQ() {
 const [open,setOpen]=useState<number|null>(0);
 return <section className="section wrap"><div className="section-kicker mono">06 / QUESTIONS</div><div className="faq-wrap"><h2 className="display">YOU ASKED.<br/>I ANSWERED.</h2><div>{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button className="faq-question" aria-expanded={open===i} aria-controls={`faq-answer-${i}`} onClick={()=>setOpen(open===i?null:i)} data-testid={`button-faq-${i}`}><span>{q}</span><span className="plus">+</span></button>{open===i&&<div className="faq-answer" id={`faq-answer-${i}`}>{a}</div>}</div>)}</div></div></section>;
}
function Contact() {
 return <section className="contact" id="contact"><div className="wrap"><div className="section-kicker mono">07 / HAVE A GOOD ONE IN MIND?</div><div className="contact-inner"><h2>LET'S<br/>MAKE<br/>SOMETHING<br/><span>GOOD.</span></h2><div><p className="contact-copy">Have a project, product, or idea in mind? Tell me what you're thinking. We can work out the useful next step together.</p><a className="btn contact-btn" href="mailto:hello@example.com?subject=Let%E2%80%99s%20make%20something%20good">START A PROJECT <ArrowUpRight size={17}/></a></div></div><div className="contact-meta"><div><span className="mono">EMAIL</span><p><a href="mailto:hello@example.com">hello@example.com</a></p></div><div><span className="mono">LOCATION</span><p>CAMBODIA</p></div><div><span className="mono">SOCIALS</span><div className="socials">{socials.map(s=><a key={s} href={s==='BEHANCE'?'https://www.behance.net/':s==='DRIBBBLE'?'https://dribbble.com/':s==='LINKEDIN'?'https://www.linkedin.com/':'https://www.instagram.com/'} target="_blank" rel="noreferrer">{s}</a>)}</div></div></div></div><Footer/></section>;
}
function Footer() {
 return <footer className="footer"><div className="wrap footer-row"><div className="footer-brand">SR<sup>™</sup></div><span className="mono">UI/UX DESIGNER<br/>PRODUCT DESIGNER</span><span className="mono">CAMBODIA → WORLDWIDE</span><span className="mono">© 2026 SOTHEARITH<br/>BUILT WITH INTENTION.</span></div></footer>;
}
function Home() {
 useEffect(()=>{document.title='Sothearith — UI/UX & Product Designer';const m=document.querySelector('meta[name="description"]');if(m)m.setAttribute('content','Sothearith is a UI/UX and product designer based in Cambodia, creating thoughtful digital experiences.');},[]);
 return <><Loader/><CustomCursor/><Nav/><main><Hero/><Marquee/><Work/><About/><Philosophy/><Marquee reverse/><Process/><Toolbox/><FAQ/><Contact/></main></>;
}

function CaseStudy() {
 const reduceMotion=useReducedMotion();
 const params=useParams<{slug:string}>();
 const project=projects.find(p=>p.slug===params.slug);
 useEffect(()=>{if(project){document.title=`${project.name} — Sothearith`;window.scrollTo(0,0);}},[project]);
 if(!project) return <NotFound/>;
 const index=projects.indexOf(project);
 const caseColor=project.theme==='student'?'#d6ff67':project.theme==='system'?'#d9e2ff':project.theme==='website'?'#f4d9c6':'#e8f0ff';
 return <><Nav/><main className="wrap">
  <div style={{paddingTop:35}}><Link href="/" className="case-back"><ArrowLeft size={14}/> BACK TO WORK</Link></div>
  <section className="study-hero" style={{background:caseColor}}>
    <motion.div className="study-hero-copy" initial={reduceMotion?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45,ease:'easeOut'}}><span className="mono">0{index+1} / {project.category} / {project.year}</span><h1>{project.name}</h1><p className="mono">PORTFOLIO CONCEPT / DESIGN EXPLORATION</p><a className="btn btn-dark" href="#case-content">EXPLORE THE PROJECT <ArrowDown size={15}/></a></motion.div>
   <div className="study-art"><span className="project-number" style={{fontSize:'clamp(150px,25vw,330px)',opacity:.12}}>0{index+1}</span><ProjectVisual project={project}/></div>
  </section>
  <div id="case-content">
   <StudySection number="01" title="THE PROBLEM"><p>{project.desc} This concept begins with a familiar design challenge: how might a digital product give people a clearer, more confident way to move through something that can feel complicated?</p></StudySection>
   <StudySection number="02" title="THE GOAL"><p>Explore a useful product experience with a clear information hierarchy, a recognisable visual voice, and interfaces that make the next step feel easy to understand. The work shown here is a portfolio design concept, not a live client product.</p></StudySection>
   <StudySection number="03" title="RESEARCH"><div className="study-notes">{[['PEOPLE','Understand the context and needs behind each interaction.'],['FRICTION','Notice where unclear language or structure creates extra effort.'],['OPPORTUNITY','Prioritise the moments where clarity can make the experience feel better.']].map(([t,d])=><div className="study-note" key={t}><strong>{t}</strong><p>{d}</p></div>)}</div></StudySection>
   <StudySection number="04" title="WIREFRAMES"><p>Early structures keep attention on flow before visual polish. These abstract layouts show how content, decisions, and primary actions can be organised into a considered journey.</p><div className="wireframe-board"><div className="wire"/><div className="wire"/><div className="wire"/><div className="wire"/><div className="wire"/></div></StudySection>
   <StudySection number="05" title="VISUAL SYSTEM"><p>A compact visual language balances strong typographic hierarchy with functional components. The details are designed to feel expressive without obscuring the task.</p><div className="visual-system"><div className="visual-type">{project.label}<br/>MADE<br/>CLEAR.</div><div><span className="mono">COLOUR STUDY / 04 TONES</span><div className="color-row"><i/><i/><i/><i/></div><p className="mono">SPACE GROTESK / DM MONO</p></div></div></StudySection>
   <StudySection number="06" title="FINAL DESIGN"><p>The final interface direction brings the structure and visual system together. Screen details below are concept mockups made to communicate a possible product experience.</p><div className="prototype"><Phone/><div><span className="mono">KEY SCREEN / 001</span><h3 style={{fontSize:34,letterSpacing:'-.08em',lineHeight:.9}}>A CLEARER<br/>VIEW OF WHAT<br/>MATTERS.</h3><p>Focused hierarchy. Familiar patterns. One purposeful next action.</p></div></div></StudySection>
   <StudySection number="07" title="PROTOTYPE"><p>A prototype can help test whether navigation, feedback, and the main interaction make sense in sequence. This case study is presented as a visual design concept; no live prototype or measured usability results are claimed.</p><div className="study-notes"><div className="study-note"><strong>FLOW / START</strong><p>Orient the user and make the primary action visible.</p></div><div className="study-note"><strong>FLOW / EXPLORE</strong><p>Keep the important information close to the decision.</p></div><div className="study-note"><strong>FLOW / CONFIRM</strong><p>Provide a clear response when an action is complete.</p></div></div></StudySection>
   <StudySection number="08" title="RESULT"><p>A coherent concept direction for {project.name.toLowerCase()}—bringing together problem framing, interface structure, and a distinctive visual language. This work is an independent portfolio exploration; it does not represent validated business or performance outcomes.</p></StudySection>
  </div>
  <div className="case-nav"><Link href="/" className="case-back"><ArrowLeft size={14}/> BACK TO WORK</Link><Link href={`/work/${projects[(index+1)%projects.length].slug}`} className="case-back">NEXT PROJECT <ArrowRight size={14}/></Link></div>
 </main><Contact/></>;
}
function StudySection({number,title,children}:{number:string;title:string;children:ReactNode}) {
 return <section className="study-section"><span className="study-number">{number}</span><div><h2>{title}</h2>{children}</div></section>;
}
function Router() {
 return <Switch><Route path="/" component={Home}/><Route path="/work/:slug" component={CaseStudy}/><Route component={NotFound}/></Switch>;
}
export default function App() { return <Router/>; }
