/*** Express setup & start ***/

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Importeer het npm pakket express uit de node_modules map
import express, { response } from 'express'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorgt dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/*** Routes & data ***/
const apiUrl = 'https://redpers.nl/wp-json/wp/v2/'
const postsUrl = apiUrl + 'posts'
const categoriesUrl = apiUrl + 'categories'
const mediaUrl = apiUrl + 'media'
// const usersUrl = apiUrl + 'users'
const categoriesData = [
  {"id": 9, "name": "Binnenland", "slug": "binnenland"},
  {"id": 1010, "name": "Buitenland", "slug": "buitenland"}, 
  {"id": 10, "name": "Columns", "slug": "columns"},
  {"id": 6, "name": "Economie", "slug": "economie"},
  {"id": 4, "name": "Kunst & Media", "slug": "kunst-media"},
  {"id": 3211, "name": "Podcasts", "slug": "podcast"},
  {"id": 63, "name": "Politiek", "slug": "politiek"},
  {"id": 94, "name": "Wetenshap", "slug": "wetenschap"},
 ]

// Maak een GET route voor de home
app.get('/', function (request, response) {
  fetchJson(postsUrl + '?per_page=30').then((posts) => {
  // Render home.ejs uit de views map en geef de opgehaalde data mee als variabele
  // HTML maken op basis van JSON data

    // Voor alle posts
    // Zet de string data uit API om naar een datum die er mooi uit ziet
    for (var i=0; i < posts.length; i++) {
      const parsedDate = new Date(posts[i].date), // Haal de string date van de post op
            day = parsedDate.getDate(), // Haal de dag uit de string
            options = {month: "short"}, // De maand moet kort geschreven zijn
            month = Intl.DateTimeFormat("nl-NL", options).format(parsedDate), // Haal de maand op en zet het in woordvorm in de taal nederlands
            newDate = day + ' ' + month; // Maak een nieuwe datum met "dag maand"
      posts[i].date = newDate // Zet waarde van de datum naar de nieuwe datum
    }

    response.render('home', {posts: posts, categories: categoriesData})
  })
})

// Maak een GET route voor de category
app.get('/categorie/:slug', function (request, response) {
  // maak const category aan
  // Vind in de array categoriesData de category.slug die gelijk is aan de request.params.slug
  const category = categoriesData.find((category) => category.slug == request.params.slug);

  // Doe meerdere fetchJson voor de posts en de categorie data
  Promise.all([fetchJson(postsUrl + '?categories=' + category.id), fetchJson(categoriesUrl + '/?slug=' + request.params.slug)]).then(([postData, category]) => {
    // Render catogorie.ejs uit de views map en geef de opgehaalde data mee als variabele
    // HTML maken op basis van JSON data

      // Voor alle posts die in postData zitten
      // Zet de string data uit API om naar een datum die er mooi uit ziet
      for (var i=0; i < postData.length; i++) {
        const parsedDate = new Date(postData[i].date), // Haal de string date van de post op
              day = parsedDate.getDate(), // Haal de dag uit de string
              options = {month: "long"}, // De maand moet helemaal uitgeschreven zijn
              month = Intl.DateTimeFormat("nl-NL", options).format(parsedDate), // Haal de maand op en zet het in woordvorm in de taal nederlands
              year = parsedDate.getFullYear(), // Haal het jaar uit de string
              newDate = day + ' ' + month + ' ' + year; // Maak een nieuwe datum met "dag maand jaar"
        postData[i].date = newDate // Zet waarde van de datum naar de nieuwe datum
      }

    response.render('category', {posts: postData, category: category, categories: categoriesData});
  })
})

// Maak een GET route voor de post
app.get('/post/:slug', function (request, response) {
  Promise.all([fetchJson(postsUrl + '/?slug=' + request.params.slug), fetchJson(mediaUrl + '?per_page=30')]).then(([postData, mediaData]) => {
    // Render post.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
    // HTML maken op basis van JSON data

      // Zet de string data uit API om naar een datum die er mooi uit ziet
      const parsedDate = new Date(postData[0].date), // Haal de string date van de post op
        day = parsedDate.getDate(), // Haal de dag uit de string
        options = {month: "long"}, // De maand moet helemaal uitgeschreven zijn
        month = Intl.DateTimeFormat("nl-NL", options).format(parsedDate), // Haal de maand op en zet het in woordvorm in de taal nederlands
        year = parsedDate.getFullYear(), // Haal het jaar uit de string
        hours = (parsedDate.getHours() < 10 ? '0' : ' ') + parsedDate.getHours(), // Als getHours() onder 10 is zet geef '0' ander ''. + haal uren uit de string
        minutes = (parsedDate.getMinutes() < 10 ? '0' : '') + parsedDate.getMinutes(), // Als getMinutes() onder 10 is zet geef '0' ander ''. + haal minuten uit de string
        time = hours + ':' + minutes, // Maak  een tijd aan "hours:minuten"
        newDate = day + ' ' + month + ' ' + year + ' ' + time; // Maak een nieuwe datum met "dag maand jaar tijd"
      postData[0].date = newDate // Zet waarde van de datum naar de nieuwe datum
    
    response.render('post', {post: postData, categories: categoriesData})
  })
})