let myMap;
const init = () => {
    myMap = new ymaps.Map("map", {
        center: [56.187321, 50.396440],
        zoom: 13,
        controls: []
    });
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [56.183690, 50.391270], // координаты точки
            draggable:false,
            iconLayout:'defaul#image',
            iconImageHref:"img/marker.svg",
            iconimageSize:[46,57],
            iconImageOffset:[-35,-52]
        }
    });
    myMap.geoObjects.add(myGeoObject);

    myMap.behaviors.disable('scrollZoom');
}


ymaps.ready(init);