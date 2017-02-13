var Cars = require('../models/cars');

function indexCars(req , res) {
  Cars.find({}, function(err,cars){
    if(err){return res.status(500)}
    res.render("posts/index" , {
    title: "Posts",
    cars: cars
    });
  })
}

function showCars(req , res) {
  Cars.find({"id" :req.params.id},function (err, cars){
    if(err){return res.status(500)}
    console.log(cars)
    res.render("posts/show" , {
    cars: cars
    })
  })
}

// EDIT - GET /:id/edit
function editCars(req , res) {
  Cars.findById(req.params.id, function(err,cars){
    if(!post){return res.status(404)}
    if(err){return res.status(500).send(err.message)}
    res.render("posts/edit" , {
      title: "Edit Post",
      cars: cars
    });
  });
}

// NEW - GET /new
function newCars(req , res) {
  var car = {
    id: "",
    name: "",
    price: "",
    condition: "",
    year: "",
    body: "",
    color: ""
  }
  res.status(200).render("posts/new", {car: car});
}

// DELETE - DELETE /:id
function deleteCars(req , res) {
    Cars.remove(req.params.id, function(err,cars){
    if(!post){return res.status(404)}
    if(err){return res.status(500).send(err.message)}
    res.render("posts/index");
  });
}

// UPDATE - UPDATE /:id
function updateCars(req , res) {
  Cars.findByIdAndUpdate(req.params.id, req.body, function(err,car){
    if(err){return res.status(500).send(err.message)}
    res.redirect('/')
  });
}

// CREATE - POST /
function createCars(req , res) {
    Cars.create(req.body, function(err,cars){
    if(err){return res.status(500).send(err.message)}
      res.redirect("/");
  })
}

// export all our controller functions in an object
module.exports = {

  index:indexCars,
  show: showCars,
  edit: editCars,
  new: newCars,
  delete: deleteCars,
  update: updateCars,
  create: createCars

}
