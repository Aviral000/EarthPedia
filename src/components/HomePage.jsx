import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <button><Link to='/post-maker'>Create a post</Link></button>
    </div>
  );
}