> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Red Pers
Red pers is een toegankelijk en inclusief opleidingsplatform dat is bedoeld voor jonge, aspirerende journalisten.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
De website is erg nieuw, ze willen graag een beter versie van de website. De website bestaat nu uit elementor en ze willen graag over uit een uitgebreider functionelere versie van de website. De user experience is nog matig en kan verbetert worden. De mobiele versie is ook nog erg vaag. Zij willen graag een website zien die zich niet afhangt van plugins en programma’s als wordpress en elementor

Er zijn verschillende weergave. Waarbij artikelen worden weergeven, maar ook een onderwerp waarbij een fotogalerij wordt weer gegeven. Bij deze sprint is het de bedoeling om vooral te focussen op de artikelen, die het grootste deel van de website onderbouwd. Bij de Scrap Yard pagina kan je alle onderdelen zien van een artikel pagina. Het design mag doorontwikkeld worden. De user experience is voor nu niet goed en duidelijk, dus dat mag verbeterd worden. Bepaalde elementen zijn nog niet helemaal duidelijk.

<!-- Voeg een mooie poster visual toe 📸 -->
### Home 📸
**Desktop**

<img width="800px" alt="Desktop Home" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/837db6b3-1c49-4a3a-8abf-b68b4c7112dc">

**Mobile**

<img width="400px" alt="Mobile Home" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/4353cc80-cfb9-43cf-b3c2-7ba4b3928fdd">

<img width="400px" alt="Mobile Menu" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/5783b268-0b74-4ad0-aaae-790bec72775c">

### Categorie 📸
**Desktop**

<img width="800px" alt="Desktop Categorie" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/2baad904-a749-4233-9aa6-e2e04687d898">

**Mobile**

<img width="400px" alt="Mobile Categorie" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/8112ab39-69b2-4c11-990f-ec4e31676777">

### Artikel 📸
**Desktop**

<img width="800px" alt="Desktop Artikel" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/a423bc62-6365-42a5-a00f-daef928621ce">

**Mobile**

<img width="400px" alt="Mobile Artikel" src="https://github.com/zoepje/server-side-rendering-server-side-website/assets/144004461/398b3195-f48c-40ea-a141-4daec163669e">


<!-- Voeg een link toe naar Github Pages 🌐-->
Je kunt hier de website bezoeken🌐 https://server-side-redpers.onrender.com/

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Voor dit project heb ik een responsieve startpagina, categoriepagina en artikelweergave ontwikkeld. Deze zijn dynamisch en halen gegevens op uit de Red Pers WordPress API. Op de startpagina wordt een overzicht getoond van de 30 meest recente artikelen. In het menu kun je kiezen uit 8 hoofdcategorieën. Wanneer je op een categorie klikt, wordt je naar de bijbehorende categoriepagina geleid waar je een overzicht vindt van de artikelen binnen die categorie. Door op een artikel te klikken, word je naar de pagina van dat artikel gebracht waar je het volledige artikel kunt lezen.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Bij het ontwikkelen van deze website heb ik gebruikgemaakt van EJS, CSS, JavaScript en Node.js. In mijn EJS-templates heb ik zowel de HTML-structuur als dynamische data uit de API geïntegreerd. Met CSS heb ik de visuele opmaak van de website gemaakt. Met JavaScript heb ik een uitklapbaar menu geïmplementeerd, en met behulp van Node.js haal ik de benodigde data op uit de API. Voor meer details over hoe ik dit specifiek heb gebouwd, kun je terecht in mijn [Wiki](https://github.com/zoepje/server-side-rendering-server-side-website/wiki/3.-Bouwen).


## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Als je aan deze website wilt werken kun je de reposertory forken:
1. Open deze repository in jouw editor.
1. Ga naar de terminal en voer het commando `npm install` uit. Hiermee installeer je Express en alle benodigde afhankelijkheden via NPM.
1. Start de server met het commando `npm start`.
1. Pas alles naar eigen wens aan.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
