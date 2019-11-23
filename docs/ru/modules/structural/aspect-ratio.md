# Соотношение сторон

Модуль **`aspect-ratio`** добавляет элемент и миксины для жесткой установки соотношений сторон элемента вне зависимости от контента внутри него.

Переменная **`$aspect-ratio-ratios`** хранит в себе стандартный набор соотношений сторон. По умолчанию: `1 2, 2 3, 3 4, 9 16, 10 16`.

Для каждого правила создается 2 варианта AxB и BxA. Модификатор `1x1` не конфигурируемый и есть всегда.

Каждый `ratio` также поддерживает стандартные адаптивные модификаторы(может применяться в зависимости от размера экрана).

::: demo
```html
<template>
  <figure class="
    ds-aspect-ratio
    ds-aspect-ratio--appearance_cuted
    ds-aspect-ratio--appearance_filled
    ds-aspect-ratio--ratio_16x9-md
    ds-aspect-ratio--ratio_4x3
  ">
    <iframe
      class="ds-aspect-ratio__body"
      src="https://www.youtube.com/embed/wN8_eb3l0mw"
      frameborder="0"
      style="border: 0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </figure>
</template>
<script> export default {}; </script>
```
:::
