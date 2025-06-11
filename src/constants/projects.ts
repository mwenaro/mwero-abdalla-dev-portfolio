import { Project } from "@/types";

export const projects: Project[] = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
      image: '/ecommerce-project.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      details: {
        overview: 'A complete e-commerce solution with admin dashboard, product management, and secure checkout.',
        features: [
          'User authentication & authorization',
          'Product catalog with filters',
          'Shopping cart functionality',
          'Payment processing with Stripe',
          'Order history and tracking'
        ],
        technologies: [
          'React for frontend',
          'Node.js/Express for backend',
          'MongoDB for database',
          'Stripe for payments',
          'JWT for authentication'
        ],
        challenges: [
          'Implementing secure payment processing',
          'Optimizing product search performance',
          'Handling inventory synchronization'
        ],
        screenshots: [
          '/ecommerce-1.jpg',
          '/ecommerce-2.jpg',
          '/ecommerce-3.jpg'
        ]
      }
    },
    {
      id: 'social-media-app',
      title: 'Social Media App',
      description: 'A social media application with user profiles, posts, comments, and real-time updates.',
      image: '/social-media-project.jpg',
      tags: ['React', 'Firebase', 'Real-time DB'],
      githubUrl: 'https://github.com/username/social-media-app',
      liveUrl: 'https://social-app-demo.com',
      details: {
        overview: 'A Twitter-like social platform with real-time interactions.',
        features: [
          'User profiles with avatars',
          'Post creation and commenting',
          'Real-time notifications',
          'Like and share functionality',
          'Responsive design'
        ],
        technologies: [
          'React with Hooks',
          'Firebase Authentication',
          'Cloud Firestore',
          'Firebase Storage',
          'React Context API'
        ],
        challenges: [
          'Implementing real-time updates',
          'Optimizing performance for large feeds',
          'Handling image uploads efficiently'
        ],
        screenshots: [
          '/social-1.jpg',
          '/social-2.jpg',
          '/social-3.jpg'
        ]
      }
    },
    {
      id: 'task-management',
      title: 'Task Management System',
      description: 'A task management system with user roles, project assignments, and progress tracking.',
      image: '/task-manager-project.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://tasks-demo.com',
      details: {
        overview: 'A Trello-like task management application for teams.',
        features: [
          'Drag-and-drop task boards',
          'User roles and permissions',
          'Project progress tracking',
          'Due date reminders',
          'Team collaboration'
        ],
        technologies: [
          'Next.js for SSR',
          'TypeScript for type safety',
          'Tailwind CSS for styling',
          'React DnD for drag-and-drop',
          'JWT for authentication'
        ],
        challenges: [
          'Implementing smooth drag-and-drop',
          'Managing complex state',
          'Optimizing for mobile devices'
        ],
        screenshots: [
          '/tasks-1.jpg',
          '/tasks-2.jpg',
          '/tasks-3.jpg'
        ]
      }
    }
  ];