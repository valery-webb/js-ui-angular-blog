js-ui-angular-blog
==================

1. Develop:
  * Clone this repo
  * Install nodejs
  * Install grunt
  * Run 'npm install' from root directory
  * Make build by command 'grunt'
  * Watch less by command 'grunt run-less'

2. Use:
  * Just clone this repo and run index.html via localhost

<hr />
compatibility: IE8+
<br />
custom grid system: utils.less
<br />
polyfills: html5shiv, respondjs

<hr />
<h2><b>PROJECT DOCS:</b></h2>

<b>1. CSS:</b>
  * Custom 12's grid system: ".clmn-1" --- ".clmn-12" wraped into ".h-row"
  * ".row-wrapper" correct viewport's holder (min-width/max-width values)
  * ".offset-wrapper" is equals to body width container

<b>2. DECLARATION & LOADING MODULES:</b>
  * <b>1. Module declaration</b> (module.js) is factory of modules.
  * <b>2. Module loader </b> (index.js) is async modules loader.
  * <b>3. Module component </b> (module-name.js).


<b>3. JS CORE UI COMPONENTS:</b>
  * Core directives usage:

