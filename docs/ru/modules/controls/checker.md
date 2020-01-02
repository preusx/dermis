# Флажок

Утилита для создания элементов-флажков: checkbox, radio, switch, etc.

## API

У блока стилизируемым элементом является только `__label`. По умолчанию стилизация применяется для его псевдоэлеметов: `::before` - это поле флажка(контейнер); `::after` - это непосредственно сам флажок.

### Mixns

- `control-checker` - "Создает" элемент, применяя все стандартные стили к блоку и его элементам.
- `control-checker-default-states` - Простая стилизация состояний по умолчанию.
- `control-checker-state` - Добавление нового состояния элемента.

### Переменные

- `$control-checker-size` - Размер поля флажка.
- `$control-checker-inner-size` - Размер самого флажка.
- `--control-checker-size` - Аналогично выше описанным.
- `--control-checker-inner-size` - Аналогично выше описанным.

## Примеры

Стилизовать подобные блоки используя примеси из этого модуля значительно проще:

```sass
.d-control-checkbox-example
  +control-checker
  +control-checker-default-states

  &__
    &label
      &:before
        background-color: var(--theme-primary-base)

      &:after
        display: none
        background-color: var(--theme-primary-text-inverse)
        border-bottom: 2px solid var(--theme-primary-text-inverse)

  +control-checker-state(checked, $block: '.d-control-checkbox-example')
    &:after
      display: block

  +control-checker-state(indeterminate, $block: '.d-control-checkbox-example')
    &:after
      display: block
      background-color: transparent
```

::: demo
```html
<template>
  <div>
    <div>
      <label class="d-control-checkbox-example">
        <input class="d-control-checkbox-example__element" type="checkbox" />
        <span class="d-control-checkbox-example__label" />
      </label>
      Обычный чекбокс
    </div>
    <div>
      <label class="d-control-checkbox-example">
        <input class="d-control-checkbox-example__element" type="checkbox" checked />
        <span class="d-control-checkbox-example__label" />
      </label>
      Checked чекбокс
    </div>
    <div>
      <label class="d-control-checkbox-example is-read-only is-checked">
        <span class="d-control-checkbox-example__label" />
      </label>
      Checked чекбокс только для чтения
    </div>
    <div>
      <label class="d-control-checkbox-example">
        <input class="d-control-checkbox-example__element" type="checkbox" :indeterminate.prop="true" />
        <span class="d-control-checkbox-example__label" />
      </label>
      Indeterminate чекбокс
    </div>
    <div>
      <label class="d-control-checkbox-example">
        <input class="d-control-checkbox-example__element" type="checkbox" :indeterminate.prop="true" disabled />
        <span class="d-control-checkbox-example__label" />
      </label>
      Indeterminate отключенный чекбокс
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
