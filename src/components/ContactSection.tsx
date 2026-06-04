import { useState } from 'react';
import type { Profile } from '../types/portfolio';

interface ContactSectionProps {
  profile: Profile;
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20" style={{ background: '#1a1917', color: '#F8F7F4' }}>
      <div className="max-w-5xl mx-auto px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px block" style={{ background: '#444441' }} />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em]" style={{ color: '#888780' }}>
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-serif leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8F7F4' }}
            >
              Let's build something{' '}
              <em className="italic" style={{ color: '#85B7EB' }}>
                great
              </em>{' '}
              together.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#888780' }}>
              Open to full-time roles, freelance projects, and collaborations. Reach out via any channel below.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {/* Email */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-4 p-4 rounded-xl text-left transition-colors duration-200 cursor-pointer w-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid #444441' }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#888780')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = '#444441')}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest mb-0.5" style={{ color: '#888780' }}>
                    Email — {copied ? '✓ Copied!' : 'click to copy'}
                  </div>
                  <div className="text-[0.88rem] font-medium" style={{ color: '#F8F7F4' }}>
                    {profile.social.email}
                  </div>
                </div>
              </button>

              {/* LinkedIn */}
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid #444441' }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#888780')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = '#444441')}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest mb-0.5" style={{ color: '#888780' }}>LinkedIn</div>
                  <div className="text-[0.88rem] font-medium" style={{ color: '#F8F7F4' }}>linkedin.com/in/adhithyababuu</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid #444441' }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#888780')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = '#444441')}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest mb-0.5" style={{ color: '#888780' }}>GitHub</div>
                  <div className="text-[0.88rem] font-medium" style={{ color: '#F8F7F4' }}>github.com/adhithyababuu</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={profile.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid #444441' }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#888780')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = '#444441')}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest mb-0.5" style={{ color: '#888780' }}>WhatsApp</div>
                  <div className="text-[0.88rem] font-medium" style={{ color: '#F8F7F4' }}>+91 90483 93348</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — info rows */}
          <div className="flex flex-col gap-5 pt-2">
            {[
              { key: 'Location', val: profile.location },
              { key: 'Phone', val: profile.social.phone },
              { key: 'Role', val: profile.role },
              { key: 'Focus', val: profile.specialization },
              { key: 'Status', val: 'Available for opportunities', highlight: true },
            ].map(({ key, val, highlight }) => (
              <div key={key} className="pb-5 border-b last:border-0" style={{ borderColor: '#2C2C2A' }}>
                <div className="text-[0.68rem] uppercase tracking-widest mb-1" style={{ color: '#5F5E5A' }}>{key}</div>
                <div className="text-[0.95rem]" style={{ color: highlight ? '#5DCAA5' : '#D3D1C7' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
