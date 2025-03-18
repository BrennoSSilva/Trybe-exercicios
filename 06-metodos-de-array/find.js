
const data = require('./data');

// ENCONTRE A PRIMEIRA CARTA DE ACORDO COM SEU TIPO

const firstCardByType = (typeName) => {
  const getType = data.types.find((type) => type.name === typeName);
  const getCard = data.cards.find(({ typeId }) => typeId === getType.id);

  return {
    typeId: getType.id,
    typeName: getType.name,
    cardName: getCard.name,
  }
};

console.log(firstCardByType('Spellcaster'));
