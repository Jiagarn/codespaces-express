const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.use(express.static("public"))


let products = []
for (let i = 1 ; i<=100;i++){
  let product = { 
    id: i,
    name: `product ${i}`,
    description: `this product is suck ${i}`,
    price: (Math.random()*100).toFixed(2)
  }
  products.push(product)
}

// app.get('/', (req, res) => {
//   let persons = [
//     {
//       id:1,
//       name: "A",
//       tel: "123"
//     },
//     {
//       id:2,
//       name: "B",
//       tel: "1234"
//     },
//     {
//       id:3,
//       name: "C",
//       tel: "12345"
//     }
//   ]

//   res.render('index',{persons})
// })

app.get('/', (req, res) => {
  res.render('index')
})


app.get('/page2',(req,res) => {
  let q = req.query.search_query
res.render('page2',{q})
})

app.get('/product',(req,res)=>{
  let limit = parseInt(req.query.limit)
  let page = parseInt(req.query.page)

  //page = 1, page = 2
  let startIndex = (page - 1) * limit
  let endIndex = page * limit
  let paginatedProduct = products.slice(startIndex,endIndex)

  res.render("product",{paginatedProduct, limit, page})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
