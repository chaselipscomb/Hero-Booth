import React from 'react';

function Login() {

    return(
        <div className="logincontainer">
        <form class="form-signin">
      <img class="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFVEpe9mfF0qNeUJKNt16not6JW_-Q2fnFR7J68FCDRAAJ6MPi" alt="" width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
      <br />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
    </div>
    )
}
export default Login;