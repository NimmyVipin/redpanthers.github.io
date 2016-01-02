var RedPanther = RedPanther || {}
RedPanther.factory('openSouceProjects',['$http',function($http){
  getProjectCategories = function(){
    var categories = [
      {categoryName:"Javascript",categoryId:1},
      {categoryName:"Rails",categoryId:5},
      {categoryName:"Ionic",categoryId:3},
      {categoryName:"Angular",categoryId:8},
      // {categoryName:"React JS",categoryId:12},
      {categoryName:"Dart",categoryId:18}
    ];
    return categories;
  }
  getAllProjects = function(){
    var allProjects = [
      {projectName:"Rails Framework",projectCategory:"Rails",projectDescription:"Web framework written in ruby on rails",projectOwner:"ruby",projectContributers:[
        {authorName:"John Doe", authorUserId:22334},{authorName:"Rahul", authorUserId:2334}
      ],projectLanguages:["Ruby", "Coffeescript","HTML","CSS"]},
      {projectName:"Slick Carousel",projectCategory:"Javascript",projectDescription:"Javascript image slider and carousel",projectOwner:"slick",projectContributers:[
        {authorName:"Akhil Don",authorUserId:23346},{authorName:"Bibin Tom",authorUserId:5356}
      ],projectLanguages:["Javascript","CSS"]},
      {projectName:"Hybrid Ecommerce App",projectCategory:"Ionic",projectDescription:"Hybrid cross platform mobile e-commerse store",projectOwner:"ionic",projectContributers:[
        {authorName:"Bilbo Baggins",authorUserId:8990},{authorName:"Bruce Wayne",authorUserId:99012},{authorName:"Clark Kent", authorUserId:45435}
      ],
      projectLanguages:["Angular","HTML","CSS","Cordova"]},
      {projectName:"Slim Scroll",projectCategory:"Javascript",projectDescription:"Scrollable element for long description",projectOwner:"Ezra Milller",projectContributers:[
        {authorName:"Ezra Miller",authorUserId:73634},{authorName:"Jason Momoa",authorUserId:542543},{authorName:"Ray Fisher",authorUserId:34234}
      ],projectLanguages:["Javascript","CSS"]},
      {projectName:"School Management System",projectCategory:"dart",projectDescription:"School Management software written in dark language",projectOwner:"Jesse Eisenberg",projectContributers:[
        {authorName:"Jesse Eisenberg",authorUserId:33411},{authorName:"Amy Adams",authorUserId:12334},{authorName:"Gal Gadot",authorUserId:1234}
      ],projectLanguages:["Dart","HTML","CSS","Jquery"]},
      {projectName:"World News portal",projectCategory:"Angular JS",projectDescription:"English News website using angular, data fetched using apis",projectOwner:"Jeremy Ions",projectContributers:[
        {authorName:"Michael Shannon",authorUserId:1232},{authorName:"Russell Crowe",authorUserId:2232},{authorName:"Kevin Costner",authorUserId:4232},{authorName:"Ayelet Zurer",authorUserId:6232}
      ],projectLanguages:["Angular JS","HTML","CSS","Handlebar"]},
      {projectName:"Isotope",projectCategory:"Javascript",projectDescription:"Responsive and automatic grid system",projectOwner:"Anthony Mackie",projectContributers:[
        {authorName:"Anthony Mackie",authorUserId:89798},{authorName:"Sebastian Stan",authorUserId:19798},{authorName:"Hayley Atwell",authorUserId:59798}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 1, Web dvelopment Project",projectCategory:"Rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectContributers:[
        {authorName:"Gregg Henry",authorUserId:7622131},{authorName:"Ophelia Lovibond",authorUserId:33423},{authorName:"Michael Rooker",authorUserId:789623423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 11, Web dvelopment Project",projectCategory:"Angular",projectDescription:"Web development and designing using latest languages",projectOwner:"Lee Pace",projectContributers:[
        {authorName:"Glenn Close",authorUserId:2122131},{authorName:"Gregg Henry",authorUserId:123423},{authorName:"Michael Rooker",authorUserId:21453423423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 5, Web dvelopment Project",projectCategory:"Dart",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectContributers:[
        {authorName:"Gregg Henry",authorUserId:567822131},{authorName:"Michael Rooker",authorUserId:3343423},{authorName:"Glenn Close",authorUserId:123423423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 9, Web dvelopment Project",projectCategory:"Rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Lee Pace",projectContributers:[
        {authorName:"Michael Rooker",authorUserId:8922131},{authorName:"Glenn Close",authorUserId:4343423},{authorName:"Gregg Henry",authorUserId:67823423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 12, Web dvelopment Project",projectCategory:"Dart",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectContributers:[
        {authorName:"Gregg Henry",authorUserId:545422131},{authorName:"Michael Rooker",authorUserId:53423},{authorName:"Glenn Close",authorUserId:54623423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 29, Web dvelopment Project",projectCategory:"Rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Karen Gillan",projectContributers:[
        {authorName:"Gregg Henry",authorUserId:23422131},{authorName:"Glenn Close",authorUserId:83423},{authorName:"Michael Rooker",authorUserId:5465423423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 32, Web dvelopment Project",projectCategory:"Javascript",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectContributers:[
        {authorName:"Glenn Close",authorUserId:4322131},{authorName:"Michael Rooker",authorUserId:63423},{authorName:"Ophelia Lovibond",authorUserId:4356423423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 44, Web dvelopment Project",projectCategory:"Javascript",projectDescription:"Web development and designing using latest languages",projectOwner:"Karen Gillan",projectContributers:[
        {authorName:"Michael Rooker",authorUserId:56622131},{authorName:"Glenn Close",authorUserId:983423},{authorName:"Ophelia Lovibond",authorUserId:3433423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 17, Web dvelopment Project",projectCategory:"Rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectContributers:[
        {authorName:"Glenn Close",authorUserId:6622131},{authorName:"Gregg Henry",authorUserId:553423},{authorName:"Ophelia Lovibond",authorUserId:1213423}
      ],projectLanguages:["Ruby","HTML"]}
    ];
    return allProjects;
  }
  getTenProjectsByCategory = function(category){
    var i = 10;
    var categories = getAllProjects();
    var category = category?category:""
    var tenCategory = []
    if(category==""){
      $.each(categories,function(index,value){
        if(index<10){
          tenCategory.push(value)
        }
      })
    }else{
      $.each(categories,function(index,value){
        if(index<10 && value.projectCategory==category){
          tenCategory.push(value)
        }
      })
    }
    return tenCategory
    
  }
  return{
    getProjectCategories: getProjectCategories,
    getTenProjectsByCategory: getTenProjectsByCategory
  }
}]) 