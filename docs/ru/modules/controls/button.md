# Кнопка

Утилита для создания кнопок.

## Примеры

Кнопка со всеми "интерактивными вариациями" может быть сделана крайне легко:

```sass
.d-control-button-tone-example
  +control-box
  +control-focus-behavior
  +control-button-base

  cursor: pointer

  &--styling_primary
    +control-button-styling(theme-primary)

  &--styling_accent
    +control-button-styling(theme-accent)
```

::: demo
```html
<template>
  <div>
    <button type="button" class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_primary
    ">
      <div class="
        d-control-button-tone-example__element
        d-control-button-tone-example__element--primary
      ">
        Button
      </div>
    </button>

    <br/>

    <button type="button" class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_accent
    ">
      <div class="
        d-control-button-tone-example__element
        d-control-button-tone-example__element--primary
      ">
        Button
      </div>
    </button>
  </div>
</template>
<script> export default {}; </script>
```
:::
