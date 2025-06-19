const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];
const divHoroscope = document.getElementById("horoscope")
// for (const item of horoscope) {
// 	// TODO: remplace le console.log par le code qui ajoute un article
// 	// pour chaque item avec le format suivant :
// 	divHoroscope.innerHTML +=`
//     <article>
// 	  <h2>${item.sign}</h2>
// 	  <p>${item.description}</p>
// 	</article>
// 	`;
// }
 horoscope.forEach(item),=>{
  divHoroscope.innerHTML+=`
  <Article>
  <h2>${item.sign}</h2>
  <p>${item.description}</p>
  </Article>`;
 }