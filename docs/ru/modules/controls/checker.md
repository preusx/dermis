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
  +control-checker-default-states($block: '.d-control-checkbox-example')

  &__
    &label
      &:before
        background-color: var(--theme-relief-6)

      &:after
        display: none
        background-color: var(--theme-relief-1)
        border-bottom: 2px solid var(--theme-relief-1)

  +control-checker-state(checked, $block: '.d-control-checkbox-example')
    &:after
      display: block

  +control-checker-state(indeterminate, $block: '.d-control-checkbox-example')
    &:after
      display: block
      background-color: transparent

  +control-checker--variant_inline($block: '.d-control-checkbox-example')
```

::: demo
```html
<template>
  <div>
    <div>
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline">
        <input class="d-control-checkbox-example__element" type="checkbox" />
        <span class="d-control-checkbox-example__label" />
      </label>
      Обычный чекбокс
    </div>
    <div>
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline">
        <input class="d-control-checkbox-example__element" type="checkbox" checked />
        <span class="d-control-checkbox-example__label" />
      </label>
      Checked чекбокс
    </div>
    <div>
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline is-read-only is-checked">
        <span class="d-control-checkbox-example__label" />
      </label>
      Checked чекбокс только для чтения
    </div>
    <div>
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline">
        <input class="d-control-checkbox-example__element" type="checkbox" :indeterminate.prop="true" />
        <span class="d-control-checkbox-example__label" />
      </label>
      Indeterminate чекбокс
    </div>
    <div>
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline">
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

### Варианты

::: demo
```html
<template>
  <div>
    <div>
      <label class="d-control-checkbox-example">
        <input class="d-control-checkbox-example__element" type="checkbox" />
        <span class="d-control-checkbox-example__label" />
      </label>
      По умолчанию checker ведет себя как блок. В таком виде его нужно отдельно позиционировать относительно контента, например с помощью `ds-inliner` или `g-row`. Размеры его предсказуемы, и управлять им легче.
    </div>
    <div>
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline">
        <input class="d-control-checkbox-example__element" type="checkbox" />
        <span class="d-control-checkbox-example__label" />
      </label>
      Есть у него `--variant_inline` модификатор, который работает как встроенный `ds-inliner`. Такой элемент встраивать в текущий flow элементов, легко, но за счет неизвестной высоты могут быть проблемы когда размеры самого checker'а значительно больше чем контент относительно которого он спозиционирован, например:
      <label class="d-control-checkbox-example d-control-checkbox-example--variant_inline" style="--control-checker-size: 40px">
        <input class="d-control-checkbox-example__element" type="checkbox" />
        <span class="d-control-checkbox-example__label" />
      </label>
      Для добавления этого варианта нужно использовать отдельный `control-checker--variant_inline` миксин, который и добавит требуемую стилизацию в модификатор.
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
