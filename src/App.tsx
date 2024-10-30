import { BrowserRouter } from 'react-router-dom';
import { init } from '@noriginmedia/norigin-spatial-navigation';
import Layout from './components/Layout';
import AppRoutes from './routes';

// Initialize spatial navigation with custom config
init({
  debug: false,
  visualDebug: false,
  throttle: 0,
  overlap: true,
  straightOnly: false,
  shouldFocus: true,
});

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
