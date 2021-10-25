export const Person = ({ person }) => {
  return (
    <div>
      <p>
        Nome: {person.name}
        <br />
        Sexo: {person.gender}
      </p>
    </div>
  );
};
