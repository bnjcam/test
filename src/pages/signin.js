import { useState } from "react";
function SignIn() {
  const [signedIn, setSignedIn] = useState(false)
  const handler = () => {
    const bob =document.getElementById('val').value
    console.log(bob)
  }

  return (
    <div>
      {!signedIn ? <div>
        <input type="number" id="val" />
        <button onclick={handler} >hi </button>
      </div> : null}
    </div>
  );
}

export default SignIn;