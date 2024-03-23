
import './App.css'
import NavIcon from './components/nav/nav-icon';
import Widget from './components/weather_card/weather_card';
import { Outlet } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn} from "@clerk/clerk-react";

 
if (!import.meta.env. VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;


function App() {

  return (

    <ClerkProvider publishableKey= {clerkPubKey}>

      <SignedIn>

        <div className='app'>
          <div className='sidebar'>
            <NavIcon  route="home"/>
            <NavIcon route="settings" />
          </div>
        <div className='widgets'> <Widget/> </div>
        <Outlet/>
        
        </div>
        
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>



    </ClerkProvider>
  );
}

export default App;


