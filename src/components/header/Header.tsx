import person from "../../assets/pessoa.png";

import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <div>
        <img src={person} alt="person" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
