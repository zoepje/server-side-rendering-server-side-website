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
const mediaData = await fetchJson('https://redpers.nl/wp-json/wp/v2/media')

// Maak een GET route voor de index
app.get('/', function (request, response) {
  fetchJson('https://redpers.nl/wp-json/wp/v2/posts').then((posts) => {

    // Render index.ejs uit de views map en geef de opgehaalde data mee als variabele
    // HTML maken op basis van JSON data
    response.render('index', {posts: posts, media: mediaData})
  })
})

// Maak een GET route voor de catogorie
app.get('/catogorie', function (request, response) {
  fetchJson().then((apiData) => {
    
    // Render catogorie.ejs uit de views map en geef de opgehaalde data mee als variabele
    // HTML maken op basis van JSON data
    response.render('catogorie', {})
  })
})

// Maak een GET route voor de post
app.get('/post/:id', function (request, response) {
  fetchJson('https://redpers.nl/wp-json/wp/v2/posts/' + request.params.id).then((postData) => {
  
    //Filter de mediaData zodat hij alleen maar de media die het zelfde id heeft als featered_media
    let filterData = mediaData.filter(media => {
      return media.id == postData.featured_media
    })
    
    // Render post.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
    // HTML maken op basis van JSON data
    response.render('post', {post: postData, media: filterData})
  })
})