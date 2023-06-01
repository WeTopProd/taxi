/* eslint-disable no-undef */
import { useEffect } from 'react';
import * as POLYGONS from './polygons.js';
import { useBarmenContext } from '../../pages/Barmen/BarmenContext';

let yandexMapInitailized = false;

export const useYandexMap = () => {
  const { setAddress } = useBarmenContext();

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
          center: [55.75829427489275, 37.83995274502565],
          zoom: 11,
          controls: ['routePanelControl'],
        },
        {
          // searchControlProvider: 'yandex#search'
        },
      );

      const control = myMap.controls.get('routePanelControl');
      let city = 'Москва';
      // Зададим состояние панели для построения машрутов.
      control.routePanel.state.set({
        // Тип маршрутизации.
        type: 'driving',

        // reverseGeocoding: true,

        // Выключим возможность задавать пункт отправления в поле ввода.
        fromEnabled: false,
        // Адрес или координаты пункта отправления.
        from: `${city}, улица Сталеваров, 14к1`,
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
          POLYGONS.POLYGON_250,
        ],
        {
          hintContent: '250 руб.',
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
          POLYGONS.POLYGON_350,
        ],
        {
          hintContent: '350 руб.',
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
          POLYGONS.POLYGON_500,
        ],
        {
          hintContent: '500 руб.',
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

      myPolygon = new ymaps.Polygon(
        [
          // Указываем координаты вершин многоугольника.
          // Координаты вершин внешнего контура.
          POLYGONS.POLYGON_750,
        ],
        {
          hintContent: '750 руб.',
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(243, 113, 209)',
          // Цвет обводки.
          strokeColor: 'rgb(243, 113, 209)',
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
          POLYGONS.POLYGON_1000_1,
        ],
        {
          hintContent: '1000 руб.',
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(237, 69, 67)',
          // Цвет обводки.
          strokeColor: 'rgb(237, 69, 67)',
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
          POLYGONS.POLYGON_1000_2,
        ],
        {
          hintContent: '1000 руб.',
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(237, 69, 67)',
          // Цвет обводки.
          strokeColor: 'rgb(237, 69, 67)',
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
          POLYGONS.POLYGON_1000_3,
        ],
        {
          hintContent: '1000 руб.',
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(237, 69, 67)',
          // Цвет обводки.
          strokeColor: 'rgb(237, 69, 67)',
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
          POLYGONS.POLYGON_1000_4,
        ],
        {
          hintContent: '1000 руб.',
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(237, 69, 67)',
          // Цвет обводки.
          strokeColor: 'rgb(237, 69, 67)',
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
          POLYGONS.POLYGON_1000_5,
        ],
        {
          hintContent: '1000 руб.',
        },
        {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: 'rgb(237, 69, 67)',
          // Цвет обводки.
          strokeColor: 'rgb(237, 69, 67)',
          // Общая прозрачность (как для заливки, так и для обводки).
          opacity: 0.5,
          // Ширина обводки.
          strokeWidth: 2,
        },
      );

      myMap.geoObjects.add(myPolygon);
    }
  }, []);
};
