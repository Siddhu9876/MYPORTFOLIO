import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    id: 'education-1',
    title: 'BTech in Computer Science',
    location: 'Malla Reddy University, Hyderabad',
    description: 'Currently pursuing a Bachelor of Technology in Computer Science with a focus on web development and data analytics. Maintaining an 80% grade average.',
    date: '2021 - Present',
    icon: '🎓',
    category: 'education'
  },
  {
    id: 'experience-1',
    title: 'Web Development Intern',
    location: 'Local Tech Startup, Hyderabad',
    description: 'Developed responsive web applications using React.js and implemented backend functionality with Django REST framework.',
    date: 'Summer 2023',
    icon: '💼',
    category: 'experience'
  },
  {
    id: 'experience-2',
    title: 'Data Analytics Project',
    location: 'University Research Team',
    description: 'Analyzed healthcare datasets to identify patterns in patient care costs and developed predictive models for expense forecasting.',
    date: 'Fall 2022',
    icon: '📊',
    category: 'experience'
  },
  {
    id: 'experience-3',
    title: 'Hackathon Winner',
    location: 'TechFest 2022, Hyderabad',
    description: 'Led a team to victory by developing a hostel management system with interactive maps and booking functionality.',
    date: 'December 2022',
    icon: '🏆',
    category: 'experience'
  }
];

export default timelineData;