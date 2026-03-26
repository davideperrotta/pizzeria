# 🍕 Pizzeria Deliziosa

Applicazione web per ordinare pizze online, sviluppata con HTML, CSS e JavaScript puro, ottimizzata per GitHub Pages.

## 🚀 Demo Live

L'applicazione è disponibile online su: **https://davideperrotta.github.io/pizzeria/**

## 📋 Caratteristiche

### Menu Pizze
- 10 tipi di pizze diverse con ingredienti e prezzi
- Sistema di selezione con quantità
- Carrello in tempo reale
- Calcolo automatico del totale

### Gestione Ordini
- Visualizzazione completa degli ordini
- Sistema di stati: "in attesa" → "in preparazione" → "pronto" → "consegnato"
- Statistiche in tempo reale (ordini totali, in attesa, fatturato)
- Auto-refresh ogni 30 secondi
- Storage persistente con localStorage

### Design
- Interfaccia moderna e responsive
- Gradienti e animazioni CSS
- Layout ottimizzato per mobile e desktop
- User experience intuitiva

## 🛠️ Tecnologie

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Storage**: localStorage (per dati persistenti)
- **Hosting**: GitHub Pages
- **Design**: Responsive design con CSS Grid e Flexbox

## 📁 Struttura del Progetto

```
pizzeria/
├── public/
│   ├── index.html      # Pagina principale per ordinare
│   ├── orders.html     # Pagina gestione ordini
│   └── api.js          # API statica simulata
├── .gitignore          # File ignorati da Git
└── README.md           # Documentazione
```

## 🚀 Come Usare

### Online (GitHub Pages)
1. Vai a https://davideperrotta.github.io/pizzeria/
2. Seleziona le pizze desiderate
3. Inserisci il tuo nome
4. Invia l'ordine
5. Vai alla pagina "Vedi Ordini" per gestire gli ordini

### Locale
1. Clona il repository:
   ```bash
   git clone https://github.com/davideperrotta/pizzeria.git
   cd pizzeria
   ```

2. Apri `public/index.html` nel browser

## 📱 Funzionalità Principali

### Pagina Principale
- Visualizzazione menu pizze con foto e ingredienti
- Sistema di selezione quantità (+/-)
- Carrello fluttuante con riepilogo ordine
- Form inserimento nome cliente
- Conferma ordine con messaggio di successo

### Pagina Ordini (Admin)
- Lista completa ordini con dettagli
- Gestione stati ordini con pulsanti dedicati
- Statistiche in tempo reale
- Aggiornamento automatico ogni 30 secondi
- Filtraggio per stato

## 💾 Dati e Persistenza

- **Menu pizze**: Dati statici integrati nell'applicazione
- **Ordini**: Salvati in localStorage del browser
- **Stati ordini**: Persistenti tra le sessioni
- **Statistiche**: Calcolate in tempo reale dagli ordini salvati

## 🎨 Design e UX

- **Colori**: Schema caldo con gradienti arancioni/rossi
- **Tipografia**: Font leggibili e gerarchia chiara
- **Animazioni**: Transizioni fluide e micro-interazioni
- **Responsive**: Layout adattivo per tutti i dispositivi
- **Accessibilità**: Struttura semantica e navigazione intuitiva

## 🔧 Sviluppo

### Modifiche
- Modifica i file HTML/CSS/JS nella cartella `public/`
- Le modifiche sono immediatamente visibili ricaricando la pagina
- Per GitHub Pages, esegui commit e push delle modifiche

### Estensioni
- Aggiungi nuove pizze in `public/api.js`
- Modifica stili nei file CSS
- Implementa nuove funzionalità JavaScript

## 📄 Licenza

MIT License - libero per uso personale e commerciale

## 🤝 Contributi

Contributi benvenuti! Apri una issue o invia una pull request.

---

**Sviluppato con ❤️ per la community italiana**
