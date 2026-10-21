// ============================================================
// CHECKPOINT : JAVASCRIPT FOUNDATIONS - PROJECT 2
// Étudiant : Moustapha Ibrahim
// ============================================================

// ------------------------------------------------------------
// 1. FONCTIONS DE MANIPULATION DE CHAÎNES
// ------------------------------------------------------------

// A. Inverser une chaîne de caractères
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

// B. Compter le nombre de caractères dans une chaîne
function compterCaracteres(chaine) {
    return chaine.length;
}

// C. Mettre la première lettre de chaque mot en majuscule
function majusculePremiereLettre(phrase) {
    return phrase
        .split(' ')
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(' ');
}


// ------------------------------------------------------------
// 2. FONCTIONS SUR LES TABLEAUX
// ------------------------------------------------------------

// A. Trouver le maximum et le minimum d'un tableau
function trouverMax(arr) {
    return Math.max(...arr);
}

function trouverMin(arr) {
    return Math.min(...arr);
}

// B. Calculer la somme de tous les éléments d'un tableau
function sommeTableau(arr) {
    return arr.reduce((total, val) => total + val, 0);
}

// C. Filtrer un tableau en fonction d'une condition (ex: filtrer les nombres pairs)
function filtrerTableau(arr, conditionFn) {
    return arr.filter(conditionFn);
}


// ------------------------------------------------------------
// 3. FONCTIONS MATHÉMATIQUES
// ------------------------------------------------------------

// A. Calculer la factorielle d'un nombre (n!)
function factorielle(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

// B. Vérifier si un nombre est premier
function estNombrePremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// C. Générer la suite de Fibonacci jusqu'à n termes
function suiteFibonacci(nTermes) {
    if (nTermes <= 0) return [];
    if (nTermes === 1) return [0];
    
    let suite = [0, 1];
    for (let i = 2; i < nTermes; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    return suite;
}


// ============================================================
// TESTS DES FONCTIONS (CONSOLES)
// ============================================================

console.log("--- 1. MANIPULATION DE CHAÎNES ---");
console.log("Inverser 'hello':", inverserChaine("hello")); // "olleh"
console.log("Longueur de 'WidedSache':", compterCaracteres("WidedSache")); // 10
console.log("Majuscules:", majusculePremiereLettre("bonjour tout le monde")); // "Bonjour Tout Le Monde"

console.log("\n--- 2. TABLEAUX ---");
const nombres = [12, 5, 8, 130, 44];
console.log("Max:", trouverMax(nombres)); // 130
console.log("Min:", trouverMin(nombres)); // 5
console.log("Somme:", sommeTableau(nombres)); // 199
console.log("Filtre (> 10):", filtrerTableau(nombres, x => x > 10)); // [12, 130, 44]

console.log("\n--- 3. FONCTIONS MATHÉMATIQUES ---");
console.log("Factorielle de 5 (5!):", factorielle(5)); // 120
console.log("7 est premier ?:", estNombrePremier(7)); // true
console.log("10 est premier ?:", estNombrePremier(10)); // false
console.log("Fibonacci (8 termes):", suiteFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]