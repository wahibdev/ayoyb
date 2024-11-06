# Bienvenue dans le KATA Github Actions de la Automation Tester Academy

Il s'agit d'un projet simple basé sur JS et Node.

Le fichier `app.js` expose 2 méthodes (`add` et `sub`)  que nous pouvons tester grâce aux fichiers contenu dans le dossier `test`.
Les tests utilises MOCHA et se composent de 2 suites : `test_add` et `test_sub`

## Lancer les tests

Pour lancer les tests il suffit de jouer les commandes 

```javascript
npm run test_add // pour lancer les tests sur add
np run test_sub // pour lancer les tests sur sub
```

## Énoncé du KATA

### Etape 1 :

**Cloner le dépôt.**

Pour ce Kata tu peux aussi bien utiliser ton IDE avec le dépôt en local comme effectuer toutes les étapes depuis l'interface Github. As you wish !

### Etape 2 :

**Créer un fichier de workflow appelé "test_and_deploy"**

Je te laisse te rappeler où le mettre et quelle extension il doit avoir pour être un workflow valide. 😅

### Etape 3 :

**Ecrire le workflow suivant :**

- Déclenchement sur des push, mais aussi manuel

- Pour l'action manuelle on a besoin de demander à l'utilisateur s'il souhaite

  - jouer un déploiement (valeur par défaut)

  - jouer les test add

  - jouer les test sub

  - jouer tous les tests

- Tous les jobs jouent sur ubuntu

- On va avoir besoin de 4 jobs

  - test_add

  - test_sub

  - deploy

  - notify_failure

- Les jobs test_add et test_sub doivent chacun

  - effectuer un checkout du dépôt

  - faire un setup de node (tu trouveras de l'aide en annexe) en version 16

  - faire un setup de la ci (npm ci)

- Le job test_add

  - Joue les tests add : npm run test_add

  - Les conditions de déclenchements sont les suivantes :

    - L'utilisateur a demandé à jouer les test add

    - L'utilisateur a demandé à jouer tous les tests

    - L'utilisateur a demandé à jouer un déploiement

    - L'utilisateur a fait un push sur le dépôt

- Le job test_sub

  - Joue les tests add : npm run test_sub

  - Les conditions de déclenchements sont les suivantes :

    - L'utilisateur a demandé à jouer les test sub

    - L'utilisateur a demandé à jouer tous les tests

    - L'utilisateur a demandé à jouer un déploiement

    - L'utilisateur a fait un push sur le dépôt

- Le job deploy

  - Imprime le texte "déploiement"

  - Joue après le succès de test_add et test_sub

  - Ne joue que si l'utilisateur a demandé à jouer un déploiement

- Le job notify_failure

  - Imprime le texte "Le déploiement a échoué"

  - Joue si test_add, test_sub, ou deploy ont échoué

---

🤫 La solution est sur la branche `solution`... Mais c'est mieux de s'en passer...
