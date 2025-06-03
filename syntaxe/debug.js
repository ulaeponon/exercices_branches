// Nous souhaitons faire la somme du prix de plusieurs articles
let priceArticle1 = 10 
// ceci represente le prix de l'article 1
let priceArticle2 = 20
// ceci represente le prix de l'article 2
// Nous calculons le total
   let total = priceArticle1+ priceArticle2
   console.log("le prix total des articles a1 et a2 est de:",total)
// Prix d'un troisieme article
let priceArticlArticle3= 50
// Nous ajoutons a3 au total
total += priceArticlArticle3
console.log("le total du prix des articles priceArticle1,  priceArticle2 et  priceArticle3 est de:",total)
console.log("Le prix total avant reduction est de : ",total )
//Nous appliquons 20% de reduction
let finalPrice = total - total*0.2
let reduction = total*0.2 // Ceci represente la reduction
 finalPrice = total - reduction
console.log("le prix apres avoir appliqué la reduction est de:",finalPrice)
