js-ui-angular-blog
==================

1. Develop:
  * Clone this repo
  * Install nodejs
  * Install grunt
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
  * Core directives naming:
  ```html
  <core-directive-name></core-directive-name>
  ```
  * "templateUrl" is source for core directive template "core-modal-dialog.html"
  * custom directive content loading via "ng-include" into the directive:
  ```html
  <core-modal-dialog>
      <!-- injecting custom modal content via ng-include src -->
      <div ng-include src=" 'partials/add-post-form.html' "></div>
  </core-modal-dialog>
  ```
  * for any logic in custom modal content, just add the controller:
  ```html
    <form ng-controller="AddPostCtrl">
    </form>
  ```
