import { Link } from 'react-router-dom'

export function SpeedFooter() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">SPEED</span> — Commercial-grade ads from phone footage.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/booking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
