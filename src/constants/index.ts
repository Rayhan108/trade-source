import project1 from '@/assests/project1.png';
import project2 from '@/assests/project2.png';
import project3 from '@/assests/project3.png';

export const protectedRoutes = [
  '/login',
  '/register',
  //  "/subscriptionPurchase",
];

export const dateOptions = [
  { id: 'urgent', value: 'Urgent (1-2 days)' },
  { id: 'within2week', value: 'Within 2 weeks' },
  {
    id: 'morethan2week',
    value: 'More than 2 weeks',
  },
  {
    id: 'planning',
    value: 'Not sure still planning',
  },
];

export const timeOptions = [
  'Morning (8 AM - 12 PM)',
  'Afternoon (12 PM - 5 PM)',
  'Evening (5 PM - 9 PM)',
];

export const cardDatas = [
  {
    title: 'Pink Dyer',
    location: 'Huston TX',
    rating: 5,
    budget: 350,
    tags: ['Featured', 'Edit', 'Remove'],
    image: project1,
  },
  {
    title: 'Blue Sky',
    location: 'Austin TX',
    rating: 4,
    budget: 420,
    tags: ['Featured', 'Edit'],
    image: project2,
  },
  {
    title: 'Green Haven',
    location: 'Dallas TX',
    rating: 3,
    budget: 280,
    tags: ['Edit'],
    image: project3,
  },
  {
    title: 'Green Haven',
    location: 'Dallas TX',
    rating: 3,
    budget: 280,
    tags: ['Edit'],
    image: project3,
  },
];

export const licenses = [
  {
    title: 'Licensed',
    number: '90180938',
    date: 'May 25, 2025',
    state: 'State of California',
    status: 'Verified',
  },
  {
    title: 'Licensed',
    number: '12345678',
    date: 'June 15, 2024',
    state: 'State of New York',
    status: 'Verified',
  },
];
