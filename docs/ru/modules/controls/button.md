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

    <button type="button" disabled class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_primary
    ">
      <div class="
        d-control-button-tone-example__element
        d-control-button-tone-example__element--primary
      ">
        Button [disabled]
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

### Варианты

Варианты визуального оформления теперь проще сочетать со стилизацией.

#### GHOST

```sass
.d-control-button-tone-example--variant_ghost
  +control-button-variant-ghost

  --control-box-border-width: 2px
```

::: demo
```html
<template>
  <div>
    <button type="button" class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_primary
      d-control-button-tone-example--variant_ghost
    ">
      <div class="
        d-control-button-tone-example__element
        d-control-button-tone-example__element--primary
      ">
        Button
      </div>
    </button>

    <br/>

    <button type="button" disabled class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_primary
      d-control-button-tone-example--variant_ghost
    ">
      <div class="
        d-control-button-tone-example__element
        d-control-button-tone-example__element--primary
      ">
        Button [disabled]
      </div>
    </button>

    <br/>

    <button type="button" class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_accent
      d-control-button-tone-example--variant_ghost
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

#### Text

```sass
.d-control-button-tone-example--variant_text
  +control-button-variant-text
```

::: demo
```html
<template>
  <div>
    <button type="button" class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_primary
      d-control-button-tone-example--variant_text
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
      d-control-button-tone-example--styling_primary
      d-control-button-tone-example--variant_text
      is-disabled
    ">
      <div class="
        d-control-button-tone-example__element
        d-control-button-tone-example__element--primary
      ">
        Button [disabled]
      </div>
    </button>

    <br/>

    <button type="button" class="
      d-control-button-tone-example
      d-control-button-tone-example--styling_accent
      d-control-button-tone-example--variant_text
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
