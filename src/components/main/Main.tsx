import Input from '../UI/input/Input';
import './main.scss';
const Main = () => {
  return (
    <main>
      <h1>
        <span>We're</span> coming soon
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <Input
        errorMessage="Please provide a valid email"
        error={false}
        placeholder="Email address"
      />
    </main>
  );
};

export default Main;
