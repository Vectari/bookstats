export function LogIn() {
  return (
    <>
      <h1>Log In</h1>
      <form action="">
        <label htmlFor="">Username: </label>
        <input type="text" placeholder="Enter Username" />
        <br />
        <label htmlFor="">Password: </label>
        <input type="text" placeholder="Enter Password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
