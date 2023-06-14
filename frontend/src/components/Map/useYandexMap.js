/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useBarmanContext } from '../../pages/Barman/BarmanContext';
import { BCF_INFO } from './BCF_INFO';

let yandexMapInitailized = false;

const zonesPrices = BCF_INFO.zonePrices;
const polygons = BCF_INFO.POLYGONS;
const { map_center, map_address, map_city } = BCF_INFO;

export const useYandexMap = () => {
  // const poly = polygons.POLYGON_ZONE3.map((zone) => {
  //   return zone.reverse();
  // });
  //
  // const json = JSON.stringify(poly);
  // console.log(json);

  const { setAddress } = useBarmanContext();

  useEffect(() => {
    if (yandexMapInitailized === true) {
      return;
    }

    yandexMapInitailized = true;

    ymaps.ready(init);

    function init() {
      const myMap = new ymaps.Map(
        'map',
        {
          center: map_center,
          zoom: 11,
          controls: ['routePanelControl'],
        },
        {
          // searchControlProvider: 'yandex#search'
        },
      );

      const control = myMap.controls.get('routePanelControl');
      // Зададим состояние панели для построения машрутов.
      control.routePanel.state.set({
        // Тип маршрутизации.
        type: 'driving',

        // reverseGeocoding: true,

        // Выключим возможность задавать пункт отправления в поле ввода.
        fromEnabled: false,
        // Адрес или координаты пункта отправления.
        from: `${map_city}, ${map_address}`,
        // Включим возможность задавать пункт назначения в поле ввода.
        toEnabled: true,
        // Адрес или координаты пункта назначения.
        to: ` `,
      });
      control.routePanel.options.set({
        // reverseGeocoding: true,

        types: {
          auto: true,
        },
      });

      // Создаем кнопку, с помощью которой пользователи смогут получить начальную и конечную точки маршрута.
      const getPointsButton = new ymaps.control.Button({
        data: {
          content: 'Получить адрес',
          title: 'Получить адрес',
        },
        options: {
          selectOnClick: false,
          maxWidth: 190,
        },
      });

      // Объявляем обработчик для кнопки.
      getPointsButton.events.add('click', function () {
        // $("#input1").val(control.routePanel.state.get('from'));

        // $("#address").val(control.routePanel.state.get('to'));
        setAddress(control.routePanel.state.get('to'));
      });

      myMap.controls.add(getPointsButton);

      let myPolygon = new ymaps.Polygon(
        [
          // Указываем координаты вершин многоугольника.
          // Координаты вершин внешнего контура.
          polygons.POLYGON_ZONE1,
        ],
        {
          hintContent: `${zonesPrices[0]} руб.`,
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(255, 210, 30)',
          // Цвет обводки.
          strokeColor: 'rgb(255, 210, 30)',
          // Общая прозрачность (как для заливки, так и для обводки).
          opacity: 0.5,
          // Ширина обводки.
          strokeWidth: 2,
        },
      );
      myMap.geoObjects.add(myPolygon);

      // Создаем многоугольник, используя вспомогательный класс Polygon.
      myPolygon = new ymaps.Polygon(
        [
          // Указываем координаты вершин многоугольника.
          // Координаты вершин внешнего контура.
          polygons.POLYGON_ZONE2,
        ],
        {
          hintContent: `${zonesPrices[1]} руб.`,
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(27, 173, 3)',
          // Цвет обводки.
          strokeColor: 'rgb(27, 173, 3)',
          // Общая прозрачность (как для заливки, так и для обводки).
          opacity: 0.5,
          // Ширина обводки.
          strokeWidth: 2,
        },
      );

      myMap.geoObjects.add(myPolygon);

      myPolygon = new ymaps.Polygon(
        [
          // Указываем координаты вершин многоугольника.
          // Координаты вершин внешнего контура.
          polygons.POLYGON_ZONE3,
        ],
        {
          hintContent: `${zonesPrices[2]} руб.`,
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(23, 123, 201)',
          // Цвет обводки.
          strokeColor: 'rgb(23, 123, 201)',
          // Общая прозрачность (как для заливки, так и для обводки).
          opacity: 0.5,
          // Ширина обводки.
          strokeWidth: 2,
        },
      );

      myMap.geoObjects.add(myPolygon);

      // myPolygon = new ymaps.Polygon(
      //   [
      //     // Указываем координаты вершин многоугольника.
      //     // Координаты вершин внешнего контура.
      //     polygons.POLYGON_ZONE4,
      //   ],
      //   {
      //     hintContent: `${zonesPrices[3]} руб.`,
      //   },
      //   {
      //     // Задаем опции геообъекта.
      //     // Цвет заливки.
      //     fillColor: 'rgb(243, 113, 209)',
      //     // Цвет обводки.
      //     strokeColor: 'rgb(243, 113, 209)',
      //     // Общая прозрачность (как для заливки, так и для обводки).
      //     opacity: 0.5,
      //     // Ширина обводки.
      //     strokeWidth: 2,
      //   },
      // );
      //
      // myMap.geoObjects.add(myPolygon);
      //
      // myPolygon = new ymaps.Polygon(
      //   [
      //     // Указываем координаты вершин многоугольника.
      //     // Координаты вершин внешнего контура.
      //     polygons.POLYGON_ZONE5_1,
      //   ],
      //   {
      //     hintContent: `${zonesPrices[4]} руб.`,
      //   },
      //   {
      //     // Задаем опции геообъекта.
      //     // Цвет заливки.
      //     fillColor: 'rgb(237, 69, 67)',
      //     // Цвет обводки.
      //     strokeColor: 'rgb(237, 69, 67)',
      //     // Общая прозрачность (как для заливки, так и для обводки).
      //     opacity: 0.5,
      //     // Ширина обводки.
      //     strokeWidth: 2,
      //   },
      // );
      //
      // myMap.geoObjects.add(myPolygon);
      //
      // myPolygon = new ymaps.Polygon(
      //   [
      //     // Указываем координаты вершин многоугольника.
      //     // Координаты вершин внешнего контура.
      //     polygons.POLYGON_ZONE5_2,
      //   ],
      //   {
      //     hintContent: `${zonesPrices[4]} руб.`,
      //   },
      //   {
      //     // Задаем опции геообъекта.
      //     // Цвет заливки.
      //     fillColor: 'rgb(237, 69, 67)',
      //     // Цвет обводки.
      //     strokeColor: 'rgb(237, 69, 67)',
      //     // Общая прозрачность (как для заливки, так и для обводки).
      //     opacity: 0.5,
      //     // Ширина обводки.
      //     strokeWidth: 2,
      //   },
      // );
      //
      // myMap.geoObjects.add(myPolygon);
      //
      // myPolygon = new ymaps.Polygon(
      //   [
      //     // Указываем координаты вершин многоугольника.
      //     // Координаты вершин внешнего контура.
      //     polygons.POLYGON_ZONE5_3,
      //   ],
      //   {
      //     hintContent: `${zonesPrices[4]} руб.`,
      //   },
      //   {
      //     // Задаем опции геообъекта.
      //     // Цвет заливки.
      //     fillColor: 'rgb(237, 69, 67)',
      //     // Цвет обводки.
      //     strokeColor: 'rgb(237, 69, 67)',
      //     // Общая прозрачность (как для заливки, так и для обводки).
      //     opacity: 0.5,
      //     // Ширина обводки.
      //     strokeWidth: 2,
      //   },
      // );
      //
      // myMap.geoObjects.add(myPolygon);
      //
      // myPolygon = new ymaps.Polygon(
      //   [
      //     // Указываем координаты вершин многоугольника.
      //     // Координаты вершин внешнего контура.
      //     polygons.POLYGON_ZONE5_4,
      //   ],
      //   {
      //     hintContent: `${zonesPrices[4]} руб.`,
      //   },
      //   {
      //     // Задаем опции геообъекта.
      //     // Цвет заливки.
      //     fillColor: 'rgb(237, 69, 67)',
      //     // Цвет обводки.
      //     strokeColor: 'rgb(237, 69, 67)',
      //     // Общая прозрачность (как для заливки, так и для обводки).
      //     opacity: 0.5,
      //     // Ширина обводки.
      //     strokeWidth: 2,
      //   },
      // );
      //
      // myMap.geoObjects.add(myPolygon);
      //
      // myPolygon = new ymaps.Polygon(
      //   [
      //     // Указываем координаты вершин многоугольника.
      //     // Координаты вершин внешнего контура.
      //     polygons.POLYGON_ZONE5_5,
      //   ],
      //   {
      //     hintContent: `${zonesPrices[4]} руб.`,
      //   },
      //   {
      //     // Задаем опции геообъекта.
      //     // Цвет заливки.
      //     fillColor: 'rgb(237, 69, 67)',
      //     // Цвет обводки.
      //     strokeColor: 'rgb(237, 69, 67)',
      //     // Общая прозрачность (как для заливки, так и для обводки).
      //     opacity: 0.5,
      //     // Ширина обводки.
      //     strokeWidth: 2,
      //   },
      // );
      //
      // myMap.geoObjects.add(myPolygon);
    }
  });
};
