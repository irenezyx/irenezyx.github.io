# Data Visualization for Game of Thrones Character Deaths

Yixin Zhang

**Did you watch the new episode last night?**

<p class="fragment">I won't be the spoiler: data only contains the first 5 seasons!</p>

---

### Brief intro
1. Data
  * Source: [Kaggle](https://www.kaggle.com/mylesoneill/game-of-thrones)
  * License: [Public Domain](https://creativecommons.org/publicdomain/zero/1.0/), no copyright
  * Based on books (Season 1-5)
  * Preprocessed
2. Images
  * Downloaded from [Vexels](https://www.vexels.com/vectors/preview/78080/game-of-thrones-houses)
3. Frameworks
  * matplotlib
  * vega-lite

---

### Houses

<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.column0 {
  float: left;
  width: 100%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row0::after {
  content: "";
  clear: both;
  display: table;
}
</style>
</head>
<body>

<div class="row0">
  <div class="column0">
    <img src="./fig/houses_intro.jpg" style="width:80%">
  </div>

</div>

</body>
</html>

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

<h2>Summary of Nobility</h2>
<p>Mentioned deaths of nobility and common people are almost same: it's more like a court war!</p>
<p>

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