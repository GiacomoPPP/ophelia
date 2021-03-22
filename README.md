# ophelia
## Perché *Ophelia*?
Se ti stai chiedendo perché ho deciso di costruire questo progetto, la risposta è che, dopo aver seguito corsi di Javascript e React nei quali costruivo passo dopo passo applicazioni seguendo le indicazioni di un docente, avevo voglia di sporcarmi le mani in un piccolo processo mentale di design e mettere in gioco la mia abilità di trasporre in codice tutto ciò che volevo ottenere da React.

Se invece ti stai semplicemente chiedendo perché abbia scelto questo nome, Ophelia è il nome del mio cane.

## Cosa vuole fare questa app?
La mia idea è quella di offrire all'utente uno strumento per organizzare impegni a lungo termine, scegliendone il giorno in cui comparirà in una schermata principale. In questa, l'impegno rimarrà fino a quando l'utente non l'avrà portato a termine. Un impegno può quindi essere una faccenda domestica, l'acquisto di un regalo che si continua a procrastinare o il pagamento di una bolletta.

## Com'è strutturata l'interfaccia?
L'interfaccia è suddivisa in due schermate, *Oggi* e *Calendario*, alle quali si può accedere tramite una barra di navigazione.

Entrambe presentano un bottone *Crea nuovo impegno*, che aprirà un popup nel quale si possono inserire nome e data di un nuovo impegno e caricarlo.

<img src="https://user-images.githubusercontent.com/80257825/111975596-147e9400-8b01-11eb-9bc2-a36d4fb4f9b6.gif" width="413" height="830"/>

*Calendario* contiene, per l'appunto, un calendario aperto sul mese corrente. Nei giorni nei quali un impegno inizia sono collocati dei puntini; inoltre, premendo su una data si aprirà un popup che presenta una lista degli impegni programmati per quel giorno.

<img src="https://user-images.githubusercontent.com/80257825/111975630-1b0d0b80-8b01-11eb-9399-358408b1e9f5.gif" width="413" height="830"/>

Dulcis in fundo, *Oggi* contiene una lista degli impegni, programmati per i giorni precedenti o per quello corrente, che non siano ancora stati compiuti. Premendo su un impegno si aprirà un popup nel quale si potrà vedere in che giorno quell'impegno è iniziato e si potrà rimuoverlo premendo su un pulsante 'Fatto'.

<img src="https://user-images.githubusercontent.com/80257825/111983712-b8207200-8b0a-11eb-89be-4c92d2db1bfd.gif" width="413" height="830"/>
