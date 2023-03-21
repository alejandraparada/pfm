require([

  "esri/map",
  "esri/layers/FeatureLayer",
  "dojo/on",

  "esri/dijit/PopupTemplate",
  "esri/dijit/Popup",

  "esri/geometry/Extent",
  "esri/SpatialReference",

  "esri/tasks/locator",
  "esri/dijit/Search",
  "dojo/dom",

  'esri/symbols/SimpleMarkerSymbol',
  'esri/Color',
  'esri/graphic',
  'esri/symbols/TextSymbol',
  'esri/symbols/Font',

  "dojo/domReady!"
],function (

  Map,
  FeatureLayer,
  on, 

  PopupTemplate,
  Popup,

  Extent,
  SpatialReference,

  Locator, 
  Search, 
  dom,

  SimpleMarkerSymbol, 
  Color, 
  Graphic, 
  TextSymbol, 
  Font
  ) {
  var urlEdificios = "https://services8.arcgis.com/BtkRLT3YBKaVGV3g/arcgis/rest/services/Edificios_Publicos/FeatureServer/19";

  var mapMain = new Map("divMap", {
    basemap: "topo",
    center: [-3, 40],
    zoom: 4,
    extent: new Extent({
      xmin: 354232.860652516,
      ymin: 4608767.45635417,
      xmax: 359790.232098501,
      ymax: 4613947.94071073,
      spatialReference:{ wkid:4326 },
    })
  });
  var template = new PopupTemplate({
    title: "",
    description: "<h2> Tipo de Centro: </h2> <hr> <br> {TIPO_DE_CENTRO}  Descripcion: {DESCRIPCION}  <br> Ref: Catrastal: {REFERENCIA_CATASTRAL_1}"
  });

  var lyrEdificios = new FeatureLayer(urlEdificios, {
    outFields: ["*"],
    infoTemplate: template
  });

  mapMain.addLayer(lyrEdificios);

});