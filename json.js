let app = [
    {
      level: "A1",
      categories: {
        grammar: [
          {
            id: 1,
            question: "Quel est l'article défini pour 'chambre' ?",
            answers: [
              { text: "le", correct: false },
              { text: "la", correct: true },
              { text: "les", correct: false },
              { text: "un", correct: false }
            ]
          },
          {
            id: 2,
            question: "Comment conjuguer 'être' pour 'nous' au présent ?",
            answers: [
              { text: "sommes", correct: true },
              { text: "êtes", correct: false },
              { text: "sont", correct: false },
              { text: "es", correct: false }
            ]
          },
          {
            id: 3,
            question: "Comment dire 'je m'appelle' en français formel ?",
            answers: [
              { text: "je me nomme", correct: true },
              { text: "je t'appelle", correct: false },
              { text: "je s'appelle", correct: false },
              { text: "je suis nom", correct: false }
            ]
          },
          // {
          //   id: 4,
          //   question: "Quel est le féminin de 'acteur' ?",
          //   answers: [
          //     { text: "Acteuse", correct: false },
          //     { text: "Actrice", correct: true },
          //     { text: "Acteure", correct: false },
          //     { text: "Actueur", correct: false }
          //   ]
          // },
          // {
          //   id: 5,
          //   question: "Quelle phrase contient un verbe pronominal ?",
          //   answers: [
          //     { text: "Il parle doucement", correct: false },
          //     { text: "Nous nous lavons les mains", correct: true },
          //     { text: "Elle étudie", correct: false },
          //     { text: "Ils ont mangé", correct: false }
          //   ]
          // },
          // {
          //   id: 6,
          //   question: "Quel mot est un adverbe ?",
          //   answers: [
          //     { text: "Lent", correct: false },
          //     { text: "Doucement", correct: true },
          //     { text: "Direct", correct: false },
          //     { text: "Douceur", correct: false }
          //   ]
          // },
          // {
          //   id: 7,
          //   question: "Quelle est la forme correcte du futur simple ?",
          //   answers: [
          //     { text: "je courais", correct: false },
          //     { text: "je courirai", correct: false },
          //     { text: "je courrai", correct: true },
          //     { text: "je courir", correct: false }
          //   ]
          // },
          // {
          //   id: 8,
          //   question: "Quel est l'infinitif du verbe conjugué 'j'irai' ?",
          //   answers: [
          //     { text: "Aller", correct: true },
          //     { text: "Allié", correct: false },
          //     { text: "Allait", correct: false },
          //     { text: "Va", correct: false }
          //   ]
          // },
          // {
          //   id: 9,
          //   question: "Comment s'accorde le participe passé avec 'avoir' ?",
          //   answers: [
          //     { text: "Toujours avec le sujet", correct: false },
          //     { text: "Avec le complément d'objet direct s'il est avant", correct: true },
          //     { text: "Ne s'accorde jamais", correct: false },
          //     { text: "Avec le verbe", correct: false }
          //   ]
          // },
          // {
          //   id: 10,
          //   question: "Quel pronom remplace 'à Marie' ?",
          //   answers: [
          //     { text: "lui", correct: true },
          //     { text: "le", correct: false },
          //     { text: "elle", correct: false },
          //     { text: "leur", correct: false }
          //   ]
          // }
        ],
        vocabulary: [
          {
            id: 11,
            question: "Quel est le mot pour 'carte bancaire' ?",
            answers: [
              { text: "billet", correct: false },
              { text: "cheque", correct: false },
              { text: "carte", correct: true },
              { text: "porte-monnaie", correct: false }
            ]
          },
          {
            id: 12,
            question: "Quel est le mot correct pour 'chien' ?",
            answers: [
              { text: "cat", correct: false },
              { text: "dog", correct: false },
              { text: "chien", correct: true },
              { text: "chat", correct: false }
            ]
          },
          {
            id: 13,
            question: "Comment s'appelle le bâtiment où on peut dormir en voyage ?",
            answers: [
              { text: "maison", correct: false },
              { text: "appartement", correct: false },
              { text: "hôtel", correct: true },
              { text: "cabane", correct: false }
            ]
          },
          // {
          //   id: 14,
          //   question: "Quel mot signifie 'avoir faim' ?",
          //   answers: [
          //     { text: "Dormir", correct: false },
          //     { text: "Manger", correct: true },
          //     { text: "Courir", correct: false },
          //     { text: "Parler", correct: false }
          //   ]
          // },
          // {
          //   id: 15,
          //   question: "Quel mot est un synonyme de 'beau' ?",
          //   answers: [
          //     { text: "Laid", correct: false },
          //     { text: "Magnifique", correct: true },
          //     { text: "Petit", correct: false },
          //     { text: "Froid", correct: false }
          //   ]
          // },
          // {
          //   id: 16,
          //   question: "Quel mot désigne un fruit ?",
          //   answers: [
          //     { text: "Pomme", correct: true },
          //     { text: "Lait", correct: false },
          //     { text: "Pain", correct: false },
          //     { text: "Bois", correct: false }
          //   ]
          // },
          // {
          //   id: 17,
          //   question: "Quel mot désigne un moyen de transport ?",
          //   answers: [
          //     { text: "Voiture", correct: true },
          //     { text: "Lunettes", correct: false },
          //     { text: "Chien", correct: false },
          //     { text: "Maison", correct: false }
          //   ]
          // },
          // {
          //   id: 18,
          //   question: "Quel mot est un verbe ?",
          //   answers: [
          //     { text: "Table", correct: false },
          //     { text: "Écrire", correct: true },
          //     { text: "Rouge", correct: false },
          //     { text: "Soleil", correct: false }
          //   ]
          // },
          // {
          //   id: 19,
          //   question: "Quel mot signifie 'très content' ?",
          //   answers: [
          //     { text: "Fatigué", correct: false },
          //     { text: "Heureux", correct: true },
          //     { text: "Lent", correct: false },
          //     { text: "Froid", correct: false }
          //   ]
          // },
          // {
          //   id: 20,
          //   question: "Quel est l'opposé de 'rapide' ?",
          //   answers: [
          //     { text: "Lent", correct: true },
          //     { text: "Fort", correct: false },
          //     { text: "Dur", correct: false },
          //     { text: "Lourd", correct: false }
          //   ]
          // }
        ],
        comprehension: [
          {
            id: 21,
            question: "Dans la phrase 'Marie mange une pomme', qui mange ?",
            answers: [
              { text: "Marie", correct: true },
              { text: "une pomme", correct: false },
              { text: "mange", correct: false },
              { text: "rien", correct: false }
            ]
          },
          {
            id: 22,
            question: "Dans la phrase 'Il est neuf heures', que signifie 'neuf heures' ?",
            answers: [
              { text: "Il est 9h", correct: true },
              { text: "Il est 7h", correct: false },
              { text: "Il est 10h", correct: false },
              { text: "Il est 11h", correct: false }
            ]
          },
          {
            id: 23,
            question: "Dans 'Je suis français', quel est le sujet ?",
            answers: [
              { text: "Je", correct: true },
              { text: "français", correct: false },
              { text: "suis", correct: false },
              { text: "est", correct: false }
            ]
          },
          // {
          //   id: 24,
          //   question: "Quel est le pluriel de 'chien' ?",
          //   answers: [
          //     { text: "Chiens", correct: true },
          //     { text: "Chienss", correct: false },
          //     { text: "Chienn", correct: false },
          //     { text: "Chienses", correct: false }
          //   ]
          // },
          // {
          //   id: 25,
          //   question: "Quel objet est utilisé pour écrire ?",
          //   answers: [
          //     { text: "Stylo", correct: true },
          //     { text: "Couteau", correct: false },
          //     { text: "Assiette", correct: false },
          //     { text: "Clé", correct: false }
          //   ]
          // },
          // {
          //   id: 26,
          //   question: "Que fait-on avec un téléphone ?",
          //   answers: [
          //     { text: "On appelle", correct: true },
          //     { text: "On mange", correct: false },
          //     { text: "On dort", correct: false },
          //     { text: "On nage", correct: false }
          //   ]
          // },
          // {
          //   id: 27,
          //   question: "Que signifie 'écouter' ?",
          //   answers: [
          //     { text: "Utiliser ses oreilles pour entendre", correct: true },
          //     { text: "Utiliser ses yeux pour voir", correct: false },
          //     { text: "Parler à quelqu'un", correct: false },
          //     { text: "Manger un repas", correct: false }
          //   ]
          // },
          // {
          //   id: 28,
          //   question: "Quel objet est utilisé pour couper ?",
          //   answers: [
          //     { text: "Couteau", correct: true },
          //     { text: "Chaise", correct: false },
          //     { text: "Livre", correct: false },
          //     { text: "Stylo", correct: false }
          //   ]
          // },
          // {
          //   id: 29,
          //   question: "Que fait un médecin ?",
          //   answers: [
          //     { text: "Il soigne les malades", correct: true },
          //     { text: "Il enseigne les mathématiques", correct: false },
          //     { text: "Il prépare des repas", correct: false },
          //     { text: "Il construit des maisons", correct: false }
          //   ]
          // },
          // {
          //   id: 30,
          //   question: "Quel est le contraire de 'triste' ?",
          //   answers: [
          //     { text: "Content", correct: true },
          //     { text: "Fatigué", correct: false },
          //     { text: "Endormi", correct: false },
          //     { text: "Petit", correct: false }
          //   ]
          // }
        ]
      }
    },
    {
      level: "A2",
      categories: {
        grammar: [
          {
            id: 1,
            question: "Quelle est la forme correcte du passé composé avec 'avoir' ?",
            answers: [
              { text: "Il a mange", correct: false },
              { text: "Il a mangé", correct: true },
              { text: "Il avait mangé", correct: false },
              { text: "Il mangait", correct: false }
            ]
          },
          {
            id: 2,
            question: "Quel pronom remplace 'les enfants' ?",
            answers: [
              { text: "Les", correct: true },
              { text: "Lui", correct: false },
              { text: "Leur", correct: false },
              { text: "La", correct: false }
            ]
          },
          {
            id: 3,
            question: "Conjuguez 'venir' pour 'nous' au présent.",
            answers: [
              { text: "venons", correct: true },
              { text: "viens", correct: false },
              { text: "vient", correct: false },
              { text: "venez", correct: false }
            ]
          },
          // {
          //   id: 4,
          //   question: "Quel est l'imparfait de 'je mange' ?",
          //   answers: [
          //     { text: "je mangeais", correct: true },
          //     { text: "je mange", correct: false },
          //     { text: "j'ai mangé", correct: false },
          //     { text: "je mangerai", correct: false }
          //   ]
          // },
          // {
          //   id: 5,
          //   question: "Quelle est la négation correcte de 'Je comprends' ?",
          //   answers: [
          //     { text: "Je ne comprend pas", correct: false },
          //     { text: "Je ne comprends pas", correct: true },
          //     { text: "Je pas comprends", correct: false },
          //     { text: "Je pas comprendre", correct: false }
          //   ]
          // },
          // {
          //   id: 6,
          //   question: "Quel est le participe passé de 'voir' ?",
          //   answers: [
          //     { text: "vu", correct: true },
          //     { text: "voir", correct: false },
          //     { text: "voyant", correct: false },
          //     { text: "vait", correct: false }
          //   ]
          // },
          // {
          //   id: 7,
          //   question: "Quel est l'article indéfini pour 'livres' ?",
          //   answers: [
          //     { text: "un", correct: false },
          //     { text: "une", correct: false },
          //     { text: "des", correct: true },
          //     { text: "le", correct: false }
          //   ]
          // },
          // {
          //   id: 8,
          //   question: "Quelle est la forme correcte du futur proche ?",
          //   answers: [
          //     { text: "Je vais aller", correct: true },
          //     { text: "J'irai", correct: false },
          //     { text: "Je allais", correct: false },
          //     { text: "J'ai été", correct: false }
          //   ]
          // },
          // {
          //   id: 9,
          //   question: "Quel verbe est au subjonctif présent ?",
          //   answers: [
          //     { text: "que je sois", correct: true },
          //     { text: "je suis", correct: false },
          //     { text: "j'étais", correct: false },
          //     { text: "je serais", correct: false }
          //   ]
          // },
          // {
          //   id: 10,
          //   question: "Conjuguez 'faire' pour 'tu' au présent.",
          //   answers: [
          //     { text: "fais", correct: true },
          //     { text: "fait", correct: false },
          //     { text: "faisais", correct: false },
          //     { text: "feras", correct: false }
          //   ]
          // }
        ],
        vocabulary: [
          {
            id: 11,
            question: "Quel mot signifie 'manger rapidement' ?",
            answers: [
              { text: "Grignoter", correct: true },
              { text: "Courir", correct: false },
              { text: "Dormir", correct: false },
              { text: "Parler", correct: false }
            ]
          },
          {
            id: 12,
            question: "Quel est le synonyme de 'rapide' ?",
            answers: [
              { text: "Lent", correct: false },
              { text: "Vite", correct: true },
              { text: "Petit", correct: false },
              { text: "Grand", correct: false }
            ]
          },
          {
            id: 13,
            question: "Quel mot désigne un vêtement ?",
            answers: [
              { text: "Chaussure", correct: true },
              { text: "Table", correct: false },
              { text: "Chien", correct: false },
              { text: "Voiture", correct: false }
            ]
          },
          // {
          //   id: 14,
          //   question: "Quel est le contraire de 'heureux' ?",
          //   answers: [
          //     { text: "Triste", correct: true },
          //     { text: "Content", correct: false },
          //     { text: "Petit", correct: false },
          //     { text: "Fatigué", correct: false }
          //   ]
          // },
          // {
          //   id: 15,
          //   question: "Quel mot signifie 'beaucoup de bruit' ?",
          //   answers: [
          //     { text: "Calme", correct: false },
          //     { text: "Silence", correct: false },
          //     { text: "Vacarme", correct: true },
          //     { text: "Paisible", correct: false }
          //   ]
          // },
          // {
          //   id: 16,
          //   question: "Quel mot complète : 'Il pleut ___ dehors' ?",
          //   answers: [
          //     { text: "fortement", correct: true },
          //     { text: "légèrement", correct: false },
          //     { text: "tranquillement", correct: false },
          //     { text: "petitement", correct: false }
          //   ]
          // },
          // {
          //   id: 17,
          //   question: "Quel mot est un verbe ?",
          //   answers: [
          //     { text: "Danser", correct: true },
          //     { text: "Heureux", correct: false },
          //     { text: "Table", correct: false },
          //     { text: "Bleu", correct: false }
          //   ]
          // },
          // {
          //   id: 18,
          //   question: "Quel mot désigne un aliment ?",
          //   answers: [
          //     { text: "Pomme", correct: true },
          //     { text: "Chien", correct: false },
          //     { text: "Bureau", correct: false },
          //     { text: "Stylo", correct: false }
          //   ]
          // },
          // {
          //   id: 19,
          //   question: "Quel mot désigne un lieu ?",
          //   answers: [
          //     { text: "École", correct: true },
          //     { text: "Chaud", correct: false },
          //     { text: "Rouge", correct: false },
          //     { text: "Sourire", correct: false }
          //   ]
          // },
          // {
          //   id: 20,
          //   question: "Quel mot est un adjectif ?",
          //   answers: [
          //     { text: "Grand", correct: true },
          //     { text: "Manger", correct: false },
          //     { text: "Chat", correct: false },
          //     { text: "Vélo", correct: false }
          //   ]
          // }
        ],
        comprehension: [
          {
            id: 21,
            question: "Dans la phrase 'Paul regarde un film', que fait Paul ?",
            answers: [
              { text: "Il regarde un film", correct: true },
              { text: "Il mange", correct: false },
              { text: "Il dort", correct: false },
              { text: "Il écrit", correct: false }
            ]
          },
          {
            id: 22,
            question: "Que signifie 'se lever tôt' ?",
            answers: [
              { text: "Se réveiller à une heure avancée", correct: false },
              { text: "Se réveiller tôt le matin", correct: true },
              { text: "Dormir tard", correct: false },
              { text: "Se coucher tard", correct: false }
            ]
          },
          {
            id: 23,
            question: "Dans 'Je suis fatigué', qui est fatigué ?",
            answers: [
              { text: "Je", correct: true },
              { text: "Fatigué", correct: false },
              { text: "Personne", correct: false },
              { text: "Toi", correct: false }
            ]
          },
          // {
          //   id: 24,
          //   question: "Quel mot est utilisé pour décrire un objet chaud ?",
          //   answers: [
          //     { text: "Brûlant", correct: true },
          //     { text: "Froid", correct: false },
          //     { text: "Dur", correct: false },
          //     { text: "Mou", correct: false }
          //   ]
          // },
          // {
          //   id: 25,
          //   question: "Que signifie 'avoir soif' ?",
          //   answers: [
          //     { text: "Vouloir boire", correct: true },
          //     { text: "Vouloir manger", correct: false },
          //     { text: "Dormir", correct: false },
          //     { text: "Courir", correct: false }
          //   ]
          // },
          // {
          //   id: 26,
          //   question: "Quel est le pluriel de 'cheval' ?",
          //   answers: [
          //     { text: "Chevaux", correct: true },
          //     { text: "Chevals", correct: false },
          //     { text: "Chevauxs", correct: false },
          //     { text: "Chevaus", correct: false }
          //   ]
          // },
          // {
          //   id: 27,
          //   question: "Que fait-on avec un stylo ?",
          //   answers: [
          //     { text: "On écrit", correct: true },
          //     { text: "On coupe", correct: false },
          //     { text: "On mange", correct: false },
          //     { text: "On dort", correct: false }
          //   ]
          // },
          // {
          //   id: 28,
          //   question: "Que signifie 'écouter de la musique' ?",
          //   answers: [
          //     { text: "Lire un livre", correct: false },
          //     { text: "Entendre de la musique", correct: true },
          //     { text: "Dormir", correct: false },
          //     { text: "Courir", correct: false }
          //   ]
          // },
          // {
          //   id: 29,
          //   question: "Quel est le féminin de 'ami' ?",
          //   answers: [
          //     { text: "Amie", correct: true },
          //     { text: "Ame", correct: false },
          //     { text: "Amis", correct: false },
          //     { text: "Amitié", correct: false }
          //   ]
          // },
          // {
          //   id: 30,
          //   question: "Que signifie 'faire ses devoirs' ?",
          //   answers: [
          //     { text: "Travailler pour l'école", correct: true },
          //     { text: "Manger", correct: false },
          //     { text: "Dormir", correct: false },
          //     { text: "Jouer", correct: false }
          //   ]
          // }
        ]
      }
    }
  ];
  
  
  
  localStorage.setItem("questions", JSON.stringify(app));