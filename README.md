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


<b>PROJECT DOCUMENTATION:</b>

1. CSS:
  * Custom 12's grid system: ".clmn-1" --- ".clmn-12" wraped into ".h-row"
  * ".row-wrapper" correct viewport's holder (min-width/max-width values)
  * ".offset-wrapper" is equals to body width container

2. DEFINING & LOADING MODULES:
  * module.js is factory of modules (e.g. app.controllers.ctrlOne, app.directives.dirOne etc. )
  * index.js is async modules loader


3. JS CORE UI COMPONENTS:
  "core-modal-dialog"
  * directive name starts with: <core-directiveName></core-directiveName>
  * "templateUrl" is source for core directive template "core-modal-dialog.html"
  * custom directive content loading via "ng-include" into the directive:

```html
    <core-modal-dialog>
        <!-- needed modal content will included from  ng-include source -->
        <div ng-include src=" 'partials/add-post-form.html' "></div>
    </core-modal-dialog>
```
  * You can use any controller in modals, just add controller
  which you need here:

  ```html
    <form ng-controller="AddPostCtrl">
    </form>
```
