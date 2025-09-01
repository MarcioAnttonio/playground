interface CardProps {
  titulo: string;
  texto: string;
  op?: number;
}


function Card(props: CardProps) {
  return (
    <div>
      <h1>Card</h1>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  );
}

export default Card;
