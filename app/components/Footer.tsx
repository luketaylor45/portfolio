export function Footer() {
    return (
        <footer className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h4 className="text-3xl font-black tracking-tighter">Luke <span className="text-primary">Taylor</span></h4>
                    <p className="text-muted text-xs font-medium uppercase tracking-widest opacity-60">
                        Developer & Designer
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                    <div className="flex gap-10">
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#links" className="hover:text-primary transition-colors">Connect</a>
                    </div>

                    <div className="flex items-center gap-2 opacity-50">
                        <span>&copy; {new Date().getFullYear()} Luke Taylor</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
