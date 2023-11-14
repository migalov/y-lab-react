import style from "./App.module.scss";
import loginIcon from "./icons/Login.svg";
import yandexIcon from "./icons/yandex.svg";
import googleIcon from "./icons/google.svg";

function App() {
  return (
    <div className={style.App}>
      <div className={style.auth}>

        <div className={style.authContainer + " " + style.authHeader}>
          
          <img src={loginIcon} alt="Login Icon" />

          <div className={style.authTitleDescription}>
            <h2>Login</h2>
            <p>Welcome back</p>
          </div>

        </div>

        <hr className={style.line} />

        <fieldset className={style.authContainer + " " + style.authFieldset}>
          
          <label className={style.authLabel}>
            <span className={style.authLabelTitle}>Your login or email</span>
            <input className={style.authLabelInput} type="text" placeholder="Logan Emailo" />
            <span className={style.authLabelMessage}>Error</span>
          </label>

          <label className={style.authLabel}>
            <span className={style.authLabelTitle}>Password</span>
            <input className={style.authLabelInput} type="password" placeholder="Password" />
            <span className={style.authLabelMessage}>Error</span>
          </label>

          <label className={style.authBlockCheckbox}>
            <input className={style.authCheckbox} type="checkbox" />
            <span className={style.authCheckboxTitle}>Error</span>
          </label>
          
          <a href="#" className={style.authLink}>Forgot Password?</a>

          <input className={style.authButton + " " + style.authButton__primary} type="submit" value="Submit" />
          
        </fieldset>

        <div className={style.authLineOr}>
          <span className={style.or}>or</span>
          <hr className={style.line} />
        </div>

        <div className={style.authContainer}>
          <a className={style.authWayRegistration} href={"#"}>
            <img className={style.authWayRegistrationIcon} src={yandexIcon} alt="" />
            <span className={style.authWayRegistrationTitle}>Login with Yandex</span>
          </a>
        </div>

        <div className={style.authContainer}>
          <a className={style.authWayRegistration} href={"#"}>
            <img className={style.authWayRegistrationIcon} src={googleIcon} alt="" />
            <span className={style.authWayRegistrationTitle}>Login with Google</span>
          </a>
        </div>

        <hr className={style.line} />

        <div className={style.authContainer}>
          <div className={style.authTerms}>
            <p>By creating an account you agree to our</p>
            <p><a href="#">Term and Conditions</a></p>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App;
