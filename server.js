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
    response.render('home', {posts: posts, categories: categoriesData})
  })
})

// Maak een GET route voor de category
app.get('/categorie/:slug', function (request, response) {
  Promise.all([fetchJson(categoriesUrl + '/?slug=' + request.params.slug), fetchJson(postsUrl + '?per_page=100')]).then(([categoryData, postData]) => {
    // Render category.ejs uit de views map en geef de opgehaalde data mee als variabele
    // HTML maken op basis van JSON data
    
    //Filter de postData zodat hij alleen maar de posts die het zelfde id hebben als deze category
    let filterData = postData.filter(post => {
      return post.categories == categoryData[0].id
    })
    response.render('category', {category: categoryData, categories: categoriesData, posts: filterData})
  })
})

// Maak een GET route voor de post
app.get('/post/:slug', function (request, response) {
  Promise.all([fetchJson(postsUrl + '/?slug=' + request.params.slug), fetchJson(mediaUrl + '?per_page=30')]).then(([postData, mediaData]) => {
    // Render post.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
    // HTML maken op basis van JSON data

    let filterData = mediaData.filter(media => {
      return media.id == postData[0].featured_media
    })
    response.render('post', {post: postData, media: filterData, categories: categoriesData})
  })
})