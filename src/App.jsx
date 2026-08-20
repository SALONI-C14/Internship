import React, { useState } from 'react';
import Button from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';
import Input from './components/Input/Input.jsx';
import Modal from './components/Modal/Modal.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import TaskFilter from './components/TaskFilter/TaskFilter.jsx';
import TaskForm from './components/TaskForm/TaskForm.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import { useTasks } from './context/TaskContext.jsx';

function Library() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const change = (event) => { const { name, value } = event.target; setValues({ ...values, [name]: value }); setErrors({ ...errors, [name]: '' }); setMessage(''); };
  const submit = (event) => { event.preventDefault(); const next = {}; if (!values.name.trim()) next.name = 'Please enter your name.'; if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.'; if (values.password.length < 8) next.password = 'Password must be at least 8 characters.'; setErrors(next); if (!Object.keys(next).length) setMessage('Form submitted successfully. Your details are ready to use.'); };
  return <div id="top"><Navbar logo="UI Library" links={[{ label: 'Overview', href: '#overview' }, { label: 'Components', href: '#components' }, { label: 'Contact', href: '#contact' }]} /><main><section className="hero" id="overview"><div><p className="eyebrow">React component system</p><h1>Reusable UI Component Library</h1><p>A collection of accessible and responsive React components designed for reuse.</p><div className="actions"><Button onClick={() => document.querySelector('#components')?.scrollIntoView({ behavior: 'smooth' })}>Explore components</Button><Button variant="outline" onClick={() => setOpen(true)}>View modal</Button></div></div><aside><strong>5 core components</strong><p>Clear APIs, responsive layouts, and keyboard-friendly interactions.</p></aside></section><section className="showcase" id="components"><section><header><span>01</span><div><h2>Button examples</h2><p>Clear actions with variants, sizes, and reliable interaction states.</p></div></header><div className="panel buttons"><Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="danger">Remove item</Button><Button variant="outline">Outline</Button><Button disabled>Disabled</Button><Button size="small" variant="secondary">Small</Button><Button size="large" variant="secondary">Large</Button></div></section><section><header><span>02</span><div><h2>Card examples</h2><p>Flexible content containers for resources and feature highlights.</p></div></header><div className="card-grid"><Card badge="Core" title="Buttons that communicate" description="A reusable action component with variants, sizes, and disabled states." buttonText="Learn more" onButtonClick={() => setOpen(true)} /><Card badge="Accessible" title="Forms built for clarity" description="Labels, error messaging, and visible focus styles support every user." buttonText="View form" onButtonClick={() => document.querySelector('#form-demo')?.scrollIntoView({ behavior: 'smooth' })} /><Card badge="Responsive" title="Layouts that adapt" description="Fluid grids keep each component comfortable on any screen." buttonText="Explore" onButtonClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} /></div></section><section id="form-demo"><header><span>03</span><div><h2>Form &amp; input examples</h2><p>Semantic fields with inline validation and accessible feedback.</p></div></header><div className="form-layout"><form className="panel form" noValidate onSubmit={submit}><Input label="Name" name="name" placeholder="Alex Morgan" value={values.name} onChange={change} required error={errors.name} /><Input label="Email" type="email" name="email" placeholder="alex@example.com" value={values.email} onChange={change} required error={errors.email} /><Input label="Password" type="password" name="password" placeholder="At least 8 characters" value={values.password} onChange={change} required error={errors.password} /><Button type="submit">Submit form</Button>{message && <p className="success" role="status">{message}</p>}</form><aside className="note"><h3>Built-in input states</h3><p>Required, error, disabled, and focus states are handled through props.</p><Input label="Disabled example" name="disabled" placeholder="Unavailable field" disabled /></aside></div></section><section><header><span>04</span><div><h2>Navbar example</h2><p>The navigation above changes into a simple menu on smaller screens.</p></div></header></section><section><header><span>05</span><div><h2>Modal example</h2><p>A focused dialog for secondary actions and detailed content.</p></div></header><div className="panel modal-example"><p>The modal closes with its close button, Escape key, or an overlay click.</p><Button onClick={() => setOpen(true)}>Open modal</Button></div></section></section></main><footer id="contact"><strong>UI Component Library</strong><span>Built with React, JavaScript, and CSS.</span></footer><Modal isOpen={open} onClose={() => setOpen(false)} title="Reusable by design"><p>Each component has a focused responsibility and accepts props to adapt its content, appearance, and behavior.</p><div className="actions"><Button variant="secondary" onClick={() => setOpen(false)}>Close</Button><Button onClick={() => setOpen(false)}>Done</Button></div></Modal></div>;
}

export function LegacyTaskManager() {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="task-manager">
      <section className="task-manager__card" aria-labelledby="page-title">
        <header className="task-manager__header">
          <p className="eyebrow">ReactJS Internship · Week 3</p>
          <h1 id="page-title">Task Manager</h1>
          <p>Manage your daily tasks with React Hooks</p>
        </header>
        <section className="statistics" aria-label="Task statistics">
          <div>
            <strong>{tasks.length}</strong>
            <span>Total tasks</span>
          </div>
          <div>
            <strong>{completedTasks}</strong>
            <span>Completed</span>
          </div>
        </section>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </section>
    </main>
  );
}

export default Library;
