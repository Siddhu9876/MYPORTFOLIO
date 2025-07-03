import React from 'react';
import { Briefcase, Users, Lightbulb } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import { SectionId } from '../../types';

const cardBase =
  'rounded-2xl bg-dark-500/80 border border-primary-900/30 shadow-lg p-6 md:p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300';

const ExperienceSection: React.FC = () => (
  <section id={SectionId.Experience} className="section-padding bg-dark-400 relative">
    {/* Gradient background effect */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-800/40 via-fuchsia-700/30 to-red-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-primary-900/30 via-pink-800/20 to-red-800/10 rounded-full blur-2xl" />
    </div>

    <div className="container-custom relative z-10">
      <SectionHeading
        title="Experience"
        subtitle="A snapshot of my technical journey, leadership, and innovation."
        centered
      />

      {/* Technical Experience */}
      <div className={`${cardBase} mb-10`}>
        <div className="flex items-center gap-4 mb-4">
          <Briefcase size={32} className="text-fuchsia-400" />
          <h3 className="heading-md gradient-text">Technical Experience</h3>
        </div>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold text-neon-cyan">26 client projects</span> as a solo full-stack developer (23 completed, 3 ongoing).
          </li>
          <li>
            <span className="font-semibold text-purple-400">8 Student Portfolios</span> — ₹500–₹1000 each.
          </li>
          <li>
            <span className="font-semibold text-purple-400">5 Marketing Pages</span> — ₹500–₹1500 each.
          </li>
          <li>
            <span className="font-semibold text-purple-400">6 Business/Professional Portfolios</span> — ₹800–₹1500 each.
          </li>
          <li>
            <span className="font-semibold text-purple-400">4 Business Landing Websites</span> — ₹1000–₹2000 each (basic plan).
          </li>
        </ul>
        <div className="bg-dark-400/80 rounded-xl p-4 mb-2">
          <span className="font-semibold text-pink-400">Ongoing Projects:</span> 3 major projects with a team of 2, charging <span className="text-neon-cyan">₹25,000–₹50,000</span> each. Estimated delivery: <span className="text-fuchsia-400">Sep–Oct 2025</span>.
        </div>
        <p className="text-gray-400 mt-2">
          <span className="font-semibold text-neon-cyan">Role:</span> Solo full-stack developer (design, frontend, backend, deployment).
        </p>
      </div>

      {/* Marketing Leadership */}
      <div className={`${cardBase} mb-10`}>
        <div className="flex items-center gap-4 mb-4">
          <Users size={32} className="text-pink-400" />
          <h3 className="heading-md gradient-text">Marketing Leadership</h3>
        </div>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold text-neon-cyan">Led 20 student marketers</span> (June 2023 – March 2024).
          </li>
          <li>
            Managed campaigns for hotels, hostels, and local businesses.
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-dark-400/80 rounded-xl p-4">
            <div className="text-2xl font-bold text-fuchsia-400">+50</div>
            <div className="text-gray-300">Girls Hostel<br />accommodations in 1 month</div>
          </div>
          <div className="bg-dark-400/80 rounded-xl p-4">
            <div className="text-2xl font-bold text-pink-400">25 → 70</div>
            <div className="text-gray-300">Boys Hostel beds<br />per hostel in 6 months</div>
          </div>
          <div className="bg-dark-400/80 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-400">8 mo.</div>
            <div className="text-gray-300">Hotel: Increased reach & engagement</div>
          </div>
        </div>
      </div>

      {/* Innovation & Strategy */}
      <div className={cardBase}>
        <div className="flex items-center gap-4 mb-4">
          <Lightbulb size={32} className="text-purple-400" />
          <h3 className="heading-md gradient-text">Innovation & Strategy</h3>
        </div>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold text-neon-cyan">Stay Select</span> idea for Smart India Hackathon 2023 — <span className="text-fuchsia-400">Top 10%</span> shortlisted.
          </li>
          <li>
            Growth strategist for businesses: optimized customer acquisition & retention.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ExperienceSection;