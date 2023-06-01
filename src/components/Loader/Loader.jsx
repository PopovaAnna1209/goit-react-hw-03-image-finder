import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="Loader">
      <InfinitySpin 
  width='200'
  color="#1294a5"
/>
    </div>
  );
};
