# Hi there!

This is Yixin Zhang

**This is the presentation!**

<p class="fragment">Hello.  This is a fragment.</p>

---

<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.column2 {
  float: left;
  width: 50%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row2::after {
  content: "";
  clear: both;
  display: table;
}
</style>
</head>
<body>

<h2>Images Side by Side</h2>
<p>How to create side-by s with the CSS float property:</p>

<div class="row2">
  <div class="column2">
    <img src="./fig/nobility_deaths_pie.jpg"  style="width:100%">
  </div>
  <div class="column2">
    <img src="./fig/alleg_deaths_pie.jpg" style="width:100%">
  </div>
</div>

</body>
</html>


---

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |


<!-- .slide: data-background-color="#999999" -->

---

<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.column3 {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row3::after {
  content: "";
  clear: both;
  display: table;
}
</style>
</head>
<body>

<h2>Images Side by Side</h2>
<p>How to create side-by-side images with the CSS float property:</p>

<div class="row3">
  <div class="column3">
    <img src="./fig/gender_all_deaths_pie.jpg" alt="all" style="width:100%">
  </div>
  <div class="column3">
    <img src="./fig/gender_nobility_deaths_pie.jpg" alt="nob" style="width:100%">
  </div>
  <div class="column3">
    <img src="./fig/gender_commonility_deaths_pie.jpg" alt="com" style="width:100%">
  </div>
</div>

</body>
</html>


---

<!-- .slide: data-background-iframe="https://www.youtube.com/embed/gmUK9EMy6l8" data-background-interactive -->