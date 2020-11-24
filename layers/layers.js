ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31983").setExtent([350020.757265, 7394994.441573, 375446.131142, 7412375.446841]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Limite_2 = new ol.format.GeoJSON();
var features_Limite_2 = format_Limite_2.readFeatures(json_Limite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Limite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_2.addFeatures(features_Limite_2);
var lyr_Limite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_2, 
                style: style_Limite_2,
                interactive: true,
                title: '<img src="styles/legend/Limite_2.png" /> Limite'
            });
var format_Centro_3 = new ol.format.GeoJSON();
var features_Centro_3 = format_Centro_3.readFeatures(json_Centro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Centro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro_3.addFeatures(features_Centro_3);
var lyr_Centro_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centro_3, 
                style: style_Centro_3,
                interactive: true,
                title: '<img src="styles/legend/Centro_3.png" /> Centro'
            });
var format_Perobal_4 = new ol.format.GeoJSON();
var features_Perobal_4 = format_Perobal_4.readFeatures(json_Perobal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Perobal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perobal_4.addFeatures(features_Perobal_4);
var lyr_Perobal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perobal_4, 
                style: style_Perobal_4,
                interactive: true,
                title: '<img src="styles/legend/Perobal_4.png" /> Perobal'
            });
var format_Rio_Abaixo_5 = new ol.format.GeoJSON();
var features_Rio_Abaixo_5 = format_Rio_Abaixo_5.readFeatures(json_Rio_Abaixo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Rio_Abaixo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_Abaixo_5.addFeatures(features_Rio_Abaixo_5);
var lyr_Rio_Abaixo_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rio_Abaixo_5, 
                style: style_Rio_Abaixo_5,
                interactive: true,
                title: '<img src="styles/legend/Rio_Abaixo_5.png" /> Rio_Abaixo'
            });
var format_Corredor_6 = new ol.format.GeoJSON();
var features_Corredor_6 = format_Corredor_6.readFeatures(json_Corredor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Corredor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor_6.addFeatures(features_Corredor_6);
var lyr_Corredor_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Corredor_6, 
                style: style_Corredor_6,
                interactive: true,
                title: '<img src="styles/legend/Corredor_6.png" /> Corredor'
            });
var format_Cuiab_7 = new ol.format.GeoJSON();
var features_Cuiab_7 = format_Cuiab_7.readFeatures(json_Cuiab_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Cuiab_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuiab_7.addFeatures(features_Cuiab_7);
var lyr_Cuiab_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuiab_7, 
                style: style_Cuiab_7,
                interactive: true,
                title: '<img src="styles/legend/Cuiab_7.png" /> Cuiabá'
            });
var format_Una_8 = new ol.format.GeoJSON();
var features_Una_8 = format_Una_8.readFeatures(json_Una_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Una_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Una_8.addFeatures(features_Una_8);
var lyr_Una_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Una_8, 
                style: style_Una_8,
                interactive: true,
                title: '<img src="styles/legend/Una_8.png" /> Una'
            });
var format_Sao_Bento_9 = new ol.format.GeoJSON();
var features_Sao_Bento_9 = format_Sao_Bento_9.readFeatures(json_Sao_Bento_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sao_Bento_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sao_Bento_9.addFeatures(features_Sao_Bento_9);
var lyr_Sao_Bento_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sao_Bento_9, 
                style: style_Sao_Bento_9,
                interactive: true,
                title: '<img src="styles/legend/Sao_Bento_9.png" /> Sao_Bento'
            });
var format_Monte_Belo_10 = new ol.format.GeoJSON();
var features_Monte_Belo_10 = format_Monte_Belo_10.readFeatures(json_Monte_Belo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monte_Belo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monte_Belo_10.addFeatures(features_Monte_Belo_10);
var lyr_Monte_Belo_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monte_Belo_10, 
                style: style_Monte_Belo_10,
                interactive: true,
                title: '<img src="styles/legend/Monte_Belo_10.png" /> Monte_Belo'
            });
var format_Tipoia_11 = new ol.format.GeoJSON();
var features_Tipoia_11 = format_Tipoia_11.readFeatures(json_Tipoia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Tipoia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipoia_11.addFeatures(features_Tipoia_11);
var lyr_Tipoia_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipoia_11, 
                style: style_Tipoia_11,
                interactive: true,
                title: '<img src="styles/legend/Tipoia_11.png" /> Tipoia'
            });
var format_Campo_da_Venda_12 = new ol.format.GeoJSON();
var features_Campo_da_Venda_12 = format_Campo_da_Venda_12.readFeatures(json_Campo_da_Venda_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Campo_da_Venda_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campo_da_Venda_12.addFeatures(features_Campo_da_Venda_12);
var lyr_Campo_da_Venda_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campo_da_Venda_12, 
                style: style_Campo_da_Venda_12,
                interactive: true,
                title: '<img src="styles/legend/Campo_da_Venda_12.png" /> Campo_da_Venda'
            });
var format_Campo_Limpo_13 = new ol.format.GeoJSON();
var features_Campo_Limpo_13 = format_Campo_Limpo_13.readFeatures(json_Campo_Limpo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Campo_Limpo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campo_Limpo_13.addFeatures(features_Campo_Limpo_13);
var lyr_Campo_Limpo_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campo_Limpo_13, 
                style: style_Campo_Limpo_13,
                interactive: true,
                title: '<img src="styles/legend/Campo_Limpo_13.png" /> Campo_Limpo'
            });
var format_Pium_14 = new ol.format.GeoJSON();
var features_Pium_14 = format_Pium_14.readFeatures(json_Pium_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pium_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pium_14.addFeatures(features_Pium_14);
var lyr_Pium_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pium_14, 
                style: style_Pium_14,
                interactive: true,
                title: '<img src="styles/legend/Pium_14.png" /> Pium'
            });
var format_Cidade_Kemel_15 = new ol.format.GeoJSON();
var features_Cidade_Kemel_15 = format_Cidade_Kemel_15.readFeatures(json_Cidade_Kemel_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Cidade_Kemel_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidade_Kemel_15.addFeatures(features_Cidade_Kemel_15);
var lyr_Cidade_Kemel_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cidade_Kemel_15, 
                style: style_Cidade_Kemel_15,
                interactive: true,
                title: '<img src="styles/legend/Cidade_Kemel_15.png" /> Cidade_Kemel'
            });
var format_Vila_Virginia_16 = new ol.format.GeoJSON();
var features_Vila_Virginia_16 = format_Vila_Virginia_16.readFeatures(json_Vila_Virginia_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vila_Virginia_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vila_Virginia_16.addFeatures(features_Vila_Virginia_16);
var lyr_Vila_Virginia_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vila_Virginia_16, 
                style: style_Vila_Virginia_16,
                interactive: true,
                title: '<img src="styles/legend/Vila_Virginia_16.png" /> Vila_Virginia'
            });
var format_Morro_Branco_17 = new ol.format.GeoJSON();
var features_Morro_Branco_17 = format_Morro_Branco_17.readFeatures(json_Morro_Branco_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Morro_Branco_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morro_Branco_17.addFeatures(features_Morro_Branco_17);
var lyr_Morro_Branco_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Morro_Branco_17, 
                style: style_Morro_Branco_17,
                interactive: true,
                title: '<img src="styles/legend/Morro_Branco_17.png" /> Morro_Branco'
            });
var format_Pedreira_18 = new ol.format.GeoJSON();
var features_Pedreira_18 = format_Pedreira_18.readFeatures(json_Pedreira_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pedreira_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedreira_18.addFeatures(features_Pedreira_18);
var lyr_Pedreira_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedreira_18, 
                style: style_Pedreira_18,
                interactive: true,
                title: '<img src="styles/legend/Pedreira_18.png" /> Pedreira'
            });
var format_Estacao_19 = new ol.format.GeoJSON();
var features_Estacao_19 = format_Estacao_19.readFeatures(json_Estacao_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Estacao_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estacao_19.addFeatures(features_Estacao_19);
var lyr_Estacao_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estacao_19, 
                style: style_Estacao_19,
                interactive: true,
                title: '<img src="styles/legend/Estacao_19.png" /> Estacao'
            });
var format_Mandi_20 = new ol.format.GeoJSON();
var features_Mandi_20 = format_Mandi_20.readFeatures(json_Mandi_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Mandi_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mandi_20.addFeatures(features_Mandi_20);
var lyr_Mandi_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mandi_20, 
                style: style_Mandi_20,
                interactive: true,
                title: '<img src="styles/legend/Mandi_20.png" /> Mandi'
            });
var format_Pinheirinho_21 = new ol.format.GeoJSON();
var features_Pinheirinho_21 = format_Pinheirinho_21.readFeatures(json_Pinheirinho_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pinheirinho_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinheirinho_21.addFeatures(features_Pinheirinho_21);
var lyr_Pinheirinho_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pinheirinho_21, 
                style: style_Pinheirinho_21,
                interactive: true,
                title: '<img src="styles/legend/Pinheirinho_21.png" /> Pinheirinho'
            });
var format_Jaguari_22 = new ol.format.GeoJSON();
var features_Jaguari_22 = format_Jaguari_22.readFeatures(json_Jaguari_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jaguari_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaguari_22.addFeatures(features_Jaguari_22);
var lyr_Jaguari_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaguari_22, 
                style: style_Jaguari_22,
                interactive: true,
                title: '<img src="styles/legend/Jaguari_22.png" /> Jaguari'
            });
var format_Sitio_Mato_Dentro_23 = new ol.format.GeoJSON();
var features_Sitio_Mato_Dentro_23 = format_Sitio_Mato_Dentro_23.readFeatures(json_Sitio_Mato_Dentro_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sitio_Mato_Dentro_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitio_Mato_Dentro_23.addFeatures(features_Sitio_Mato_Dentro_23);
var lyr_Sitio_Mato_Dentro_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sitio_Mato_Dentro_23, 
                style: style_Sitio_Mato_Dentro_23,
                interactive: true,
                title: '<img src="styles/legend/Sitio_Mato_Dentro_23.png" /> Sitio_Mato_Dentro'
            });
var format_Acafrao_24 = new ol.format.GeoJSON();
var features_Acafrao_24 = format_Acafrao_24.readFeatures(json_Acafrao_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Acafrao_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acafrao_24.addFeatures(features_Acafrao_24);
var lyr_Acafrao_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acafrao_24, 
                style: style_Acafrao_24,
                interactive: true,
                title: '<img src="styles/legend/Acafrao_24.png" /> Acafrao'
            });
var format_Aracare_25 = new ol.format.GeoJSON();
var features_Aracare_25 = format_Aracare_25.readFeatures(json_Aracare_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Aracare_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aracare_25.addFeatures(features_Aracare_25);
var lyr_Aracare_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aracare_25, 
                style: style_Aracare_25,
                interactive: true,
                title: '<img src="styles/legend/Aracare_25.png" /> Aracare'
            });
var format_Jardim_Josely_26 = new ol.format.GeoJSON();
var features_Jardim_Josely_26 = format_Jardim_Josely_26.readFeatures(json_Jardim_Josely_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jardim_Josely_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Josely_26.addFeatures(features_Jardim_Josely_26);
var lyr_Jardim_Josely_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Josely_26, 
                style: style_Jardim_Josely_26,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Josely_26.png" /> Jardim_Josely'
            });
var format_Jardim_Lucinda_27 = new ol.format.GeoJSON();
var features_Jardim_Lucinda_27 = format_Jardim_Lucinda_27.readFeatures(json_Jardim_Lucinda_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jardim_Lucinda_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Lucinda_27.addFeatures(features_Jardim_Lucinda_27);
var lyr_Jardim_Lucinda_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Lucinda_27, 
                style: style_Jardim_Lucinda_27,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Lucinda_27.png" /> Jardim_Lucinda'
            });
var format_Aterro_Sanitario_Pajoan_28 = new ol.format.GeoJSON();
var features_Aterro_Sanitario_Pajoan_28 = format_Aterro_Sanitario_Pajoan_28.readFeatures(json_Aterro_Sanitario_Pajoan_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Aterro_Sanitario_Pajoan_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aterro_Sanitario_Pajoan_28.addFeatures(features_Aterro_Sanitario_Pajoan_28);
var lyr_Aterro_Sanitario_Pajoan_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aterro_Sanitario_Pajoan_28, 
                style: style_Aterro_Sanitario_Pajoan_28,
                interactive: true,
                title: '<img src="styles/legend/Aterro_Sanitario_Pajoan_28.png" /> Aterro_Sanitario_Pajoan'
            });
var format_Nova_Louzada_29 = new ol.format.GeoJSON();
var features_Nova_Louzada_29 = format_Nova_Louzada_29.readFeatures(json_Nova_Louzada_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nova_Louzada_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nova_Louzada_29.addFeatures(features_Nova_Louzada_29);
var lyr_Nova_Louzada_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nova_Louzada_29, 
                style: style_Nova_Louzada_29,
                interactive: true,
                title: '<img src="styles/legend/Nova_Louzada_29.png" /> Nova_Louzada'
            });
var format_Jardim_Nicea_30 = new ol.format.GeoJSON();
var features_Jardim_Nicea_30 = format_Jardim_Nicea_30.readFeatures(json_Jardim_Nicea_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jardim_Nicea_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Nicea_30.addFeatures(features_Jardim_Nicea_30);
var lyr_Jardim_Nicea_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Nicea_30, 
                style: style_Jardim_Nicea_30,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Nicea_30.png" /> Jardim_Nicea'
            });
var format_Jardim_Pinheirinho_31 = new ol.format.GeoJSON();
var features_Jardim_Pinheirinho_31 = format_Jardim_Pinheirinho_31.readFeatures(json_Jardim_Pinheirinho_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jardim_Pinheirinho_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Pinheirinho_31.addFeatures(features_Jardim_Pinheirinho_31);
var lyr_Jardim_Pinheirinho_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Pinheirinho_31, 
                style: style_Jardim_Pinheirinho_31,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Pinheirinho_31.png" /> Jardim_Pinheirinho'
            });
var format_Jardim_Amazonas_32 = new ol.format.GeoJSON();
var features_Jardim_Amazonas_32 = format_Jardim_Amazonas_32.readFeatures(json_Jardim_Amazonas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jardim_Amazonas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Amazonas_32.addFeatures(features_Jardim_Amazonas_32);
var lyr_Jardim_Amazonas_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Amazonas_32, 
                style: style_Jardim_Amazonas_32,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Amazonas_32.png" /> Jardim_Amazonas'
            });
var format_Julio_Simoes_33 = new ol.format.GeoJSON();
var features_Julio_Simoes_33 = format_Julio_Simoes_33.readFeatures(json_Julio_Simoes_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Julio_Simoes_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Julio_Simoes_33.addFeatures(features_Julio_Simoes_33);
var lyr_Julio_Simoes_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Julio_Simoes_33, 
                style: style_Julio_Simoes_33,
                interactive: true,
                title: '<img src="styles/legend/Julio_Simoes_33.png" /> Julio_Simoes'
            });
var format_Jardim_Rio_Negro_34 = new ol.format.GeoJSON();
var features_Jardim_Rio_Negro_34 = format_Jardim_Rio_Negro_34.readFeatures(json_Jardim_Rio_Negro_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Jardim_Rio_Negro_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Rio_Negro_34.addFeatures(features_Jardim_Rio_Negro_34);
var lyr_Jardim_Rio_Negro_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Rio_Negro_34, 
                style: style_Jardim_Rio_Negro_34,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Rio_Negro_34.png" /> Jardim_Rio_Negro'
            });
var format_Bairro_Estancia_Guatambu_35 = new ol.format.GeoJSON();
var features_Bairro_Estancia_Guatambu_35 = format_Bairro_Estancia_Guatambu_35.readFeatures(json_Bairro_Estancia_Guatambu_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Bairro_Estancia_Guatambu_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairro_Estancia_Guatambu_35.addFeatures(features_Bairro_Estancia_Guatambu_35);
var lyr_Bairro_Estancia_Guatambu_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bairro_Estancia_Guatambu_35, 
                style: style_Bairro_Estancia_Guatambu_35,
                interactive: true,
                title: '<img src="styles/legend/Bairro_Estancia_Guatambu_35.png" /> Bairro_Estancia_Guatambu'
            });
var format_EscolasMun_36 = new ol.format.GeoJSON();
var features_EscolasMun_36 = format_EscolasMun_36.readFeatures(json_EscolasMun_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EscolasMun_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolasMun_36.addFeatures(features_EscolasMun_36);
var lyr_EscolasMun_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscolasMun_36, 
                style: style_EscolasMun_36,
                interactive: true,
                title: '<img src="styles/legend/EscolasMun_36.png" /> EscolasMun'
            });
var format_Arq_Hospitais_37 = new ol.format.GeoJSON();
var features_Arq_Hospitais_37 = format_Arq_Hospitais_37.readFeatures(json_Arq_Hospitais_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arq_Hospitais_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arq_Hospitais_37.addFeatures(features_Arq_Hospitais_37);
var lyr_Arq_Hospitais_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arq_Hospitais_37, 
                style: style_Arq_Hospitais_37,
                interactive: true,
                title: '<img src="styles/legend/Arq_Hospitais_37.png" /> Arq_Hospitais'
            });
var format_Arq_Escolas_Estaduais_38 = new ol.format.GeoJSON();
var features_Arq_Escolas_Estaduais_38 = format_Arq_Escolas_Estaduais_38.readFeatures(json_Arq_Escolas_Estaduais_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arq_Escolas_Estaduais_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arq_Escolas_Estaduais_38.addFeatures(features_Arq_Escolas_Estaduais_38);
var lyr_Arq_Escolas_Estaduais_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arq_Escolas_Estaduais_38, 
                style: style_Arq_Escolas_Estaduais_38,
                interactive: true,
                title: '<img src="styles/legend/Arq_Escolas_Estaduais_38.png" /> Arq_Escolas_Estaduais'
            });
var format_Univeritas_39 = new ol.format.GeoJSON();
var features_Univeritas_39 = format_Univeritas_39.readFeatures(json_Univeritas_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Univeritas_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Univeritas_39.addFeatures(features_Univeritas_39);
var lyr_Univeritas_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Univeritas_39, 
                style: style_Univeritas_39,
                interactive: true,
                title: '<img src="styles/legend/Univeritas_39.png" /> Univeritas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Limite_2.setVisible(true);lyr_Centro_3.setVisible(true);lyr_Perobal_4.setVisible(true);lyr_Rio_Abaixo_5.setVisible(true);lyr_Corredor_6.setVisible(true);lyr_Cuiab_7.setVisible(true);lyr_Una_8.setVisible(true);lyr_Sao_Bento_9.setVisible(true);lyr_Monte_Belo_10.setVisible(true);lyr_Tipoia_11.setVisible(true);lyr_Campo_da_Venda_12.setVisible(true);lyr_Campo_Limpo_13.setVisible(true);lyr_Pium_14.setVisible(true);lyr_Cidade_Kemel_15.setVisible(true);lyr_Vila_Virginia_16.setVisible(true);lyr_Morro_Branco_17.setVisible(true);lyr_Pedreira_18.setVisible(true);lyr_Estacao_19.setVisible(true);lyr_Mandi_20.setVisible(true);lyr_Pinheirinho_21.setVisible(true);lyr_Jaguari_22.setVisible(true);lyr_Sitio_Mato_Dentro_23.setVisible(true);lyr_Acafrao_24.setVisible(true);lyr_Aracare_25.setVisible(true);lyr_Jardim_Josely_26.setVisible(true);lyr_Jardim_Lucinda_27.setVisible(true);lyr_Aterro_Sanitario_Pajoan_28.setVisible(true);lyr_Nova_Louzada_29.setVisible(true);lyr_Jardim_Nicea_30.setVisible(true);lyr_Jardim_Pinheirinho_31.setVisible(true);lyr_Jardim_Amazonas_32.setVisible(true);lyr_Julio_Simoes_33.setVisible(true);lyr_Jardim_Rio_Negro_34.setVisible(true);lyr_Bairro_Estancia_Guatambu_35.setVisible(true);lyr_EscolasMun_36.setVisible(true);lyr_Arq_Hospitais_37.setVisible(true);lyr_Arq_Escolas_Estaduais_38.setVisible(true);lyr_Univeritas_39.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_Limite_2,lyr_Centro_3,lyr_Perobal_4,lyr_Rio_Abaixo_5,lyr_Corredor_6,lyr_Cuiab_7,lyr_Una_8,lyr_Sao_Bento_9,lyr_Monte_Belo_10,lyr_Tipoia_11,lyr_Campo_da_Venda_12,lyr_Campo_Limpo_13,lyr_Pium_14,lyr_Cidade_Kemel_15,lyr_Vila_Virginia_16,lyr_Morro_Branco_17,lyr_Pedreira_18,lyr_Estacao_19,lyr_Mandi_20,lyr_Pinheirinho_21,lyr_Jaguari_22,lyr_Sitio_Mato_Dentro_23,lyr_Acafrao_24,lyr_Aracare_25,lyr_Jardim_Josely_26,lyr_Jardim_Lucinda_27,lyr_Aterro_Sanitario_Pajoan_28,lyr_Nova_Louzada_29,lyr_Jardim_Nicea_30,lyr_Jardim_Pinheirinho_31,lyr_Jardim_Amazonas_32,lyr_Julio_Simoes_33,lyr_Jardim_Rio_Negro_34,lyr_Bairro_Estancia_Guatambu_35,lyr_EscolasMun_36,lyr_Arq_Hospitais_37,lyr_Arq_Escolas_Estaduais_38,lyr_Univeritas_39];
lyr_Limite_2.set('fieldAliases', {'Cod_Cetesb': 'Cod_Cetesb', 'Cod_ibge': 'Cod_ibge', 'Nome': 'Nome', 'UGRHI': 'UGRHI', 'Nome_ugrhi': 'Nome_ugrhi', 'AREA_KM2': 'AREA_KM2', });
lyr_Centro_3.set('fieldAliases', {'Name': 'Name', });
lyr_Perobal_4.set('fieldAliases', {'Name': 'Name', });
lyr_Rio_Abaixo_5.set('fieldAliases', {'Name': 'Name', });
lyr_Corredor_6.set('fieldAliases', {'Name': 'Name', });
lyr_Cuiab_7.set('fieldAliases', {'Name': 'Name', });
lyr_Una_8.set('fieldAliases', {'Name': 'Name', });
lyr_Sao_Bento_9.set('fieldAliases', {'Name': 'Name', });
lyr_Monte_Belo_10.set('fieldAliases', {'Name': 'Name', });
lyr_Tipoia_11.set('fieldAliases', {'Name': 'Name', });
lyr_Campo_da_Venda_12.set('fieldAliases', {'Name': 'Name', });
lyr_Campo_Limpo_13.set('fieldAliases', {'Name': 'Name', });
lyr_Pium_14.set('fieldAliases', {'Name': 'Name', });
lyr_Cidade_Kemel_15.set('fieldAliases', {'Name': 'Name', });
lyr_Vila_Virginia_16.set('fieldAliases', {'Name': 'Name', });
lyr_Morro_Branco_17.set('fieldAliases', {'Name': 'Name', });
lyr_Pedreira_18.set('fieldAliases', {'Name': 'Name', });
lyr_Estacao_19.set('fieldAliases', {'Name': 'Name', });
lyr_Mandi_20.set('fieldAliases', {'Name': 'Name', });
lyr_Pinheirinho_21.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jaguari_22.set('fieldAliases', {'Name': 'Name', });
lyr_Sitio_Mato_Dentro_23.set('fieldAliases', {'Name': 'Name', });
lyr_Acafrao_24.set('fieldAliases', {'Name': 'Name', });
lyr_Aracare_25.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Josely_26.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Lucinda_27.set('fieldAliases', {'Nome': 'Nome', });
lyr_Aterro_Sanitario_Pajoan_28.set('fieldAliases', {'Nome': 'Nome', });
lyr_Nova_Louzada_29.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Nicea_30.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Pinheirinho_31.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Amazonas_32.set('fieldAliases', {'Nome': 'Nome', });
lyr_Julio_Simoes_33.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Rio_Negro_34.set('fieldAliases', {'Nome': 'Nome', });
lyr_Bairro_Estancia_Guatambu_35.set('fieldAliases', {'Nome': 'Nome', });
lyr_EscolasMun_36.set('fieldAliases', {'Name': 'Name', });
lyr_Arq_Hospitais_37.set('fieldAliases', {'Name': 'Name', });
lyr_Arq_Escolas_Estaduais_38.set('fieldAliases', {'Name': 'Name', });
lyr_Univeritas_39.set('fieldAliases', {'Name': 'Name', 'Endereco': 'Endereco', });
lyr_Limite_2.set('fieldImages', {'Cod_Cetesb': 'Range', 'Cod_ibge': 'Range', 'Nome': 'TextEdit', 'UGRHI': 'Range', 'Nome_ugrhi': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Centro_3.set('fieldImages', {'Name': '', });
lyr_Perobal_4.set('fieldImages', {'Name': '', });
lyr_Rio_Abaixo_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Corredor_6.set('fieldImages', {'Name': '', });
lyr_Cuiab_7.set('fieldImages', {'Name': '', });
lyr_Una_8.set('fieldImages', {'Name': '', });
lyr_Sao_Bento_9.set('fieldImages', {'Name': 'TextEdit', });
lyr_Monte_Belo_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_Tipoia_11.set('fieldImages', {'Name': '', });
lyr_Campo_da_Venda_12.set('fieldImages', {'Name': 'TextEdit', });
lyr_Campo_Limpo_13.set('fieldImages', {'Name': '', });
lyr_Pium_14.set('fieldImages', {'Name': '', });
lyr_Cidade_Kemel_15.set('fieldImages', {'Name': 'TextEdit', });
lyr_Vila_Virginia_16.set('fieldImages', {'Name': 'TextEdit', });
lyr_Morro_Branco_17.set('fieldImages', {'Name': 'TextEdit', });
lyr_Pedreira_18.set('fieldImages', {'Name': '', });
lyr_Estacao_19.set('fieldImages', {'Name': '', });
lyr_Mandi_20.set('fieldImages', {'Name': '', });
lyr_Pinheirinho_21.set('fieldImages', {'Nome': '', });
lyr_Jaguari_22.set('fieldImages', {'Name': '', });
lyr_Sitio_Mato_Dentro_23.set('fieldImages', {'Name': 'TextEdit', });
lyr_Acafrao_24.set('fieldImages', {'Name': '', });
lyr_Aracare_25.set('fieldImages', {'Nome': '', });
lyr_Jardim_Josely_26.set('fieldImages', {'Nome': '', });
lyr_Jardim_Lucinda_27.set('fieldImages', {'Nome': '', });
lyr_Aterro_Sanitario_Pajoan_28.set('fieldImages', {'Nome': '', });
lyr_Nova_Louzada_29.set('fieldImages', {'Nome': '', });
lyr_Jardim_Nicea_30.set('fieldImages', {'Nome': '', });
lyr_Jardim_Pinheirinho_31.set('fieldImages', {'Nome': '', });
lyr_Jardim_Amazonas_32.set('fieldImages', {'Nome': '', });
lyr_Julio_Simoes_33.set('fieldImages', {'Nome': '', });
lyr_Jardim_Rio_Negro_34.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Bairro_Estancia_Guatambu_35.set('fieldImages', {'Nome': '', });
lyr_EscolasMun_36.set('fieldImages', {'Name': 'TextEdit', });
lyr_Arq_Hospitais_37.set('fieldImages', {'Name': 'TextEdit', });
lyr_Arq_Escolas_Estaduais_38.set('fieldImages', {'Name': 'TextEdit', });
lyr_Univeritas_39.set('fieldImages', {'Name': 'TextEdit', 'Endereco': 'TextEdit', });
lyr_Limite_2.set('fieldLabels', {'Cod_Cetesb': 'no label', 'Cod_ibge': 'no label', 'Nome': 'no label', 'UGRHI': 'no label', 'Nome_ugrhi': 'no label', 'AREA_KM2': 'no label', });
lyr_Centro_3.set('fieldLabels', {'Name': 'no label', });
lyr_Perobal_4.set('fieldLabels', {'Name': 'no label', });
lyr_Rio_Abaixo_5.set('fieldLabels', {'Name': 'no label', });
lyr_Corredor_6.set('fieldLabels', {'Name': 'no label', });
lyr_Cuiab_7.set('fieldLabels', {'Name': 'no label', });
lyr_Una_8.set('fieldLabels', {'Name': 'no label', });
lyr_Sao_Bento_9.set('fieldLabels', {'Name': 'no label', });
lyr_Monte_Belo_10.set('fieldLabels', {'Name': 'no label', });
lyr_Tipoia_11.set('fieldLabels', {'Name': 'no label', });
lyr_Campo_da_Venda_12.set('fieldLabels', {'Name': 'no label', });
lyr_Campo_Limpo_13.set('fieldLabels', {'Name': 'no label', });
lyr_Pium_14.set('fieldLabels', {'Name': 'no label', });
lyr_Cidade_Kemel_15.set('fieldLabels', {'Name': 'no label', });
lyr_Vila_Virginia_16.set('fieldLabels', {'Name': 'no label', });
lyr_Morro_Branco_17.set('fieldLabels', {'Name': 'no label', });
lyr_Pedreira_18.set('fieldLabels', {'Name': 'no label', });
lyr_Estacao_19.set('fieldLabels', {'Name': 'no label', });
lyr_Mandi_20.set('fieldLabels', {'Name': 'no label', });
lyr_Pinheirinho_21.set('fieldLabels', {'Nome': 'no label', });
lyr_Jaguari_22.set('fieldLabels', {'Name': 'no label', });
lyr_Sitio_Mato_Dentro_23.set('fieldLabels', {'Name': 'no label', });
lyr_Acafrao_24.set('fieldLabels', {'Name': 'no label', });
lyr_Aracare_25.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Josely_26.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Lucinda_27.set('fieldLabels', {'Nome': 'no label', });
lyr_Aterro_Sanitario_Pajoan_28.set('fieldLabels', {'Nome': 'no label', });
lyr_Nova_Louzada_29.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Nicea_30.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Pinheirinho_31.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Amazonas_32.set('fieldLabels', {'Nome': 'no label', });
lyr_Julio_Simoes_33.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Rio_Negro_34.set('fieldLabels', {'Nome': 'no label', });
lyr_Bairro_Estancia_Guatambu_35.set('fieldLabels', {'Nome': 'no label', });
lyr_EscolasMun_36.set('fieldLabels', {'Name': 'no label', });
lyr_Arq_Hospitais_37.set('fieldLabels', {'Name': 'no label', });
lyr_Arq_Escolas_Estaduais_38.set('fieldLabels', {'Name': 'no label', });
lyr_Univeritas_39.set('fieldLabels', {'Name': 'no label', 'Endereco': 'no label', });
lyr_Univeritas_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});