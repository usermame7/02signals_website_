export default function Footer() {
  return (
    <footer className="bg-vpfx-bg border-t border-vpfx-border/20 py-14 mt-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-9">
          
          {/* Social Proof Section */}
          <div className="bg-gradient-to-r from-vpfx-accent/10 to-cyan-500/10 border border-vpfx-accent/20 rounded-xl p-7 max-w-2xl mx-auto">
            <div className="text-vpfx-accent font-bold text-lg mb-2.5">
              Connect with 500+ participants exploring regular intelligence resources
            </div>
            <p className="text-vpfx-text text-sm">
              Our learning platform delivers clear methodology and chart evaluation. No performance guarantees. Develop understanding from current price conditions and enhance your analytical capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4.5 mt-4.5">
              <a
                href="/join"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold bg-vpfx-accent text-white transition-all duration-300 hover:bg-vpfx-accent/90 hover:scale-105 periodic-quake interaction-quake"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                Messaging Platform
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold bg-white text-black transition-all duration-300 hover:scale-105 periodic-quake interaction-quake"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-vpfx-card/20 border border-vpfx-border/10 rounded-lg p-7 max-w-4xl mx-auto">
            <div className="text-vpfx-accent font-semibold text-lg mb-4.5 uppercase tracking-wide">
              Risk Notice • Intelligence Resources for Learning Only • Adults 18+ Exclusively
            </div>
            
            <div className="text-vpfx-muted text-sm leading-relaxed space-y-3.5">
              <p className="font-medium text-vpfx-text">
                Participating in Currency and financial instruments carries risk. VictoryPipsFX does not offer investment guidance. All materials are for learning exclusively. Historical outcomes do not indicate upcoming performance.
              </p>
              
              <p>
                ELEVATED RISK NOTICE: Currency participation involves significant loss potential. You could forfeit your complete investment. 
                Our intelligence resources rely on technical evaluation and research, but prices are unpredictable and losses may occur.
              </p>
              
              <p>
                OUTCOMES NOTICE: Outcomes displayed represent actual transactions but reflect individual experiences and are not standard outcomes. 
                Participant success varies based on price conditions, expertise level, and capital protection methods.
              </p>
              
              <p>
                VictoryPipsFX functions autonomously with no affiliation to Facebook or additional social platforms. 
                We deliver intelligence resources for learning exclusively. Always consult a qualified investment professional before making capital decisions.
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-vpfx-accent font-bold text-lg">
            © 2025 VictoryPipsFX LTD • Learning materials exclusively • 18+ • Market participation involves significant loss risk • Historical performance does not ensure upcoming outcomes
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-7 text-xs text-vpfx-muted">
            <a href="/join" className="hover:text-vpfx-accent transition-colors">Messaging Platform</a>
            <span>•</span>
            <a href="/contact" className="hover:text-vpfx-accent transition-colors">Get In Touch</a>
            <span>•</span>
            <a href="/disclaimer" className="hover:text-vpfx-accent transition-colors">Risk Notice</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-vpfx-accent transition-colors">Privacy Statement</a>
            <span>•</span>
            <a href="/terms" className="hover:text-vpfx-accent transition-colors">Usage Terms</a>
            <span>•</span>
            <span>Adults 18+ Only</span>
          </div>
          
          <div className="text-vpfx-muted/70 text-xs border-t border-vpfx-border/5 pt-4.5">
            Assistance: Messaging Platform Monday-Friday 9AM-6PM GMT • Learning-Focused Community
          </div>
        </div>
      </div>
    </footer>
  );
}
