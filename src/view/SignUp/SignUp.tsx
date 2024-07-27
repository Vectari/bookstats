export function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <form action="">
        <label htmlFor="">Username: </label>
        <input type="text" placeholder="Enter Username" />
        <br />
        <label htmlFor="">New Password: </label>
        <input type="text" placeholder="Enter New Password" />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}
