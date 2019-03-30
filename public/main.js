(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _todos_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todos/todo-list/todo-list.component */ "./src/app/todos/todo-list/todo-list.component.ts");
/* harmony import */ var _todos_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todos/todo-details/todo-details.component */ "./src/app/todos/todo-details/todo-details.component.ts");
/* harmony import */ var _todos_todo_delete_todo_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todos/todo-delete/todo-delete.component */ "./src/app/todos/todo-delete/todo-delete.component.ts");
// MEAN Portfolio
// File Name: app-routing.module.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

// Modules


// Components











var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home' } },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: 'About' } },
    { path: 'products', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], data: { title: 'Products' } },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], data: { title: 'Services' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], data: { title: 'Contact' } },
    { path: 'todo-list', component: _todos_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__["TodoListComponent"], data: { title: 'Todo List' } },
    { path: 'todo-list/add', component: _todos_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_12__["TodoDetailsComponent"], data: { title: 'Add Todo' } },
    { path: 'todo-list/edit/:id', component: _todos_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_12__["TodoDetailsComponent"], data: { title: 'Edit Todo' } },
    { path: 'todo-list/delete/:id', component: _todos_todo_delete_todo_delete_component__WEBPACK_IMPORTED_MODULE_13__["TodoDeleteComponent"], data: { title: 'Delete Todo' } },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], data: { title: 'Login' } },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], data: { title: 'Register' } },
    { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: app.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7SUFLSTs7R0NKSixhQUFhOztHQUNiO0lBQ0ksa0NBQWtDO0VBQ3BDOztHQUVBLG9CQUFvQjs7R0FDcEI7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxpQkFBaUI7RUFDbkI7O0dBRUE7RUFDQSxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25COztHQUVBO0dBQ0MsVUFBVTtHQUNWLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLGlCQUFpQjtFQUNsQjs7R0FFQSx5QkFBeUI7O0dBQ3pCO0lBQ0Usb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztFQUNyQzs7R0FFQSxrQ0FBa0M7O0dBQ2xDO0VBQ0EsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSx1QkFBdUI7O0dBQ3ZCO0lBQ0UsaUJBQWlCO0VBQ25CLHlEQUF5RDtFQUN6RCw2QkFBNkI7RUFJN0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZjs7R0FFQSxZQUFZOztHQUNaO0VBQ0EsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWjs7R0FHQSxhQUFhOztHQUNiOztFQUVBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEscUJBQXFCOztHQUNyQjtFQUNBLGdFQUFnRTtFQUNoRTs7R0FFQSxpQkFBaUI7O0dBQ2pCO0VBQ0EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGNBQWM7RUFHZCxvQkFBb0I7RUFDcEI7O0dBRUE7RUFDQSxjQUFjO0VBQ2Q7O0dBRUEsa0JBQWtCOztHQUNsQjs7Ozs7O0VBTUEsNkRBQTZEO0VBQzdEOztHQUVBLG9CQUFvQjs7R0FDcEI7RUFDQSxtQ0FBbUM7RUFDbkM7O0dBRUE7RUFDQSxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwrQkFBK0I7RUFDL0I7O0dBRUE7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Q7O0dBRUEsd0JBQXdCOztHQUN4QjtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsOEJBQThCO0VBRzlCLG9CQUFvQjtFQUNwQjs7R0FFQSxnQ0FBZ0M7O0dBQ2hDO0VBQ0Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEI7O0dBRUEsMEJBQTBCOztHQUMxQjtFQUNBLFVBQVU7RUFDVjs7R0FFQTtFQUNBLHdCQUF3QjtFQUN4Qjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDZEQUE2RDtFQUM3RDs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0EsV0FBVztFQUNYLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLDBEQUEwRDtFQUMxRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTUVBTiBQb3J0Zm9saW9cclxuICAgRmlsZSBOYW1lOiBhcHAuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div id=\"background\">\r\n<flash-messages></flash-messages>\r\n\r\n<router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// MEAN Portfolio
// File Name: app.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _todos_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todos/todo-list/todo-list.component */ "./src/app/todos/todo-list/todo-list.component.ts");
/* harmony import */ var _todos_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./todos/todo-details/todo-details.component */ "./src/app/todos/todo-details/todo-details.component.ts");
/* harmony import */ var _todos_todo_delete_todo_delete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./todos/todo-delete/todo-delete.component */ "./src/app/todos/todo-delete/todo-delete.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
// MEAN Portfolio
// File Name: app.module.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

// Modules




// COmponents















// Services


function jwtTokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _pages_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _todos_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_17__["TodoListComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _todos_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailsComponent"],
                _todos_todo_delete_todo_delete_component__WEBPACK_IMPORTED_MODULE_19__["TodoDeleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/todo.ts":
/*!********************************!*\
  !*** ./src/app/models/todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
// MEAN Portfolio
// File Name: todo.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
// MEAN Portfolio
// File Name: user.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: about.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogYWJvdXQuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\r\n  <div class=\"container container-inside-light\">\r\n      <!-- Title -->\r\n      <h2 class=\"text-center text-uppercase mb-5\">About Me</h2>\r\n      <hr />\r\n      <!-- Instroduction -->\r\n      <div class=\"col-lg-8 row\">\r\n          <div class=\"col-lg-11\">\r\n              <br />\r\n              <h2 class=\"mb-4\"><strong>Hello, My name is Minseok Choi.</strong></h2>\r\n              <h5 class=\"mb-3\">I'm a Software Engineering Technology Student at Centennial College in Toronto,\r\n                  Ontario. I will be graduating in April 2019.</h5>\r\n              <h5 class=\"mb-3\">I have an interest in web and mobile app development.\r\n                  I have keen eyes for web designs and spend efforts on efficient and clean code.\r\n                  I like to learn new technologies and enjoy challenges.</h5>\r\n              <h5 class=\"mb-3\"> My main languages are C# and Java.\r\n                  I use ASP.Net, Node.js for Web and API development, and Android Studio for Android Mobile App\r\n                  development. I have been used to handle RDBMS such as Microsoft SQL Server, Oracle, and MySQL.\r\n              </h5>\r\n              <h5 class=\"mb-3\"> If you want to see my details, please refer to the following resume file.</h5>\r\n          </div>\r\n          <!-- Profile Image -->\r\n          <div class=\"col-lg-1\">\r\n              <img alt=\"\" class=\"img-profil-about\" src=\"../assets/images/profil.jpg\"></div>\r\n          <hr>\r\n      </div>\r\n\r\n      <!-- Resume Download Button -->\r\n      <div class=\"text-center\">\r\n          <a class=\"btn btn-primary btn-xl center\" href=\"../Assets/files/Resume_MinseokChoi.pdf\" download>\r\n              Download Resume</a>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// MEAN Portfolio
// File Name: about.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019



var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        //super(route);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: contact.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzcmMvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7SUFLSTs7R0NKSixhQUFhOztHQUNiO0lBQ0ksa0NBQWtDO0VBQ3BDOztHQUVBLG9CQUFvQjs7R0FDcEI7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxpQkFBaUI7RUFDbkI7O0dBRUE7RUFDQSxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25COztHQUVBO0dBQ0MsVUFBVTtHQUNWLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLGlCQUFpQjtFQUNsQjs7R0FFQSx5QkFBeUI7O0dBQ3pCO0lBQ0Usb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztFQUNyQzs7R0FFQSxrQ0FBa0M7O0dBQ2xDO0VBQ0EsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSx1QkFBdUI7O0dBQ3ZCO0lBQ0UsaUJBQWlCO0VBQ25CLHlEQUF5RDtFQUN6RCw2QkFBNkI7RUFJN0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZjs7R0FFQSxZQUFZOztHQUNaO0VBQ0EsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWjs7R0FHQSxhQUFhOztHQUNiOztFQUVBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEscUJBQXFCOztHQUNyQjtFQUNBLGdFQUFnRTtFQUNoRTs7R0FFQSxpQkFBaUI7O0dBQ2pCO0VBQ0EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGNBQWM7RUFHZCxvQkFBb0I7RUFDcEI7O0dBRUE7RUFDQSxjQUFjO0VBQ2Q7O0dBRUEsa0JBQWtCOztHQUNsQjs7Ozs7O0VBTUEsNkRBQTZEO0VBQzdEOztHQUVBLG9CQUFvQjs7R0FDcEI7RUFDQSxtQ0FBbUM7RUFDbkM7O0dBRUE7RUFDQSxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwrQkFBK0I7RUFDL0I7O0dBRUE7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Q7O0dBRUEsd0JBQXdCOztHQUN4QjtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsOEJBQThCO0VBRzlCLG9CQUFvQjtFQUNwQjs7R0FFQSxnQ0FBZ0M7O0dBQ2hDO0VBQ0Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEI7O0dBRUEsMEJBQTBCOztHQUMxQjtFQUNBLFVBQVU7RUFDVjs7R0FFQTtFQUNBLHdCQUF3QjtFQUN4Qjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDZEQUE2RDtFQUM3RDs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0EsV0FBVztFQUNYLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLDBEQUEwRDtFQUMxRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTUVBTiBQb3J0Zm9saW9cclxuICAgRmlsZSBOYW1lOiBjb250YWN0LmNvbXBvbmVudC5jc3NcclxuICAgQXV0aG9yOiBNaW5zZW9rIENob2lcclxuICAgU3R1ZGVudElEOiAzMDA5MTcxODRcclxuICAgRGF0ZTogMDMvMjkvMjAxOVxyXG4gICAqL1xyXG5cclxuICAgQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuY3NzJzsiLCJcbi8qbmF2aWdhdGlvbiovXG4ubWFpbk5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgfVxuICBcbiAgLyogaW5kZXggY29udGFpbmVyICovXG4gIC5jb250YWluZXItZmFkZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBtaW4taGVpZ2h0OiA4MjBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lci1mYWRlLXJvdW5kIHtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lci1pbnNpZGUtbGlnaHQge1xuICAgd2lkdGg6IDk1JTtcbiAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XG4gICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgcGFkZGluZzogNTBweDtcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICB9XG4gIFxuICAvKnJvdW5kIGltYWdlIDEwMHB4IHNpemUqL1xuICAuaW1nLXByb2ZpbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggIzMzMzMzMztcbiAgfVxuICBcbiAgLypmb3IgcHJvZmlsZSBpbWFnZSBpbiBhYm91dCBwYWdlKi9cbiAgLmltZy1wcm9maWwtYWJvdXQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKnNtYWxsIGljb24qL1xuICAuaWNvbi1zbWFsbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC8qc2ltcGxlIG1hcmdpbiovXG4gIC5tYXJnaW4tdG9wLTUwcHgge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIFxuICAvKmxvZ28gaW1hZ2UqL1xuICAuaW1nLWxvZ28tbmFtZSB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmljb24gaW1hZ2UqL1xuICAuaW1nLWljb24ge1xuICB3aWR0aDogMTUwcHg7XHRcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbnRhaW5lciovXG4gICNiYWNrZ3JvdW5kIHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIik7ICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgbWluLWhlaWdodDogOTYlO1xuICB9XG4gIFxuICAvKmNvcHlyaWdodCovXG4gICNjb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIFxuICAvKiBib2R5IHNpemUqL1xuICBib2R5LFxuICBodG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLyogYm9keSBmb250LWZhbWlseSAqL1xuICBib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypocml6b250YWwgbGluZSovXG4gIGhyIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICBoci5saWdodCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLyogaHJlZiAqL1xuICBhIHtcbiAgY29sb3I6ICNlNjZkNWQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIC8qIGggZm9udC1mYW1pbHkgKi9cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qYmFja2dyb3VuZCBjb2xvcnMqL1xuICAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRleHQtZmFkZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB9XG4gIFxuICAuc2VydmljZS1ib3gge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3gqL1xuICAucG9ydGZvbGlvLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94IGNhcHRpb24qL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiBjb250ZW50Ki9cbiAgLnBvcnRmb2xpby1ib3ggLnBvcnRmb2xpby1ib3gtY2FwdGlvbiAucG9ydGZvbGlvLWJveC1jYXB0aW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGhvdmVyIG9wYWNpdHkqL1xuICAucG9ydGZvbGlvLWJveDpob3ZlciAucG9ydGZvbGlvLWJveC1jYXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZTY2ZDVkIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLypidXR0b24qL1xuICAuYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMDBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmJ0bi14bCB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjZkNWQ7XG4gIGJvcmRlci1jb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMzMzMyAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg2NCwgOTUsIDI0MCwgMC41KSAhaW1wb3J0YW50O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\r\n  <div class=\"container container-inside-light\">\r\n      <!-- Title -->\r\n      <h2 class=\"text-center text-uppercase mb-3\">Contact Me</h2>\r\n      <hr class=\"mb-5 mt-5\" />\r\n      <div class=\"col-lg-6 mx-auto\">\r\n          <!-- Contact Information -->\r\n          <h3 class=\"mb-3\">Minseok Choi Contact Info</h3>\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-4\">\r\n                  <label>Email Address: </label>\r\n              </div>\r\n              <div class=\"col-lg-8\">\r\n                  <p>min.choi.dev@gmail.com</p>\r\n              </div>\r\n              <div class=\"col-lg-4\">\r\n                  <label>Phone Number: </label>\r\n              </div>\r\n              <div class=\"col-lg-8\">\r\n                  <p>647-208-3784</p>\r\n              </div>\r\n              <div class=\"col-lg-4\">\r\n                  <label>Links: </label>\r\n              </div>\r\n              <div class=\"col-lg-8\">\r\n                  <a href=\"https://github.com/minchoidev\">\r\n                      <img class=\"icon-small\" src=\"../assets/images/icon_github.jpg\" alt=\"github link\">\r\n                  </a>\r\n                  <a href=\"https://www.linkedin.com/in/minseok-choi/\">\r\n                      <img class=\"icon-small\" src=\"../assets/images/icon_linkedin.jpg\" alt=\"github link\">\r\n                  </a>\r\n              </div>\r\n          </div>\r\n          <hr class=\"mb-5 mt-5\" />\r\n          <h3 class=\"mb-3\">Contact Form</h3>\r\n          <!-- Contact Form -->\r\n          <form name=\"sentMessage\" id=\"contactForm\" novalidate=\"novalidate\">\r\n              <!-- First Name -->\r\n              <div class=\"control-group\">\r\n                  <div class=\"form-group\">\r\n                      <label>First Name</label>\r\n                      <input class=\"form-control\" id=\"firstName\" type=\"text\" placeholder=\"First Name\"\r\n                          required=\"required\" data-validation-required-message=\"Please enter your first name.\">\r\n                      <p class=\"help-block text-danger\"></p>\r\n                  </div>\r\n              </div>\r\n              <!-- Last Name -->\r\n              <div class=\"control-group\">\r\n                  <div class=\"form-group\">\r\n                      <label>Last Name</label>\r\n                      <input class=\"form-control\" id=\"lastName\" type=\"text\" placeholder=\"Last Name\"\r\n                          required=\"required\" data-validation-required-message=\"Please enter your last name.\">\r\n                      <p class=\"help-block text-danger\"></p>\r\n                  </div>\r\n              </div>\r\n              <!-- Contact Number -->\r\n              <div class=\"control-group\">\r\n                  <div class=\"form-group\">\r\n                      <label>Phone Number</label>\r\n                      <input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"Phone Number\" required=\"required\"\r\n                          data-validation-required-message=\"Please enter your phone number.\">\r\n                      <p class=\"help-block text-danger\"></p>\r\n                  </div>\r\n              </div>\r\n              <!-- Email -->\r\n              <div class=\"control-group\">\r\n                  <div class=\"form-group\">\r\n                      <label>Email Address</label>\r\n                      <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Email Address\"\r\n                          required=\"required\" data-validation-required-message=\"Please enter your email address.\">\r\n                      <p class=\"help-block text-danger\"></p>\r\n                  </div>\r\n              </div>\r\n              <!-- Message -->\r\n              <div class=\"control-group\">\r\n                  <div class=\"form-group\">\r\n                      <label>Message</label>\r\n                      <textarea class=\"form-control\" id=\"message\" rows=\"3\" placeholder=\"Message\" required=\"required\"\r\n                          data-validation-required-message=\"Please enter a message.\"></textarea>\r\n                      <p class=\"help-block text-danger\"></p>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <div id=\"success\"></div>\r\n              <!-- Submit Button -->\r\n              <div class=\"form-group text-center\">\r\n                  <a href=\"/\" class=\"btn btn-primary btn-xl\" id=\"sendButton\">Send</a>\r\n              </div>\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// MEAN Portfolio
// File Name: contact.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: home.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzcmMvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7SUFLSTs7R0NKSixhQUFhOztHQUNiO0lBQ0ksa0NBQWtDO0VBQ3BDOztHQUVBLG9CQUFvQjs7R0FDcEI7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxpQkFBaUI7RUFDbkI7O0dBRUE7RUFDQSxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25COztHQUVBO0dBQ0MsVUFBVTtHQUNWLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLGlCQUFpQjtFQUNsQjs7R0FFQSx5QkFBeUI7O0dBQ3pCO0lBQ0Usb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztFQUNyQzs7R0FFQSxrQ0FBa0M7O0dBQ2xDO0VBQ0EsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSx1QkFBdUI7O0dBQ3ZCO0lBQ0UsaUJBQWlCO0VBQ25CLHlEQUF5RDtFQUN6RCw2QkFBNkI7RUFJN0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZjs7R0FFQSxZQUFZOztHQUNaO0VBQ0EsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWjs7R0FHQSxhQUFhOztHQUNiOztFQUVBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEscUJBQXFCOztHQUNyQjtFQUNBLGdFQUFnRTtFQUNoRTs7R0FFQSxpQkFBaUI7O0dBQ2pCO0VBQ0EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGNBQWM7RUFHZCxvQkFBb0I7RUFDcEI7O0dBRUE7RUFDQSxjQUFjO0VBQ2Q7O0dBRUEsa0JBQWtCOztHQUNsQjs7Ozs7O0VBTUEsNkRBQTZEO0VBQzdEOztHQUVBLG9CQUFvQjs7R0FDcEI7RUFDQSxtQ0FBbUM7RUFDbkM7O0dBRUE7RUFDQSxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwrQkFBK0I7RUFDL0I7O0dBRUE7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Q7O0dBRUEsd0JBQXdCOztHQUN4QjtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsOEJBQThCO0VBRzlCLG9CQUFvQjtFQUNwQjs7R0FFQSxnQ0FBZ0M7O0dBQ2hDO0VBQ0Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEI7O0dBRUEsMEJBQTBCOztHQUMxQjtFQUNBLFVBQVU7RUFDVjs7R0FFQTtFQUNBLHdCQUF3QjtFQUN4Qjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDZEQUE2RDtFQUM3RDs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0EsV0FBVztFQUNYLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLDBEQUEwRDtFQUMxRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTUVBTiBQb3J0Zm9saW9cclxuICAgRmlsZSBOYW1lOiBob21lLmNvbXBvbmVudC5jc3NcclxuICAgQXV0aG9yOiBNaW5zZW9rIENob2lcclxuICAgU3R1ZGVudElEOiAzMDA5MTcxODRcclxuICAgRGF0ZTogMDMvMjkvMjAxOVxyXG4gICAqL1xyXG5cclxuICAgQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuY3NzJzsiLCJcbi8qbmF2aWdhdGlvbiovXG4ubWFpbk5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgfVxuICBcbiAgLyogaW5kZXggY29udGFpbmVyICovXG4gIC5jb250YWluZXItZmFkZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBtaW4taGVpZ2h0OiA4MjBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lci1mYWRlLXJvdW5kIHtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lci1pbnNpZGUtbGlnaHQge1xuICAgd2lkdGg6IDk1JTtcbiAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XG4gICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgcGFkZGluZzogNTBweDtcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICB9XG4gIFxuICAvKnJvdW5kIGltYWdlIDEwMHB4IHNpemUqL1xuICAuaW1nLXByb2ZpbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggIzMzMzMzMztcbiAgfVxuICBcbiAgLypmb3IgcHJvZmlsZSBpbWFnZSBpbiBhYm91dCBwYWdlKi9cbiAgLmltZy1wcm9maWwtYWJvdXQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKnNtYWxsIGljb24qL1xuICAuaWNvbi1zbWFsbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC8qc2ltcGxlIG1hcmdpbiovXG4gIC5tYXJnaW4tdG9wLTUwcHgge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIFxuICAvKmxvZ28gaW1hZ2UqL1xuICAuaW1nLWxvZ28tbmFtZSB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmljb24gaW1hZ2UqL1xuICAuaW1nLWljb24ge1xuICB3aWR0aDogMTUwcHg7XHRcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbnRhaW5lciovXG4gICNiYWNrZ3JvdW5kIHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIik7ICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgbWluLWhlaWdodDogOTYlO1xuICB9XG4gIFxuICAvKmNvcHlyaWdodCovXG4gICNjb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIFxuICAvKiBib2R5IHNpemUqL1xuICBib2R5LFxuICBodG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLyogYm9keSBmb250LWZhbWlseSAqL1xuICBib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypocml6b250YWwgbGluZSovXG4gIGhyIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICBoci5saWdodCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLyogaHJlZiAqL1xuICBhIHtcbiAgY29sb3I6ICNlNjZkNWQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIC8qIGggZm9udC1mYW1pbHkgKi9cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qYmFja2dyb3VuZCBjb2xvcnMqL1xuICAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRleHQtZmFkZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB9XG4gIFxuICAuc2VydmljZS1ib3gge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3gqL1xuICAucG9ydGZvbGlvLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94IGNhcHRpb24qL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiBjb250ZW50Ki9cbiAgLnBvcnRmb2xpby1ib3ggLnBvcnRmb2xpby1ib3gtY2FwdGlvbiAucG9ydGZvbGlvLWJveC1jYXB0aW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGhvdmVyIG9wYWNpdHkqL1xuICAucG9ydGZvbGlvLWJveDpob3ZlciAucG9ydGZvbGlvLWJveC1jYXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZTY2ZDVkIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLypidXR0b24qL1xuICAuYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMDBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmJ0bi14bCB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjZkNWQ7XG4gIGJvcmRlci1jb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMzMzMyAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg2NCwgOTUsIDI0MCwgMC41KSAhaW1wb3J0YW50O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-white d-flex \">\r\n  <!-- Container -->\r\n  <div class=\"container container-fade-round text-white margin-top-50px\">\r\n    <div class=\"col-lg-4 mx-auto text-center\">\r\n      <!-- Profile Image -->\r\n      <img alt=\"\" class=\"img-profil\" src=\"../assets/images/profil.jpg\">\r\n      <hr>\r\n    </div>\r\n    <div class=\"col-lg-8 mx-auto text-faded \">\r\n      <br />\r\n      <!-- Greeting Message -->\r\n      <h1><strong>Hello, I'm Min :)</strong></h1>\r\n      <h3>I'm a Web and Mobile app developer. </h3>\r\n      <h4 class=\"mb-5\">For a convenience of all the people, for a contribution to the development, and for the fun, so\r\n        I\r\n        write code.</h4>\r\n      <!-- About page button -->\r\n      <div class=\"text-center\">\r\n        <a class=\"btn btn-primary btn-xl\" href=\"about\">\r\n          About Me</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// MEAN Portfolio
// File Name: home.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019


var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: login.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogbG9naW4uY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\n    <div class=\"container container-inside-light\">\n        <main class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-offset-4 col-md-4\">\n                    <h1>Please Login</h1>\n                    <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n                        <fieldset class=\"form-group\">\n                            <label for=\"username\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\"\n                                placeholder=\"Enter Username\" id=\"username\" required autofocus autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <label for=\"password\">Password:</label>\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\"\n                                placeholder=\"Enter Password\" id=\"password\" required autocomplete=\"off\">\n                            or\n                            <a routerLink=\"/register\">Register Here</a>\n                        </fieldset>\n                        <fieldset class=\"form-group text-right\">\n                            <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n                            <a routerLink=\"/home\">\n                                <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n                            </a>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </main>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");

// MEAN Portfolio
// File Name: login.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019





var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: page-not-found.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <h1 class=\"display-2\"><strong>Error: 404</strong>-Page Not Found</h1>\r\n      <a routerLink=\"/home\" class=\"btn btn-primary btn-lg\"><i class=\"fas fa-undo-alt fa-lg\"></i> Take Me Home</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// MEAN Portfolio
// File Name: page-not-found.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/products/products.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: products.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogcHJvZHVjdHMuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\r\n  <div class=\"container container-inside-light\">\r\n      <!-- Title -->\r\n      <h2 class=\"text-center text-uppercase mb-5\">Projects</h2>\r\n      <hr class=\"mb-5 mt-5\" />\r\n      <!-- Projects List -->\r\n      <!-- Project 1 -->\r\n      <div class=\"col-lg-12 row\">\r\n          <div class=\"col-lg-6\">\r\n              <a class=\"portfolio-box\" href=\"../assets/images/movie_maniac_1.jpg\">\r\n                  <img alt=\"\" class=\"portfolio-box img-fluid\" src=\"../assets/images/movie_maniac_1.jpg\">\r\n                  <div class=\"portfolio-box-caption\">\r\n                      <div class=\"portfolio-box-caption-content\">\r\n                          <div class=\"text-faded\">Zoom in </div>\r\n                      </div>\r\n                  </div>\r\n              </a>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <h3><strong>Movie Maniac</strong></h3>\r\n              <h4>Membership Movie Rent Web App</h4>\r\n              <p>&nbsp;&nbsp;&nbsp;&nbsp;MovieManiac is a Web Application to rent movies to its members. And the\r\n                  members renting the movies\r\n                  can watch the movies for a fixed period and they can return the movies back. When the movies are\r\n                  rented, the movies’ status switches to ‘Rented’, and it’s not available to rent to other members.\r\n                  The member can manage the movies they rented, and search movies up to their preferences.\r\n              </p>\r\n              <strong>Technologies Used: </strong>\r\n              <p>\r\n                  ASP.NET Framework, SQL Server, LINQ, Bootstrap, CSS 3, HTML 5\r\n              </p>\r\n              <a href=\"https://github.com/ProNovice/MovieManiac-MovieRentalWebsite\">\r\n                  <img class=\"icon-small\" src=\"../assets/images/icon_github.jpg\" alt=\"github link\">\r\n              </a>\r\n          </div>\r\n      </div>\r\n      <hr class=\"mb-5 mt-5\" />\r\n\r\n      <!-- Project 2 -->\r\n      <div class=\"col-lg-12 row\">\r\n          <div class=\"col-lg-6\">\r\n              <h3><strong>Puckager</strong></h3>\r\n              <h4>Minor League Recruits Management & Scouting Web App for Hockey Coaches</h4>\r\n              <p>&nbsp;&nbsp;&nbsp;&nbsp;Puckager is a Web Application to help Hockey Minor League’s coaches and\r\n                  scouters to look for potential or competitive recruiters. The recuirters are managed by team unit,\r\n                  and whenever their matches are done, their coaches or the scouters who watched them can document,\r\n                  rate and upload the players game. And the coach can manage the scouting reports whenever they want.\r\n              </p>\r\n              <strong>Technologies Used: </strong>\r\n              <p>\r\n                  ASP.NET Framework, LINQ, Bootstrap, CSS 3, HTML 5, Azure SQL Server, Azure Web Hosting\r\n              </p>\r\n              <a href=\"https://github.com/ProNovice/Comp229-Assign03\">\r\n                  <img class=\"icon-small\" src=\"../assets/images/icon_github.jpg\" alt=\"github link\">\r\n              </a>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <a class=\"portfolio-box\" href=\"../assets/images/puckager_1.jpg\">\r\n                  <img alt=\"\" class=\"portfolio-box img-fluid\" src=\"../assets/images/puckager_1.jpg\">\r\n                  <div class=\"portfolio-box-caption\">\r\n                      <div class=\"portfolio-box-caption-content\">\r\n                          <div class=\"text-faded\">Zoom in </div>\r\n                      </div>\r\n                  </div>\r\n              </a>\r\n          </div>\r\n      </div>\r\n      <hr class=\"mb-5 mt-5\" />\r\n\r\n      <!-- Project 3 -->\r\n      <div class=\"col-lg-12 row\">\r\n          <div class=\"col-lg-6\">\r\n              <a class=\"portfolio-box\" href=\"../assets/images/wrath_of_kings_1.jpg\">\r\n                  <img alt=\"\" class=\"portfolio-box img-fluid\" src=\"../assets/images/wrath_of_kings_1.jpg\">\r\n                  <div class=\"portfolio-box-caption\">\r\n                      <div class=\"portfolio-box-caption-content\">\r\n                          <div class=\"text-faded\">Zoom in </div>\r\n                      </div>\r\n                  </div>\r\n              </a>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <h3><strong>Wrath of Kings</strong></h3>\r\n              <h4>Game Units Information Website</h4>\r\n              <p>&nbsp;&nbsp;&nbsp;&nbsp;This Web Site is made for sharing the information about ‘Wrath Of Kings’\r\n                  board game. As like other board game wiki website, users can access the web site and get the model\r\n                  information they want. When there is wrong data in the unit information, they can edit them by\r\n                  themselves. When new units have been published in the game, they can add the new units on the\r\n                  website and even they can delete them as well.\r\n              </p>\r\n              <strong>Technologies Used: </strong>\r\n              <p>\r\n                  ASP.NET Framework, JSON, LINQ, Bootstrap, CSS 3, HTML 5\r\n              </p>\r\n              <a href=\"https://github.com/ProNovice/Comp229-Assign04\">\r\n                  <img class=\"icon-small\" src=\"../assets/images/icon_github.jpg\" alt=\"github link\">\r\n              </a>\r\n          </div>\r\n      </div>\r\n      <hr class=\"mb-5 mt-5\" />\r\n\r\n      <!-- Project 4 -->\r\n      <div class=\"col-lg-12 row\">\r\n          <div class=\"col-lg-6\">\r\n              <h3><strong>GoTeacher</strong></h3>\r\n              <h4>English Tutoring Web App</h4>\r\n              <p>&nbsp;&nbsp;&nbsp;&nbsp;GoTeacher is a Web Application that helps students learning English find\r\n                  English tutors and make schedules to meet. There are members divided in Admin, Teacher, and Student.\r\n                  Teachers can upload their information including their Resume file in their profile, and the students\r\n                  can search registered teachers on the web app and book a time to meet them among the teacher’s\r\n                  available time. After then, the students can write a comment under their teacher information with\r\n                  their rating.\r\n              </p>\r\n              <strong>Technologies Used: </strong>\r\n              <p>\r\n                  ASP.NET Core MVC, AWS RDS SQL Server, AWS DynamoDB, Amazon S3, AWS Elastic Beanstalk, Bootstrap,\r\n                  LINQ, CSS 3, HTML 5\r\n              </p>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <a class=\"portfolio-box\" href=\"../assets/images/go_teacher_1.jpg\">\r\n                  <img alt=\"\" class=\"portfolio-box img-fluid\" src=\"../assets/images/go_teacher_1.jpg\">\r\n                  <div class=\"portfolio-box-caption\">\r\n                      <div class=\"portfolio-box-caption-content\">\r\n                          <div class=\"text-faded\">Zoom in </div>\r\n                      </div>\r\n                  </div>\r\n              </a>\r\n          </div>\r\n      </div>\r\n      <hr class=\"mb-5 mt-5\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// MEAN Portfolio
// File Name: products.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/pages/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: register.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogcmVnaXN0ZXIuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\n    <div class=\"container container-inside-light\">\n        <main class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-offset-4 col-md-4\">\n                    <h1>Please Register</h1>\n                    <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n                        <fieldset class=\"form-group\">\n                            <label for=\"username\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\"\n                                placeholder=\"Enter Username\" id=\"username\" required autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <label for=\"password\">Password:</label>\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\"\n                                placeholder=\"Enter Password\" id=\"password\" required autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <label for=\"email\">Email:</label>\n                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\"\n                                placeholder=\"Enter Email\" id=\"email\" required autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <label for=\"displayName\">Dispaly Name:</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.displayName\" name=\"displayName\"\n                                placeholder=\"Enter Display Name\" id=\"displayName\" required autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group text-right\">\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Register\">\n                            <a routerLink=\"/home\">\n                                <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n                            </a>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </main>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");

// MEAN Portfolio
// File Name: register.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and may log in', { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('A registration Error Occurred', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: services.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogc2VydmljZXMuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\r\n  <div class=\"container container-inside-light\">\r\n      <!-- Title -->\r\n      <h2 class=\"text-center text-uppercase mb-5\">Services</h2>\r\n      <hr>\r\n      <div class=\"col-lg-12 row\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <!-- Services -->\r\n                  <div class=\"col-lg-4 text-center\">\r\n                      <div class=\"service-box mt-5 mx-auto\">\r\n                          <img class=\"img-icon\" alt=\"\" src=\"../assets/images/webApp.jpg\">\r\n                          <h3 class=\"mb-3\">Web Application</h3>\r\n                          <p class=\"text-muted mb-0\">Develop dynamic web applications with HTML5, CSS3, JavaScript,\r\n                              ASP.NET MVC, MySQL\r\n                              and AWS</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 text-center\">\r\n                      <div class=\"service-box mt-5 mx-auto\">\r\n                          <img class=\"img-icon\" alt=\"\" src=\"../assets/images/mobileApp.jpg\">\r\n                          <h3 class=\"mb-3\">Android Mobile App</h3>\r\n                          <p class=\"text-muted mb-0\">Develop android mobile apps using Java, SQLite and Google API\r\n                              with Android Studio.</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 text-center\">\r\n                      <div class=\"service-box mt-5 mx-auto\">\r\n                          <img class=\"img-icon\" alt=\"\" src=\"../assets/images/desktopApp.jpg\">\r\n                          <h3 class=\"mb-3\">Desktop Application</h3>\r\n                          <p class=\"text-muted mb-0\">Develop apps using C# as the main language, MySQL, WPF and\r\n                              Windows Form</p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// MEAN Portfolio
// File Name: services.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: footer.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic3JjL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBS0k7O0dDSkosYUFBYTs7R0FDYjtJQUNJLGtDQUFrQztFQUNwQzs7R0FFQSxvQkFBb0I7O0dBQ3BCO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0VBQ25COztHQUVBO0VBQ0EsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjs7R0FFQTtHQUNDLFVBQVU7R0FDVixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixpQkFBaUI7RUFDbEI7O0dBRUEseUJBQXlCOztHQUN6QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7RUFDckM7O0dBRUEsa0NBQWtDOztHQUNsQztFQUNBLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsdUJBQXVCOztHQUN2QjtJQUNFLGlCQUFpQjtFQUNuQix5REFBeUQ7RUFDekQsNkJBQTZCO0VBSTdCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7O0dBRUEsWUFBWTs7R0FDWjtFQUNBLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1o7O0dBR0EsYUFBYTs7R0FDYjs7RUFFQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLHFCQUFxQjs7R0FDckI7RUFDQSxnRUFBZ0U7RUFDaEU7O0dBRUEsaUJBQWlCOztHQUNqQjtFQUNBLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxjQUFjO0VBR2Qsb0JBQW9CO0VBQ3BCOztHQUVBO0VBQ0EsY0FBYztFQUNkOztHQUVBLGtCQUFrQjs7R0FDbEI7Ozs7OztFQU1BLDZEQUE2RDtFQUM3RDs7R0FFQSxvQkFBb0I7O0dBQ3BCO0VBQ0EsbUNBQW1DO0VBQ25DOztHQUVBO0VBQ0Esb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsK0JBQStCO0VBQy9COztHQUVBO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkOztHQUVBLHdCQUF3Qjs7R0FDeEI7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLDhCQUE4QjtFQUc5QixvQkFBb0I7RUFDcEI7O0dBRUEsZ0NBQWdDOztHQUNoQztFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCOztHQUVBLDBCQUEwQjs7R0FDMUI7RUFDQSxVQUFVO0VBQ1Y7O0dBRUE7RUFDQSx3QkFBd0I7RUFDeEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2REFBNkQ7RUFDN0Q7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwwREFBMEQ7RUFDMUQiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNRUFOIFBvcnRmb2xpb1xyXG4gICBGaWxlIE5hbWU6IGZvb3Rlci5jb21wb25lbnQuY3NzXHJcbiAgIEF1dGhvcjogTWluc2VvayBDaG9pXHJcbiAgIFN0dWRlbnRJRDogMzAwOTE3MTg0XHJcbiAgIERhdGU6IDAzLzI5LzIwMTlcclxuICAgKi9cclxuXHJcbiAgIEBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzLmNzcyc7IiwiXG4vKm5hdmlnYXRpb24qL1xuLm1haW5OYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIH1cbiAgXG4gIC8qIGluZGV4IGNvbnRhaW5lciAqL1xuICAuY29udGFpbmVyLWZhZGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWluLWhlaWdodDogODIwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItZmFkZS1yb3VuZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItaW5zaWRlLWxpZ2h0IHtcbiAgIHdpZHRoOiA5NSU7XG4gICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICAgbWluLWhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDUwcHg7XG4gICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgfVxuICBcbiAgLypyb3VuZCBpbWFnZSAxMDBweCBzaXplKi9cbiAgLmltZy1wcm9maWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qZm9yIHByb2ZpbGUgaW1hZ2UgaW4gYWJvdXQgcGFnZSovXG4gIC5pbWctcHJvZmlsLWFib3V0IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggIzMzMzMzMztcbiAgfVxuICBcbiAgLypzbWFsbCBpY29uKi9cbiAgLmljb24tc21hbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAvKnNpbXBsZSBtYXJnaW4qL1xuICAubWFyZ2luLXRvcC01MHB4IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICBcbiAgLypsb2dvIGltYWdlKi9cbiAgLmltZy1sb2dvLW5hbWUge1xuICB3aWR0aDogMTUwcHg7XHRcbiAgfVxuICBcbiAgLyppY29uIGltYWdlKi9cbiAgLmltZy1pY29uIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qYmFja2dyb3VuZCBjb250YWluZXIqL1xuICAjYmFja2dyb3VuZCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpOyAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIG1pbi1oZWlnaHQ6IDk2JTtcbiAgfVxuICBcbiAgLypjb3B5cmlnaHQqL1xuICAjY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICBcbiAgLyogYm9keSBzaXplKi9cbiAgYm9keSxcbiAgaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIGJvZHkgZm9udC1mYW1pbHkgKi9cbiAgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qaHJpem9udGFsIGxpbmUqL1xuICBociB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1jb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgaHIubGlnaHQge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8qIGhyZWYgKi9cbiAgYSB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAvKiBoIGZvbnQtZmFtaWx5ICovXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29sb3JzKi9cbiAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50ZXh0LWZhZGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuICBcbiAgLnNlcnZpY2UtYm94IHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94Ki9cbiAgLnBvcnRmb2xpby1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uKi9cbiAgLnBvcnRmb2xpby1ib3ggLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94IGNhcHRpb24gY29udGVudCovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24gLnBvcnRmb2xpby1ib3gtY2FwdGlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBob3ZlciBvcGFjaXR5Ki9cbiAgLnBvcnRmb2xpby1ib3g6aG92ZXIgLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qYnV0dG9uKi9cbiAgLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5idG4teGwge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkO1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzMzMzMgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjQsIDk1LCAyNDAsIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MEAN Portfolio-->\r\n<!-- File Name: footer.component.html-->\r\n<!-- Author: Minseok Choi-->\r\n<!-- StudentID: 300917184-->\r\n<!-- Date: 03/29/2019-->\r\n\r\n<script src=\"jquery/dist/jquery.min.js\"></script>\r\n<script src=\"bootstrap/dist/js/bootstrap.min.js\"></script>\r\n<script src=\"Scripts/app.js\"></script>\r\n\r\n<div id=\"copyright\">\r\n  <p class=\"mx-auto\" style=\"width: 600px; background-color: black\"> &copy; Copyright Minseok Choi Express Portfolio -\r\n    COMP308 W2019</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// MEAN Portfolio
// File Name: footer.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: header.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic3JjL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBS0k7O0dDSkosYUFBYTs7R0FDYjtJQUNJLGtDQUFrQztFQUNwQzs7R0FFQSxvQkFBb0I7O0dBQ3BCO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0VBQ25COztHQUVBO0VBQ0EsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjs7R0FFQTtHQUNDLFVBQVU7R0FDVixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixpQkFBaUI7RUFDbEI7O0dBRUEseUJBQXlCOztHQUN6QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7RUFDckM7O0dBRUEsa0NBQWtDOztHQUNsQztFQUNBLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsdUJBQXVCOztHQUN2QjtJQUNFLGlCQUFpQjtFQUNuQix5REFBeUQ7RUFDekQsNkJBQTZCO0VBSTdCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7O0dBRUEsWUFBWTs7R0FDWjtFQUNBLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1o7O0dBR0EsYUFBYTs7R0FDYjs7RUFFQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLHFCQUFxQjs7R0FDckI7RUFDQSxnRUFBZ0U7RUFDaEU7O0dBRUEsaUJBQWlCOztHQUNqQjtFQUNBLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxjQUFjO0VBR2Qsb0JBQW9CO0VBQ3BCOztHQUVBO0VBQ0EsY0FBYztFQUNkOztHQUVBLGtCQUFrQjs7R0FDbEI7Ozs7OztFQU1BLDZEQUE2RDtFQUM3RDs7R0FFQSxvQkFBb0I7O0dBQ3BCO0VBQ0EsbUNBQW1DO0VBQ25DOztHQUVBO0VBQ0Esb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsK0JBQStCO0VBQy9COztHQUVBO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkOztHQUVBLHdCQUF3Qjs7R0FDeEI7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLDhCQUE4QjtFQUc5QixvQkFBb0I7RUFDcEI7O0dBRUEsZ0NBQWdDOztHQUNoQztFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCOztHQUVBLDBCQUEwQjs7R0FDMUI7RUFDQSxVQUFVO0VBQ1Y7O0dBRUE7RUFDQSx3QkFBd0I7RUFDeEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2REFBNkQ7RUFDN0Q7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwwREFBMEQ7RUFDMUQiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNRUFOIFBvcnRmb2xpb1xyXG4gICBGaWxlIE5hbWU6IGhlYWRlci5jb21wb25lbnQuY3NzXHJcbiAgIEF1dGhvcjogTWluc2VvayBDaG9pXHJcbiAgIFN0dWRlbnRJRDogMzAwOTE3MTg0XHJcbiAgIERhdGU6IDAzLzI5LzIwMTlcclxuICAgKi9cclxuXHJcbiAgIEBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzLmNzcyc7IiwiXG4vKm5hdmlnYXRpb24qL1xuLm1haW5OYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIH1cbiAgXG4gIC8qIGluZGV4IGNvbnRhaW5lciAqL1xuICAuY29udGFpbmVyLWZhZGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWluLWhlaWdodDogODIwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItZmFkZS1yb3VuZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItaW5zaWRlLWxpZ2h0IHtcbiAgIHdpZHRoOiA5NSU7XG4gICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICAgbWluLWhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDUwcHg7XG4gICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgfVxuICBcbiAgLypyb3VuZCBpbWFnZSAxMDBweCBzaXplKi9cbiAgLmltZy1wcm9maWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qZm9yIHByb2ZpbGUgaW1hZ2UgaW4gYWJvdXQgcGFnZSovXG4gIC5pbWctcHJvZmlsLWFib3V0IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggIzMzMzMzMztcbiAgfVxuICBcbiAgLypzbWFsbCBpY29uKi9cbiAgLmljb24tc21hbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAvKnNpbXBsZSBtYXJnaW4qL1xuICAubWFyZ2luLXRvcC01MHB4IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICBcbiAgLypsb2dvIGltYWdlKi9cbiAgLmltZy1sb2dvLW5hbWUge1xuICB3aWR0aDogMTUwcHg7XHRcbiAgfVxuICBcbiAgLyppY29uIGltYWdlKi9cbiAgLmltZy1pY29uIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qYmFja2dyb3VuZCBjb250YWluZXIqL1xuICAjYmFja2dyb3VuZCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpOyAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIG1pbi1oZWlnaHQ6IDk2JTtcbiAgfVxuICBcbiAgLypjb3B5cmlnaHQqL1xuICAjY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICBcbiAgLyogYm9keSBzaXplKi9cbiAgYm9keSxcbiAgaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIGJvZHkgZm9udC1mYW1pbHkgKi9cbiAgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qaHJpem9udGFsIGxpbmUqL1xuICBociB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1jb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgaHIubGlnaHQge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8qIGhyZWYgKi9cbiAgYSB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAvKiBoIGZvbnQtZmFtaWx5ICovXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29sb3JzKi9cbiAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50ZXh0LWZhZGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuICBcbiAgLnNlcnZpY2UtYm94IHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94Ki9cbiAgLnBvcnRmb2xpby1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uKi9cbiAgLnBvcnRmb2xpby1ib3ggLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94IGNhcHRpb24gY29udGVudCovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24gLnBvcnRmb2xpby1ib3gtY2FwdGlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBob3ZlciBvcGFjaXR5Ki9cbiAgLnBvcnRmb2xpby1ib3g6aG92ZXIgLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qYnV0dG9uKi9cbiAgLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5idG4teGwge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkO1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzMzMzMgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjQsIDk1LCAyNDAsIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MEAN Portfolio-->\r\n<!-- File Name: header.component.html-->\r\n<!-- Author: Minseok Choi-->\r\n<!-- StudentID: 300917184-->\r\n<!-- Date: 03/29/2019-->\r\n\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top mainNav\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\"><img class=\"img-logo-name\"\r\n      src=\"../assets/images/logo_name.jpg\"> </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\"> Home\r\n          <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/products\"> Products</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/services\"> Services</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/contact\"> Contact</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/todo-list\"> Todo</a>\r\n      </li>\r\n\r\n      <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\">\r\n        <i class=\"fas fa-lg fa-sign-in-alt\"></i>\r\n        Login</a></li>\r\n\r\n      <li *ngIf=\"isLoggedIn()\" class=\"navbar-text ml-5 mr-5 d-none d-lg-inline\">\r\n        <i class=\"fas fa-lg fa-user\"></i>\r\n        Welcome, {{ user.displayName }}</li>\r\n\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\"><a (click)=\"onLogoutClick()\" routerLink=\"/logout\" class=\"nav-link\">\r\n          <i class=\"fas fa-lg fa-sign-out-alt\"></i>\r\n          Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!-- Background Image Container-->"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");

// MEAN Portfolio
// File Name: header.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 5000 });
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");

// MEAN Portfolio
// File Name: auth.service.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.endpoint = 'http://localhost:4000/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + 'register', user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + 'login', user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + 'logout', this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// MEAN Portfolio
// File Name: todo.service.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019


var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.endpoint = 'http://localhost:4000/api/todo-list/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
    }
    // Use obserable pattern, subscribe to it and when anything changes we are notified
    TodoService.prototype.getList = function () {
        return this.http.get(this.endpoint, this.httpOptions);
    };
    TodoService.prototype.getTodo = function (todo) {
        return this.http.get(this.endpoint + 'edit/' + todo._id, this.httpOptions);
    };
    // Updating todoList service so it can consume backend API
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.endpoint + 'add', todo, this.httpOptions);
    };
    TodoService.prototype.editTodo = function (todo) {
        return this.http.post(this.endpoint + 'edit/' + todo._id, todo, this.httpOptions);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        return this.http.get(this.endpoint + 'delete/' + todo._id, this.httpOptions);
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todos/todo-delete/todo-delete.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todos/todo-delete/todo-delete.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: todo-delete.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1kZWxldGUvdG9kby1kZWxldGUuY29tcG9uZW50LmNzcyIsInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOztHQ0pKLGFBQWE7O0dBQ2I7SUFDSSxrQ0FBa0M7RUFDcEM7O0dBRUEsb0JBQW9COztHQUNwQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjs7R0FFQTtFQUNBLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0dBRUE7R0FDQyxVQUFVO0dBQ1YsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsaUJBQWlCO0VBQ2xCOztHQUVBLHlCQUF5Qjs7R0FDekI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOztHQUVBLGtDQUFrQzs7R0FDbEM7RUFDQSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxnQkFBZ0I7RUFDaEI7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFlBQVk7RUFDWjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLHVCQUF1Qjs7R0FDdkI7SUFDRSxpQkFBaUI7RUFDbkIseURBQXlEO0VBQ3pELDZCQUE2QjtFQUk3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmOztHQUVBLFlBQVk7O0dBQ1o7RUFDQSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaOztHQUdBLGFBQWE7O0dBQ2I7O0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWjs7R0FFQSxxQkFBcUI7O0dBQ3JCO0VBQ0EsZ0VBQWdFO0VBQ2hFOztHQUVBLGlCQUFpQjs7R0FDakI7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLGtCQUFrQjtFQUNsQjs7R0FFQSxTQUFTOztHQUNUO0VBQ0EsY0FBYztFQUdkLG9CQUFvQjtFQUNwQjs7R0FFQTtFQUNBLGNBQWM7RUFDZDs7R0FFQSxrQkFBa0I7O0dBQ2xCOzs7Ozs7RUFNQSw2REFBNkQ7RUFDN0Q7O0dBRUEsb0JBQW9COztHQUNwQjtFQUNBLG1DQUFtQztFQUNuQzs7R0FFQTtFQUNBLG9DQUFvQztFQUNwQzs7R0FFQTtFQUNBLCtCQUErQjtFQUMvQjs7R0FFQTtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxnQkFBZ0I7O0dBQ2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7R0FFQSx3QkFBd0I7O0dBQ3hCO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFHOUIsb0JBQW9CO0VBQ3BCOztHQUVBLGdDQUFnQzs7R0FDaEM7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7R0FFQSwwQkFBMEI7O0dBQzFCO0VBQ0EsVUFBVTtFQUNWOztHQUVBO0VBQ0Esd0JBQXdCO0VBQ3hCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkRBQTZEO0VBQzdEOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsMERBQTBEO0VBQzFEIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MvdG9kby1kZWxldGUvdG9kby1kZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1FQU4gUG9ydGZvbGlvXHJcbiAgIEZpbGUgTmFtZTogdG9kby1kZWxldGUuY29tcG9uZW50LmNzc1xyXG4gICBBdXRob3I6IE1pbnNlb2sgQ2hvaVxyXG4gICBTdHVkZW50SUQ6IDMwMDkxNzE4NFxyXG4gICBEYXRlOiAwMy8yOS8yMDE5XHJcbiAgICovXHJcblxyXG4gICBAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnOyIsIlxuLypuYXZpZ2F0aW9uKi9cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB9XG4gIFxuICAvKiBpbmRleCBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lci1mYWRlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZhZGUtcm91bmQge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyLWluc2lkZS1saWdodCB7XG4gICB3aWR0aDogOTUlO1xuICAgYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiA1MHB4O1xuICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbiAgXG4gIC8qcm91bmQgaW1hZ2UgMTAwcHggc2l6ZSovXG4gIC5pbWctcHJvZmlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjMzMzMzMzO1xuICB9XG4gIFxuICAvKmZvciBwcm9maWxlIGltYWdlIGluIGFib3V0IHBhZ2UqL1xuICAuaW1nLXByb2ZpbC1hYm91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qc21hbGwgaWNvbiovXG4gIC5pY29uLXNtYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLypzaW1wbGUgbWFyZ2luKi9cbiAgLm1hcmdpbi10b3AtNTBweCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgXG4gIC8qbG9nbyBpbWFnZSovXG4gIC5pbWctbG9nby1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qaWNvbiBpbWFnZSovXG4gIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcdFxuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29udGFpbmVyKi9cbiAgI2JhY2tncm91bmQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICBtaW4taGVpZ2h0OiA5NiU7XG4gIH1cbiAgXG4gIC8qY29weXJpZ2h0Ki9cbiAgI2NvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIC8qIGJvZHkgc2l6ZSovXG4gIGJvZHksXG4gIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAvKiBib2R5IGZvbnQtZmFtaWx5ICovXG4gIGJvZHkge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmhyaXpvbnRhbCBsaW5lKi9cbiAgaHIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIGhyLmxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBocmVmICovXG4gIGEge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICBjb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgLyogaCBmb250LWZhbWlseSAqL1xuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLypiYWNrZ3JvdW5kIGNvbG9ycyovXG4gIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlLWJveCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCovXG4gIC5wb3J0Zm9saW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBib3ggY2FwdGlvbiovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uIGNvbnRlbnQqL1xuICAucG9ydGZvbGlvLWJveCAucG9ydGZvbGlvLWJveC1jYXB0aW9uIC5wb3J0Zm9saW8tYm94LWNhcHRpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gaG92ZXIgb3BhY2l0eSovXG4gIC5wb3J0Zm9saW8tYm94OmhvdmVyIC5wb3J0Zm9saW8tYm94LWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNlNjZkNWQhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKmJ1dHRvbiovXG4gIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NmQ1ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MzMzMzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA5NSwgMjQwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/todos/todo-delete/todo-delete.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todos/todo-delete/todo-delete.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todos/todo-delete/todo-delete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todos/todo-delete/todo-delete.component.ts ***!
  \************************************************************/
/*! exports provided: TodoDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDeleteComponent", function() { return TodoDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/todo */ "./src/app/models/todo.ts");

// MEAN Portfolio
// File Name: todo-delete.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019





var TodoDeleteComponent = /** @class */ (function () {
    function TodoDeleteComponent(activatedRoute, flashMessage, todoService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.todoService = todoService;
        this.router = router;
    }
    TodoDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.todo = new src_app_models_todo__WEBPACK_IMPORTED_MODULE_5__["Todo"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.todo._id = params.id;
        });
        this.deleteTodo(this.todo);
    };
    TodoDeleteComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 3000 });
                _this.router.navigate(['/todo-list']);
            }
            else {
                _this.flashMessage.show('Delete Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/todo-list']);
            }
        });
    };
    TodoDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-delete',
            template: __webpack_require__(/*! ./todo-delete.component.html */ "./src/app/todos/todo-delete/todo-delete.component.html"),
            styles: [__webpack_require__(/*! ./todo-delete.component.css */ "./src/app/todos/todo-delete/todo-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TodoDeleteComponent);
    return TodoDeleteComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-details/todo-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/todos/todo-details/todo-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: todo-details.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1kZXRhaWxzL3RvZG8tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic3JjL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBS0k7O0dDSkosYUFBYTs7R0FDYjtJQUNJLGtDQUFrQztFQUNwQzs7R0FFQSxvQkFBb0I7O0dBQ3BCO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0VBQ25COztHQUVBO0VBQ0EsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjs7R0FFQTtHQUNDLFVBQVU7R0FDVixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixpQkFBaUI7RUFDbEI7O0dBRUEseUJBQXlCOztHQUN6QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7RUFDckM7O0dBRUEsa0NBQWtDOztHQUNsQztFQUNBLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsdUJBQXVCOztHQUN2QjtJQUNFLGlCQUFpQjtFQUNuQix5REFBeUQ7RUFDekQsNkJBQTZCO0VBSTdCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7O0dBRUEsWUFBWTs7R0FDWjtFQUNBLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1o7O0dBR0EsYUFBYTs7R0FDYjs7RUFFQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLHFCQUFxQjs7R0FDckI7RUFDQSxnRUFBZ0U7RUFDaEU7O0dBRUEsaUJBQWlCOztHQUNqQjtFQUNBLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxjQUFjO0VBR2Qsb0JBQW9CO0VBQ3BCOztHQUVBO0VBQ0EsY0FBYztFQUNkOztHQUVBLGtCQUFrQjs7R0FDbEI7Ozs7OztFQU1BLDZEQUE2RDtFQUM3RDs7R0FFQSxvQkFBb0I7O0dBQ3BCO0VBQ0EsbUNBQW1DO0VBQ25DOztHQUVBO0VBQ0Esb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsK0JBQStCO0VBQy9COztHQUVBO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkOztHQUVBLHdCQUF3Qjs7R0FDeEI7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLDhCQUE4QjtFQUc5QixvQkFBb0I7RUFDcEI7O0dBRUEsZ0NBQWdDOztHQUNoQztFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCOztHQUVBLDBCQUEwQjs7R0FDMUI7RUFDQSxVQUFVO0VBQ1Y7O0dBRUE7RUFDQSx3QkFBd0I7RUFDeEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2REFBNkQ7RUFDN0Q7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwwREFBMEQ7RUFDMUQiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWRldGFpbHMvdG9kby1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNRUFOIFBvcnRmb2xpb1xyXG4gICBGaWxlIE5hbWU6IHRvZG8tZGV0YWlscy5jb21wb25lbnQuY3NzXHJcbiAgIEF1dGhvcjogTWluc2VvayBDaG9pXHJcbiAgIFN0dWRlbnRJRDogMzAwOTE3MTg0XHJcbiAgIERhdGU6IDAzLzI5LzIwMTlcclxuICAgKi9cclxuXHJcbiAgIEBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzLmNzcyc7IiwiXG4vKm5hdmlnYXRpb24qL1xuLm1haW5OYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIH1cbiAgXG4gIC8qIGluZGV4IGNvbnRhaW5lciAqL1xuICAuY29udGFpbmVyLWZhZGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWluLWhlaWdodDogODIwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItZmFkZS1yb3VuZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItaW5zaWRlLWxpZ2h0IHtcbiAgIHdpZHRoOiA5NSU7XG4gICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICAgbWluLWhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDUwcHg7XG4gICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgfVxuICBcbiAgLypyb3VuZCBpbWFnZSAxMDBweCBzaXplKi9cbiAgLmltZy1wcm9maWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qZm9yIHByb2ZpbGUgaW1hZ2UgaW4gYWJvdXQgcGFnZSovXG4gIC5pbWctcHJvZmlsLWFib3V0IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggIzMzMzMzMztcbiAgfVxuICBcbiAgLypzbWFsbCBpY29uKi9cbiAgLmljb24tc21hbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAvKnNpbXBsZSBtYXJnaW4qL1xuICAubWFyZ2luLXRvcC01MHB4IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICBcbiAgLypsb2dvIGltYWdlKi9cbiAgLmltZy1sb2dvLW5hbWUge1xuICB3aWR0aDogMTUwcHg7XHRcbiAgfVxuICBcbiAgLyppY29uIGltYWdlKi9cbiAgLmltZy1pY29uIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qYmFja2dyb3VuZCBjb250YWluZXIqL1xuICAjYmFja2dyb3VuZCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpOyAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIG1pbi1oZWlnaHQ6IDk2JTtcbiAgfVxuICBcbiAgLypjb3B5cmlnaHQqL1xuICAjY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICBcbiAgLyogYm9keSBzaXplKi9cbiAgYm9keSxcbiAgaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIGJvZHkgZm9udC1mYW1pbHkgKi9cbiAgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qaHJpem9udGFsIGxpbmUqL1xuICBociB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1jb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgaHIubGlnaHQge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8qIGhyZWYgKi9cbiAgYSB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAvKiBoIGZvbnQtZmFtaWx5ICovXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29sb3JzKi9cbiAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50ZXh0LWZhZGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuICBcbiAgLnNlcnZpY2UtYm94IHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94Ki9cbiAgLnBvcnRmb2xpby1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uKi9cbiAgLnBvcnRmb2xpby1ib3ggLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94IGNhcHRpb24gY29udGVudCovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24gLnBvcnRmb2xpby1ib3gtY2FwdGlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBob3ZlciBvcGFjaXR5Ki9cbiAgLnBvcnRmb2xpby1ib3g6aG92ZXIgLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qYnV0dG9uKi9cbiAgLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5idG4teGwge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkO1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzMzMzMgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjQsIDk1LCAyNDAsIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/todos/todo-details/todo-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/todos/todo-details/todo-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\n  <div class=\"container container-inside-light\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-offset-3 col-md-6\">\n          <h1>{{ title }}</h1>\n\n          <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"SubjectTextField\">Subject</label>\n              <input type=\"text\" class=\"form-control\" id=\"SubjectTextField\" placeholder=\"Enter Subject\" name=\"subject\"\n                [(ngModel)]=\"todo.subject\" value=\"{{ todo.subject }}\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"DescriptionTextField\">Description</label>\n              <input type=\"text\" class=\"form-control\" id=\"DescriptionTextField\" placeholder=\"Enter Description\"\n                name=\"description\" [(ngModel)]=\"todo.description\" value=\"{{ todo.description }}\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"CategoryTextField\">Category</label>\n              <input type=\"text\" class=\"form-control\" id=\"CategoryTextField\" placeholder=\"Enter Category\"\n                name=\"category\" [(ngModel)]=\"todo.category\" value=\"{{ todo.category }}\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"DateTextField\">Date</label>\n              <input type=\"date\" class=\"form-control\" id=\"DateTextField\" placeholder=\"Enter Date\" name=\"date\"\n                [(ngModel)]=\"todo.date\" value=\"{{ todo.date }}\" required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fas fa-edit\"></i> {{ title }}</button>\n            <a routerLink=\"/todo-list\" class=\"btn btn-warning\">\n              <i class=\"fas fa-undo\"></i> Cancel</a>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todos/todo-details/todo-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/todos/todo-details/todo-details.component.ts ***!
  \**************************************************************/
/*! exports provided: TodoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsComponent", function() { return TodoDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/todo */ "./src/app/models/todo.ts");

// MEAN Portfolio
// File Name: todo-details.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019





var TodoDetailsComponent = /** @class */ (function () {
    function TodoDetailsComponent(activatedRoute, flashMessage, todoService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.todoService = todoService;
        this.router = router;
    }
    TodoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.todo = new src_app_models_todo__WEBPACK_IMPORTED_MODULE_5__["Todo"](); // create a new Todo object
        this.activatedRoute.params.subscribe(function (params) {
            _this.todo._id = params.id;
        });
        if (this.title === 'Edit Todo') {
            this.getTodo(this.todo);
        }
    };
    // pull the data
    TodoDetailsComponent.prototype.getTodo = function (todo) {
        var _this = this;
        this.todoService.getTodo(todo).subscribe(function (data) {
            _this.todo = data.todo;
        });
    };
    TodoDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        switch (this.title) {
            case 'Add Todo':
                this.todoService.addTodo(this.todo).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                        _this.router.navigate(['/todo-list']);
                    }
                    else {
                        _this.flashMessage.show('Add Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                        _this.router.navigate(['/todo-list']);
                    }
                });
                break;
            case 'Edit Todo':
                this.todoService.editTodo(this.todo).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                        _this.router.navigate(['/todo-list']);
                    }
                    else {
                        _this.flashMessage.show('Edit Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                        _this.router.navigate(['/todo-list']);
                    }
                });
                break;
        }
    };
    TodoDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-details',
            template: __webpack_require__(/*! ./todo-details.component.html */ "./src/app/todos/todo-details/todo-details.component.html"),
            styles: [__webpack_require__(/*! ./todo-details.component.css */ "./src/app/todos/todo-details/todo-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MEAN Portfolio\r\n   File Name: todo-list.component.css\r\n   Author: Minseok Choi\r\n   StudentID: 300917184\r\n   Date: 03/29/2019\r\n   */\r\n\r\n   /*navigation*/\r\n\r\n   .mainNav {\n    background-color: rgba(0, 0, 0, 1);\n  }\r\n\r\n   /* index container */\r\n\r\n   .container-fade {\n    width: 80%;\n    min-height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    min-height: 820px;\n  }\r\n\r\n   .container-fade-round {\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 700px;\n  padding-top: 50px;\n  border-radius: 30px;\n  }\r\n\r\n   .container-inside-light {\n   width: 95%;\n   background: #dddddd;\n   min-height: 100%;\n   padding: 50px;\n   min-height: 800px;\n  }\r\n\r\n   /*round image 100px size*/\r\n\r\n   .img-profil {\n    border-radius: 100px;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 200px;\n    box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*for profile image in about page*/\r\n\r\n   .img-profil-about {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 300px;\n  box-shadow: 3px 3px 3px 3px #333333;\n  }\r\n\r\n   /*small icon*/\r\n\r\n   .icon-small {\n  width: 30px;\n  height: 30px;\n  }\r\n\r\n   /*simple margin*/\r\n\r\n   .margin-top-50px {\n  margin-top: 50px;\n  }\r\n\r\n   /*logo image*/\r\n\r\n   .img-logo-name {\n  width: 150px;\t\n  }\r\n\r\n   /*icon image*/\r\n\r\n   .img-icon {\n  width: 150px;\t\n  }\r\n\r\n   /*background container*/\r\n\r\n   #background {\n    padding-top: 4rem;\n  background-image: url(\"/../assets/images/background.jpg\");  \n  background-position: top left;\n  background-size: 1920px;\n  min-height: 96%;\n  }\r\n\r\n   /*copyright*/\r\n\r\n   #copyright {\n  background-color: black;\n  color: whitesmoke;\n  text-align: center;\n  height: 45px;\n  padding: 5px;\n  }\r\n\r\n   /* body size*/\r\n\r\n   body,\n  html {\n  width: 100%;\n  height: 100%;\n  }\r\n\r\n   /* body font-family */\r\n\r\n   body {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*hrizontal line*/\r\n\r\n   hr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #e66d5d;\n  }\r\n\r\n   hr.light {\n  border-color: #fff;\n  }\r\n\r\n   /* href */\r\n\r\n   a {\n  color: #e66d5d;\n  transition: all 0.2s;\n  }\r\n\r\n   a:hover {\n  color: #e66d5d;\n  }\r\n\r\n   /* h font-family */\r\n\r\n   h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   /*background colors*/\r\n\r\n   .bg-primary {\n  background-color: #e66d5d!important;\n  }\r\n\r\n   .bg-dark {\n  background-color: #212529 !important;\n  }\r\n\r\n   .text-faded {\n  color: rgba(255, 255, 255, 0.7);\n  }\r\n\r\n   .service-box {\n  max-width: 400px;\n  }\r\n\r\n   /*portfolio box*/\r\n\r\n   .portfolio-box {\n  position: relative;\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n  }\r\n\r\n   /*portfolio box caption*/\r\n\r\n   .portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.2s;\n  }\r\n\r\n   /*portfolio box caption content*/\r\n\r\n   .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  }\r\n\r\n   /*portfolio hover opacity*/\r\n\r\n   .portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n  }\r\n\r\n   .text-primary {\n  color: #e66d5d!important;\n  }\r\n\r\n   /*button*/\r\n\r\n   .btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  }\r\n\r\n   .btn-xl {\n  padding: 1rem 2rem;\n  }\r\n\r\n   .btn-primary {\n  color: #fff;\n  background-color: #e66d5d;\n  border-color: #e66d5d;\n  }\r\n\r\n   .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #cc3333 !important;\n  }\r\n\r\n   .btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(64, 95, 240, 0.5) !important;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic3JjL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBS0k7O0dDSkosYUFBYTs7R0FDYjtJQUNJLGtDQUFrQztFQUNwQzs7R0FFQSxvQkFBb0I7O0dBQ3BCO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0VBQ25COztHQUVBO0VBQ0EsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjs7R0FFQTtHQUNDLFVBQVU7R0FDVixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixpQkFBaUI7RUFDbEI7O0dBRUEseUJBQXlCOztHQUN6QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7RUFDckM7O0dBRUEsa0NBQWtDOztHQUNsQztFQUNBLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7O0dBRUEsYUFBYTs7R0FDYjtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0dBRUEsZ0JBQWdCOztHQUNoQjtFQUNBLGdCQUFnQjtFQUNoQjs7R0FFQSxhQUFhOztHQUNiO0VBQ0EsWUFBWTtFQUNaOztHQUVBLGFBQWE7O0dBQ2I7RUFDQSxZQUFZO0VBQ1o7O0dBRUEsdUJBQXVCOztHQUN2QjtJQUNFLGlCQUFpQjtFQUNuQix5REFBeUQ7RUFDekQsNkJBQTZCO0VBSTdCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7O0dBRUEsWUFBWTs7R0FDWjtFQUNBLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1o7O0dBR0EsYUFBYTs7R0FDYjs7RUFFQSxXQUFXO0VBQ1gsWUFBWTtFQUNaOztHQUVBLHFCQUFxQjs7R0FDckI7RUFDQSxnRUFBZ0U7RUFDaEU7O0dBRUEsaUJBQWlCOztHQUNqQjtFQUNBLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCOztHQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCOztHQUVBLFNBQVM7O0dBQ1Q7RUFDQSxjQUFjO0VBR2Qsb0JBQW9CO0VBQ3BCOztHQUVBO0VBQ0EsY0FBYztFQUNkOztHQUVBLGtCQUFrQjs7R0FDbEI7Ozs7OztFQU1BLDZEQUE2RDtFQUM3RDs7R0FFQSxvQkFBb0I7O0dBQ3BCO0VBQ0EsbUNBQW1DO0VBQ25DOztHQUVBO0VBQ0Esb0NBQW9DO0VBQ3BDOztHQUVBO0VBQ0EsK0JBQStCO0VBQy9COztHQUVBO0VBQ0EsZ0JBQWdCO0VBQ2hCOztHQUVBLGdCQUFnQjs7R0FDaEI7RUFDQSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkOztHQUVBLHdCQUF3Qjs7R0FDeEI7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLDhCQUE4QjtFQUc5QixvQkFBb0I7RUFDcEI7O0dBRUEsZ0NBQWdDOztHQUNoQztFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCOztHQUVBLDBCQUEwQjs7R0FDMUI7RUFDQSxVQUFVO0VBQ1Y7O0dBRUE7RUFDQSx3QkFBd0I7RUFDeEI7O0dBRUEsU0FBUzs7R0FDVDtFQUNBLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2REFBNkQ7RUFDN0Q7O0dBRUE7RUFDQSxrQkFBa0I7RUFDbEI7O0dBRUE7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQjs7R0FFQTtFQUNBLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEM7O0dBRUE7RUFDQSwwREFBMEQ7RUFDMUQiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNRUFOIFBvcnRmb2xpb1xyXG4gICBGaWxlIE5hbWU6IHRvZG8tbGlzdC5jb21wb25lbnQuY3NzXHJcbiAgIEF1dGhvcjogTWluc2VvayBDaG9pXHJcbiAgIFN0dWRlbnRJRDogMzAwOTE3MTg0XHJcbiAgIERhdGU6IDAzLzI5LzIwMTlcclxuICAgKi9cclxuXHJcbiAgIEBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzLmNzcyc7IiwiXG4vKm5hdmlnYXRpb24qL1xuLm1haW5OYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIH1cbiAgXG4gIC8qIGluZGV4IGNvbnRhaW5lciAqL1xuICAuY29udGFpbmVyLWZhZGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWluLWhlaWdodDogODIwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItZmFkZS1yb3VuZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItaW5zaWRlLWxpZ2h0IHtcbiAgIHdpZHRoOiA5NSU7XG4gICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICAgbWluLWhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDUwcHg7XG4gICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgfVxuICBcbiAgLypyb3VuZCBpbWFnZSAxMDBweCBzaXplKi9cbiAgLmltZy1wcm9maWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICMzMzMzMzM7XG4gIH1cbiAgXG4gIC8qZm9yIHByb2ZpbGUgaW1hZ2UgaW4gYWJvdXQgcGFnZSovXG4gIC5pbWctcHJvZmlsLWFib3V0IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggIzMzMzMzMztcbiAgfVxuICBcbiAgLypzbWFsbCBpY29uKi9cbiAgLmljb24tc21hbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAvKnNpbXBsZSBtYXJnaW4qL1xuICAubWFyZ2luLXRvcC01MHB4IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICBcbiAgLypsb2dvIGltYWdlKi9cbiAgLmltZy1sb2dvLW5hbWUge1xuICB3aWR0aDogMTUwcHg7XHRcbiAgfVxuICBcbiAgLyppY29uIGltYWdlKi9cbiAgLmltZy1pY29uIHtcbiAgd2lkdGg6IDE1MHB4O1x0XG4gIH1cbiAgXG4gIC8qYmFja2dyb3VuZCBjb250YWluZXIqL1xuICAjYmFja2dyb3VuZCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpOyAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTkyMHB4O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDE5MjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOTIwcHg7XG4gIG1pbi1oZWlnaHQ6IDk2JTtcbiAgfVxuICBcbiAgLypjb3B5cmlnaHQqL1xuICAjY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICBcbiAgLyogYm9keSBzaXplKi9cbiAgYm9keSxcbiAgaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIGJvZHkgZm9udC1mYW1pbHkgKi9cbiAgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qaHJpem9udGFsIGxpbmUqL1xuICBociB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1jb2xvcjogI2U2NmQ1ZDtcbiAgfVxuICBcbiAgaHIubGlnaHQge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8qIGhyZWYgKi9cbiAgYSB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZTY2ZDVkO1xuICB9XG4gIFxuICAvKiBoIGZvbnQtZmFtaWx5ICovXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKmJhY2tncm91bmQgY29sb3JzKi9cbiAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50ZXh0LWZhZGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuICBcbiAgLnNlcnZpY2UtYm94IHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94Ki9cbiAgLnBvcnRmb2xpby1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC8qcG9ydGZvbGlvIGJveCBjYXB0aW9uKi9cbiAgLnBvcnRmb2xpby1ib3ggLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgLypwb3J0Zm9saW8gYm94IGNhcHRpb24gY29udGVudCovXG4gIC5wb3J0Zm9saW8tYm94IC5wb3J0Zm9saW8tYm94LWNhcHRpb24gLnBvcnRmb2xpby1ib3gtY2FwdGlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKnBvcnRmb2xpbyBob3ZlciBvcGFjaXR5Ki9cbiAgLnBvcnRmb2xpby1ib3g6aG92ZXIgLnBvcnRmb2xpby1ib3gtY2FwdGlvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogI2U2NmQ1ZCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qYnV0dG9uKi9cbiAgLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5idG4teGwge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY2ZDVkO1xuICBib3JkZXItY29sb3I6ICNlNjZkNWQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzMzMzMgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjQsIDk1LCAyNDAsIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"container container-fade\">\r\n  <div class=\"container container-inside-light\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-offset-3 col-md-12\">\r\n          <h1>Todo List</h1>\r\n          <br>\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <!-- Header Row-->\r\n            <tr>\r\n              <th class=\"text-center\">Subject</th>\r\n              <th class=\"text-center\">Description</th>\r\n              <th class=\"text-center\">Category</th>\r\n              <th class=\"text-center\">Date</th>\r\n              <th class=\"text-center\"></th>\r\n              <th class=\"text-center\"></th>\r\n            </tr>\r\n\r\n            <!-- Repeatable Template Row -->\r\n            <tr *ngFor=\"let todo of todos\">\r\n              <td class=\"text-center\">{{ todo.subject }}</td>\r\n              <td class=\"text-center\">{{ todo.description }}</td>\r\n              <td class=\"text-center\">{{ todo.category }}</td>\r\n              <td class=\"text-center\">{{ todo.date | date : \"MMMM d, y\"  }}</td>\r\n\r\n              <!-- Edit Todo Button -->\r\n              <td class=\"text-center\">\r\n                <a routerLink=\"/todo-list/edit/{{ todo._id }}\" class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt\"></i>\r\n                  Edit</a>\r\n              </td>\r\n\r\n              <!-- Delete Todo Button -->\r\n              <td class=\"text-center\">\r\n                <a routerLink=\"/todo-list/delete/{{ todo._id }}\" (click)=\"onDeleteClick()\" class=\"btn btn-danger\"><i\r\n                    class=\"fas fa-trash-alt\"></i> Delete</a>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <a class=\"btn btn-primary\" routerLink=\"/todo-list/add\" role=\"button\">\r\n            <i class=\"fas fa-plus-circle\"></i> Add Todo</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
  \********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// MEAN Portfolio
// File Name: todo-list.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(// inject the services which will be called into the constructor
    todoListService, flashMessage, router) {
        this.todoListService = todoListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.todos = new Array(); // initialize array of type Todo
        this.displayTodoList(); // display Todo list
    };
    TodoListComponent.prototype.displayTodoList = function () {
        var _this = this;
        this.todoListService.getList().subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.todos = data.todoList;
            }
            else {
                _this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    TodoListComponent.prototype.onDeleteClick = function () {
        if (!confirm('Are You Sure to delete the object?')) {
            this.router.navigate(['/todo-list']);
        }
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todos/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todos/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
// MEAN Portfolio
// File Name: main.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\6 Semester\COMP 308 - Emerging Technologies\COMP308-MinseokChoi_Assignment2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map