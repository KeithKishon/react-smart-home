import { UserButton } from "@clerk/clerk-react";

function Settings() {
    return (
      <div className="settings">
        <h1>Settings</h1>
         <UserButton/> 
      </div>
    );
  }
  
  export default Settings;