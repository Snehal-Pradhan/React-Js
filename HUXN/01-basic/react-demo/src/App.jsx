import Card from "./components/Card";
import Cart from "./components/Cart";
import Grating from "./components/Grating";
import Password from "./components/Password";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
const App = () => {
  return <>
    <Weather temperature={20} />
    <UserStatus loggedIn={true} isAdmin={false} />
    <Grating timeOfDay="morning" />
  </>
}

export default App;


