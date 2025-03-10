import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Eliza.ai</span>
                <br />
                <span>Your AI Meeting Assistant</span>
              </h1>
              <p className="text-lg mb-8 text-text-secondary max-w-xl">
                Never miss important details from your meetings. Eliza automatically records, transcribes, and summarizes your meetings to create a searchable knowledge base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/record" className="primary-button text-center">
                  Start New Meeting
                </Link>
                <Link href="/demo" className="glass-button text-center">
                  Watch Demo
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="glass-panel p-2 md:p-4 rounded-2xl shadow-lg">
                <Image
                  src="/images/dashboard-preview.png"
                  alt="Eliza Dashboard Preview"
                  width={600}
                  height={400}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background-light/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5v-6m0 0V6.8m0 5.7h5.5m-11 0h5.2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Auto Recording</h3>
              <p className="text-text-secondary">Automatically record your meetings from Zoom, Teams, or Google Meet.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transcription</h3>
              <p className="text-text-secondary">Get accurate transcripts with speaker identification and timestamps.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Summaries</h3>
              <p className="text-text-secondary">Get intelligent summaries, action items, and key takeaways from your meetings.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
              <p className="text-text-secondary">Search across all your meeting notes and transcripts to find information quickly.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">People Insights</h3>
              <p className="text-text-secondary">Track meeting participants and build profiles based on their contributions.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrations</h3>
              <p className="text-text-secondary">Connect with Zoom, Microsoft Teams, Google Meet, Slack, and more.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="glass-panel p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your meetings?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who use Eliza to capture, organize, and retrieve meeting information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/record" className="primary-button">
                Start for Free
              </Link>
              <Link href="/pricing" className="glass-button">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-gradient">
                Eliza.ai
              </Link>
              <p className="text-text-secondary text-sm mt-2">
                &copy; {new Date().getFullYear()} Eliza AI. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-text-secondary hover:text-text-primary transition-all">
                Privacy
              </Link>
              <Link href="/terms" className="text-text-secondary hover:text-text-primary transition-all">
                Terms
              </Link>
              <Link href="/help" className="text-text-secondary hover:text-text-primary transition-all">
                Help
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
