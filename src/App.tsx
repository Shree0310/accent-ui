import { Button } from './components/Button';
import './App.css';

function App() {
  const goToStorybook = () => {
    window.location.href = 'http://localhost:6006/'; // Or your specific Storybook port
  };

  return (
    <div className="button-showcase">
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Button variant="primary" size="lg" onClick={goToStorybook}>
          Go to Storybook
        </Button>
      </div>
      <h1>Accent UI - Button Component</h1>
      
      <section>
        <h2>Variants</h2>
        <div className="button-group">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      <section>
        <h2>Sizes</h2>
        <div className="button-group">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section>
        <h2>States</h2>
        <div className="button-group">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </section>

      <section>
        <h2>With Icons</h2>
        <div className="button-group">
          <Button leftIcon="→">With Left Icon</Button>
          <Button rightIcon="←">With Right Icon</Button>
          <Button leftIcon="→" rightIcon="←">Both Icons</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
