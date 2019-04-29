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
  * Downloaded from [Pinterest](https://www.pinterest.com/pin/221450506656593446/)
3. Frameworks
  * matplotlib
  * vega-lite

---

### Houses

** A [story map](http://viewers-guide.hbo.com/game-of-thrones/season-1/episode-1/map/location/68/volantis-free-city) for season 1 **

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
    <img src="./fig/houses_intro.jpg" style="width:60%">
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
<p>Mentioned deaths of nobility and common people are almost same.</p>

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

<h2>gender of deaths</h2>
<p>Gender distribution for nobility and common people is almost the same.</p>

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

### Deaths in Each Year

|   Year   |     Deaths    |  
|----------|:-------------:|
| 297      |  3            |
| 298      |    46  |
| 299 | 156 |
|300|100|
|Unknown|612|

** In the following, unknown year is set to 301 and unknown book/chapter is set to 0. ** 

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
    <img src="./fig/all_death_years.jpg" style="width:30%">
  </div>

</div>

</body>
</html>
