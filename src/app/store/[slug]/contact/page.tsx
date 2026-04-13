export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 w-full bg-white/70 backdrop-blur-xl font-['Epilogue'] tracking-tight shadow-[0_8px_32px_rgba(255,209,102,0.15)]">
<div className="text-2xl font-black text-[#2B1B3D] dark:text-white">RadiantCreator</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#2B1B3D] hover:text-[#FFD166] transition-colors" href="#">About</a>
<a className="text-[#2B1B3D] hover:text-[#FFD166] transition-colors" href="#">Storefront</a>
<a className="text-[#FFD166] font-bold border-b-4 border-[#FFD166] pb-1" href="#">Contact</a>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-on-surface cursor-pointer hover:scale-110 transition-transform" data-icon="shopping_bag">shopping_bag</span>
<button className="bg-primary-container text-on-primary-fixed px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-300">Get Started</button>
</div>
</nav>
<main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
{/*  Header Section  */}
<header className="mb-16 text-center md:text-left">
<span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get in touch</span>
<h1 className="font-headline text-5xl md:text-7xl font-black text-on-background leading-tight mb-6">
                Let's create something <br/><span className="text-primary-container drop-shadow-sm">vibrant</span> together.
            </h1>
<p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                Whether you're looking for a bespoke brand strategy or just want to say hello, our creator studio is always open for bold ideas.
            </p>
</header>
{/*  Main Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Contact Form Container  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-bold text-tertiary uppercase tracking-wider ml-1">Name</label>
<input className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-tertiary uppercase tracking-wider ml-1">Instagram Handle</label>
<div className="relative">
<span className="absolute left-4 top-4 text-outline">@</span>
<input className="w-full bg-surface-container-low border-0 rounded-lg p-4 pl-8 focus:ring-2 focus:ring-secondary transition-all outline-none" placeholder="username" type="text"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-tertiary uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" placeholder="hello@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-tertiary uppercase tracking-wider ml-1">Message</label>
<textarea className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all outline-none resize-none" placeholder="Tell us about your project..." rows={4}></textarea>
</div>
<button className="w-full md:w-auto bg-primary-container hover:bg-inverse-primary text-on-primary-fixed py-5 px-12 rounded-xl text-xl font-black tracking-tight transition-all active:scale-95 shadow-[0_8px_32px_rgba(255,209,102,0.3)]" type="submit">
                        Send Message
                    </button>
</form>
</div>
{/*  Side Assets: Map & WhatsApp  */}
<div className="lg:col-span-5 space-y-8">
{/*  Map Placeholder  */}
<div className="bg-surface-container-low rounded-lg overflow-hidden h-[350px] relative group">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="Modern abstract map illustration with minimalist city streets in pastel tones and sunny yellow highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6sbO4zQhXnfn6i-d8bJ3r7Qy9tY0WFQN1aI8aZjL2QfQCjpHSSjBDAbMdHs-zZ6yR5bysMtKfBh5jvQDSVMXF9AP28_9WPjFYGSBrV9NpR7J7D-6Srf-rhp4QvNLwdYjAfTXqB-pF9M6lnnOE01K4GILwP14Www7XE4iOqfXncIYrjeKSYfnoRqB4EvuhWl-MYaewbfidqlef_GFXz38Cx2wDRZ5bQESP8K-BPQYV9yrONyKaz1TDzDUPgufnqRz7ZeFEwug-V6En"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-lg flex items-center gap-4">
<div className="bg-primary-container p-3 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-fixed" data-icon="location_on">location_on</span>
</div>
<div>
<p className="font-bold text-on-surface">Creative Hub HQ</p>
<p className="text-sm text-on-surface-variant">Venice Beach, CA</p>
</div>
</div>
</div>
{/*  WhatsApp CTA  */}
<div className="bg-surface-container-high p-8 rounded-lg space-y-6">
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined text-secondary" data-icon="chat">chat</span>
</div>
<div>
<h3 className="text-xl font-black font-headline text-on-background">Instant Reach</h3>
<p className="text-on-surface-variant">Prefer a quick chat? Our team is active on WhatsApp for direct inquiries.</p>
</div>
</div>
<a className="flex items-center justify-center gap-3 w-full bg-on-background text-white py-4 rounded-xl font-bold hover:bg-tertiary transition-colors group" href="#">
<span>Chat on WhatsApp</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full py-12 px-8 mt-auto bg-[#f3f0ed] dark:bg-[#2B1B3D]">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-8 md:space-y-0">
<div className="text-lg font-black text-[#2B1B3D] dark:text-white">RadiantCreator</div>
<p className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df]">
                © 2024 RADIANT EDITOR. BUILT FOR CREATORS.
            </p>
<div className="flex gap-8">
<a className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors" href="#">Privacy</a>
<a className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors" href="#">Terms</a>
<a className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors" href="#">API</a>
</div>
</div>
</footer>

    </div>
  );
}
