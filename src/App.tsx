import Calendar from './components';
import { CalendarProps } from './types';

const App: React.FC<CalendarProps> = (props) => {
  return <Calendar {...props} />;
};

export default App;
