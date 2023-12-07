const Instructions = () => {
  return (
    <section className="instructions">
      <span className="instructions__desc">Descripción:</span>
      <p className="instructions__desc-p">
        El ahorcado online es un juego basado en el ahorcado tradicional donde
        una persona piensa una palabra y la otra trata de adivinarla. En este
        caso, es el propio juego el que piensa en una palabra secreta y tú
        tienes que adivinarla dentro de un cierto número de oportunidades.
      </p>
      <span className="instructions__rules"> Reglas para jugar online:</span>
      <p className="instructions__rules-p">
        Usando una fila de guiones, se representa la palabra a adivinar, dando
        el número de letras. Si el jugador sugiere una letra que aparece en la
        palabra, el sistema la escribe en todas sus posiciones correctas. Si la letra sugerida no está en la palabra, el sistema dibuja un elemento de la figura del ahorcado como una marca de conteo. El juego termina cuando: 
        <ul >
          <li>El jugador completa la palabra correctamente.</li>
          <li>El sistema completa el dibujo del ahorcado.</li>
        </ul>
      </p>
    </section>
  );
};

export default Instructions;
