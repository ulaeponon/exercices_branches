// Nous souhaitons faire la somme du prix de plusieurs articles
let a1 = 10 
// ceci represente le prix de l'article 1
let a2 = 20
// ceci represente le prix de l'article 2
// Nous calculons le total
   tot= a1+a2
   console.log("le prix total des articles a1 et a2 est de:",tot)
// Prix d'un troisieme article
let a3 = 50
// Nous ajoutons a3 au total
tot = tot + a3
console.log("le total du prix des articles a1, a2 et a3 est de:",tot)
console.log("Le prix total avant reduction est de : ", tot)
//Nous appliquons 20% de reduction
let tot2 = tot - tot*0.2
let reduction = tot*0.2 // Ceci represente la reduction
tot2 = tot - reduction
console.log("le prix apres avoir appliqué la reduction est de:",tot2)
