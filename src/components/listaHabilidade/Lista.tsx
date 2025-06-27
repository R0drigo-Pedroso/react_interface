import style from "./lista.module.css";

const ListaSkill = () => {
  return (
    <div className={style.container}>
      <ul>
        <li>React / React Native</li>
        <li>Responsive Design</li>
        <li>javaScript</li>
        <li>git</li>
        <li>SASS/SCSS</li>
      </ul>
    </div>
  );
};

export default ListaSkill;
