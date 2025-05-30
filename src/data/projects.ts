import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'trackcarecost',
    title: 'TrackCareCost',
    description: 'A health expense tracker with predictive analytics to forecast future medical expenses based on historical data and trends.',
    image: 'https://images.pexels.com/photos/7948048/pexels-photo-7948048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'Streamlit', 'Data Analysis', 'ML'],
    demoLink: 'https://trackcarecost.demo.com',
    sourceLink: 'https://github.com/siddhu9876/trackcarecost',
    featured: true
  },
  {
    id: 'weatherwizard',
    title: 'WeatherWizard',
    description: 'Weather application with animated UI that provides real-time weather data, forecasts, and visually stunning animations based on current conditions.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['HTML', 'JavaScript', 'CSS', 'SQLite', 'API'],
    demoLink: 'https://siddhu9876.github.io/weather-wizard/',
    sourceLink: 'https://github.com/Siddhu9876/weather-wizard.git'
  },
  {
    id: 'snakegame',
    title: 'Snake Game',
    description: 'A browser-based classic snake game with modern UI, multiple difficulty levels, and a high score system.',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://siddhu9876.github.io/SnakeGame/',
    sourceLink: 'https://github.com/siddhu9876/snakegame'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A clothing e-commerce site with product filtering, cart functionality, user authentication, and payment processing (in progress).',
    image: 'https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    sourceLink: 'https://github.com/siddhu9876/ecommerce'
  },
  {
    id: 'stayselect',
    title: 'StaySelect',
    description: 'Hostel management system with interactive maps, booking system, and administrative dashboard for hostel owners and students.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Django', 'Leaflet.js', 'PostgreSQL'],
    sourceLink: 'https://github.com/siddhu9876/stayselect'
  },
  {
    id: 'datadashboards',
    title: 'Data Dashboards',
    description: 'Collection of interactive Tableau visualizations focusing on healthcare trends, patient outcomes, and medical cost analysis.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Tableau', 'Data Visualization', 'Analytics'],
    demoLink: 'https://public.tableau.com/profile/siddhardha.roy'
  }
];

export default projects;