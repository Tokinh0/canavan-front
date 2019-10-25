import HomeScreen from '../components/screens/home';
import AboutScreen from '../components/screens/about';
import GalleryScreen from '../components/screens/gallery';
import ContactScreen from '../components/screens/contact';
import DogScreen from '../components/screens/dog';

export const routes = [
  {
    path: '/',
    title: 'Home',
    isAppBarLink: true,
    component: HomeScreen,
  },
  {
    path: '/about',
    title: 'About',
    isAppBarLink: true,
    component: AboutScreen,
  },
  {
    path: '/gallery',
    title: 'Gallery',
    isAppBarLink: true,
    component: GalleryScreen,
  },
  {
    path: '/contact',
    title: 'Contact',
    isAppBarLink: true,
    component: ContactScreen,
  },
  {
    path: '/gallery/:slug',
    isAppBarLink: false,
    component: DogScreen,
  },
];

export const appBarLinks = routes
  .filter(({ isAppBarLink }) => isAppBarLink === true);

export default routes;
