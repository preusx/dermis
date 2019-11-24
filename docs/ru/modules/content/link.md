# Ссылки

Модуль **`link`** добавляет стилизацию ссылок в типографике(флаг **`$LINK_USE_IN_TYPE_CONTENT`** по умолчанию включает эту возможность), и отдельный элемент ссылки.

## Примеры

::: demo
```html
<template>
  <div>
    <a class="ds-link" href="javascript:void(0)">Link</a>
    <button class="ds-link" href="javascript:void(0)">Button</button>
  </div>
</template>
<script> export default {}; </script>
```
:::

### В типографике

::: demo
```html
<template>
  <div class="t-content">
    <p>
      Old unsatiable our now but considered <a href="javascript:void(0)">travelling impression</a>. In excuse hardly summer in <a href="javascript:void(0)">basket misery</a>. By rent an part need. At wrong of of <a href="javascript:void(0)">water</a> those linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh shutters do removing reserved wandered an.
    </p>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Состояния

::: demo
```html
<template>
  <div>
    <a class="ds-link" href="javascript:void(0)">Default</a>
    <a class="ds-link is-focused" href="javascript:void(0)">Focused</a>
    <a class="ds-link is-hovered" href="javascript:void(0)">Hover</a>
    <a class="ds-link is-active" href="javascript:void(0)">Active</a>
    <a class="ds-link is-visited" href="javascript:void(0)">Visited</a>
  </div>
</template>
<script> export default {}; </script>
```
:::
