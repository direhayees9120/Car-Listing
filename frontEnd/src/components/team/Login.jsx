import BButton from './shared/BButton'
import ImageGallery from './gallery/ImageGallery'

const Login = ({ updateState }) => {
    const handleLogin = () => {
        updateState(true);
    }
  return (
    <div>
      <h1>Welcome Login</h1>

      <div>
        <BButton bgColor="red" btnFunc={handleLogin}>Login</BButton>
          </div>
          
          <ImageGallery />
    </div>
  );
};

export default Login