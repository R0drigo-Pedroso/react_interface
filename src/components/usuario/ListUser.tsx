/* Essa é um tipagem do tsx, declarando o que cada objeto irá receber */
type PropsUser = {
  // Define o tipo de dados esperados para a propriedade 'user'
  user: {
    name: string; // 'name' deve ser uma string
    idade: number; // 'idade' deve ser um número
  };
};

// Componente funcional em React com TypeScript que recebe uma propriedade do tipo ListUser
const ListUsers = ({ user }: PropsUser) => {
  if (user.idade < 18) {
    return <p>Usuário não tem acesso</p>;
  }

  return (
    <div>
      {/* Container principal do componente */}
      <p>Seu nome é {user.name}</p> {/* Mostra o nome do usuário */}
      <p>a sua idade é {user.idade}</p> {/* Mostra a idade do usuário */}
      {user.idade > 18 ? (
        <p>O usuário é maior de idade</p>
      ) : (
        <p>O usuário é menor de idade</p>
      )}
      {/* Operador logico E && */}
      {user.idade >= 18 && <p>O usuário é maior de idade</p>}
      {user.idade < 18 && <p>O usuário é menor de idade</p>}
      {/* Operador logico OU || */}
      {user.idade >= 18 || <p>O usuário é maior de idade</p>}
      {user.idade < 18 || <p>O usuário é menor de idade</p>}
    </div>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default ListUsers;
