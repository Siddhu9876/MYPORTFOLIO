import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import timelineData from '../../data/timeline';

const TimelineSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case '💼':
        return <Briefcase />;
      case '🎓':
        return <GraduationCap />;
      case '🏆':
        return <Award />;
      default:
        return <Briefcase />;
    }
  };
  
  const getIconBackground = (category: 'education' | 'experience') => {
    return category === 'education' ? '#7c3aed' : '#4f46e5';
  };
  
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading 
          title="Education & Experience"
          subtitle="My academic background and professional journey."
        />
        
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {timelineData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.date}
              dateClassName="text-gray-400"
              iconStyle={{ 
                background: getIconBackground(item.category),
                color: '#fff' 
              }}
              icon={getIcon(item.icon)}
              contentStyle={{
                background: '#1f1f1f',
                boxShadow: 'none',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '1.5rem'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid #1f1f1f' 
              }}
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <h4 className="text-neon-cyan">{item.location}</h4>
              <p className="text-gray-400 mt-4">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelineSection;