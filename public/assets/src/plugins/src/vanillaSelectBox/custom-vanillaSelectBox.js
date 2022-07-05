selectBox = new vanillaSelectBox("#selectProgrammingLanguage", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
frameworkCMS = new vanillaSelectBox("#frameworkCMS", {
    "maxHeight": 400,
    "search": true,
    translations: { "all": "All", "items": "Selected" },
    "minWidth":210,
    "placeHolder": "Choose..." 
});
selectBox3 = new vanillaSelectBox("#multipleSelect", {
    "minWidth":210,
    "maxHeight": 200,
    "search": true,
    "stayOpen":true
});