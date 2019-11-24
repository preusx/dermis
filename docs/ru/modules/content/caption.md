# Заголовок

Модуль **`caption`** добавляет элемент заголовка/подписи содержимого.

## Примеры комбинаций

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_2">
          Size 2 caption above
        </div>
        <div class="ds-caption ds-caption--size_4 ds-caption--variant_secondary">
          The size 4 secondary caption below
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_3">
          Size 3 caption above
        </div>
        <div class="ds-caption ds-caption--size_5 ds-caption--variant_secondary">
          The size 5 secondary caption below
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_3">
          Size 3 caption <span class="ds-caption ds-caption--size_4 ds-caption--variant_secondary">Smaller size 4 secondary caption</span>
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_uppercase ds-caption--variant_secondary">
          Label:
        </div>
        <div class="ds-caption ds-caption--size_2">
          The size 2 caption
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_3">
          The size 3 caption
        </div>
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_uppercase ds-caption--variant_secondary">
          And a small description below
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_uppercase">
          Label:
        </div>
        <div class="ds-caption ds-caption--size_3">
          The size 3 caption
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_uppercase">
          Label:
        </div>
        <div class="ds-caption ds-caption--size_3 ds-caption--variant_uppercase">
          The size 3 caption
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_3 ds-caption--variant_uppercase">
          The size 3 caption
        </div>
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_uppercase">
          With subcaption below
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Вариации

### Размеры

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="t-words t-words--fill_sm ds-caption ds-caption--size_1">
          Size 1 long long caption line that should wrap anyway
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="t-words t-words--fill_sm ds-caption ds-caption--size_2">
          Size 2 long long caption line that should wrap anyway
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="t-words t-words--fill_sm ds-caption ds-caption--size_3">
          Size 3 long long caption line that should wrap anyway
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="t-words t-words--fill_sm ds-caption ds-caption--size_4">
          Size 4 long long caption line that should wrap anyway
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="t-words t-words--fill_sm ds-caption ds-caption--size_5">
          Size 5 long long caption line that should wrap anyway
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="t-words t-words--fill_sm ds-caption ds-caption--size_6">
          Size 6 long long caption line that should wrap anyway
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Подзаголовок

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_1 ds-caption--variant_secondary">
          Size 1 secondary caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_2 ds-caption--variant_secondary">
          Size 2 secondary caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_3 ds-caption--variant_secondary">
          Size 3 secondary caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_4 ds-caption--variant_secondary">
          Size 4 secondary caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_5 ds-caption--variant_secondary">
          Size 5 secondary caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_secondary">
          Size 6 secondary caption line
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Uppercased заголовок

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_1 ds-caption--variant_uppercase">
          Size 1 uppercase caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_2 ds-caption--variant_uppercase">
          Size 2 uppercase caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_3 ds-caption--variant_uppercase">
          Size 3 uppercase caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_4 ds-caption--variant_uppercase">
          Size 4 uppercase caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_5 ds-caption--variant_uppercase">
          Size 5 uppercase caption line
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="ds-caption ds-caption--size_6 ds-caption--variant_uppercase">
          Size 6 uppercase caption line
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
