var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var lyr_DEMTIN_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM TIN<br />\
    <img src="styles/legend/DEMTIN_1_0.png" /> 1158.033<br />\
    <img src="styles/legend/DEMTIN_1_1.png" /> 1159.670<br />\
    <img src="styles/legend/DEMTIN_1_2.png" /> 1161.306<br />\
    <img src="styles/legend/DEMTIN_1_3.png" /> 1162.943<br />\
    <img src="styles/legend/DEMTIN_1_4.png" /> 1164.579<br />\
    <img src="styles/legend/DEMTIN_1_5.png" /> 1166.215<br />\
    <img src="styles/legend/DEMTIN_1_6.png" /> 1167.852<br />\
    <img src="styles/legend/DEMTIN_1_7.png" /> 1169.488<br />\
    <img src="styles/legend/DEMTIN_1_8.png" /> 1171.125<br />\
    <img src="styles/legend/DEMTIN_1_9.png" /> 1172.761<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEMTIN_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8373008.750121, 493390.643870, -8372892.781668, 493464.249211]
        })
    });
var format_PUNTOSTOMA_2 = new ol.format.GeoJSON();
var features_PUNTOSTOMA_2 = format_PUNTOSTOMA_2.readFeatures(json_PUNTOSTOMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOSTOMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOSTOMA_2.addFeatures(features_PUNTOSTOMA_2);
var lyr_PUNTOSTOMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOSTOMA_2, 
                style: style_PUNTOSTOMA_2,
                popuplayertitle: 'PUNTOS TOMA',
                interactive: false,
                title: '<img src="styles/legend/PUNTOSTOMA_2.png" /> PUNTOS TOMA'
            });
var format_Extrados_3 = new ol.format.GeoJSON();
var features_Extrados_3 = format_Extrados_3.readFeatures(json_Extrados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extrados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extrados_3.addFeatures(features_Extrados_3);
var lyr_Extrados_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extrados_3, 
                style: style_Extrados_3,
                popuplayertitle: 'Extraídos',
                interactive: true,
    title: 'Extraídos<br />\
    <img src="styles/legend/Extrados_3_0.png" /> VIA<br />\
    <img src="styles/legend/Extrados_3_1.png" /> BOUNDARIE<br />\
    <img src="styles/legend/Extrados_3_2.png" /> CURVAS MENORES<br />\
    <img src="styles/legend/Extrados_3_3.png" /> CURVAS MAYORES<br />' });

lyr_Positron_0.setVisible(true);lyr_DEMTIN_1.setVisible(true);lyr_PUNTOSTOMA_2.setVisible(true);lyr_Extrados_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_DEMTIN_1,lyr_PUNTOSTOMA_2,lyr_Extrados_3];
lyr_PUNTOSTOMA_2.set('fieldAliases', {'1': '1', '981479.379': '981479.379', '873638.119': '873638.119', '1168.703': '1168.703', 'D1': 'D1', });
lyr_Extrados_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'first': 'first', });
lyr_PUNTOSTOMA_2.set('fieldImages', {'1': 'Range', '981479.379': 'TextEdit', '873638.119': 'TextEdit', '1168.703': 'TextEdit', 'D1': 'TextEdit', });
lyr_Extrados_3.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'first': 'TextEdit', });
lyr_PUNTOSTOMA_2.set('fieldLabels', {'1': 'no label', '981479.379': 'no label', '873638.119': 'no label', '1168.703': 'no label', 'D1': 'no label', });
lyr_Extrados_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'first': 'no label', });
lyr_Extrados_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});