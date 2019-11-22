# Размерность

**`rut`** - Это отдельный модуль который помогает устанавливать модульные размеры в приложении.

Базовый размер, к которому приводятся все остальные - это `$rut-base`, который по умолчанию составляет `4px`.

Для простоты вычисления размеров в рамках проекта можно использовать встроенные mixin'ы: `rut-ceil`, `rut-floor`, `rut-round`. Которые рассчитывают модульный размер из переданного.

## Пространство интерфейсных элементов

На базе `$rut-base` размера построены переменные `$space-{size}` размер которых варьируется от 1го до 10ти. Для размеров есть удобочитаемые алиасы: `xs`, `sm`, `md`, `lg`, `xl`.

Эти переменные доступны и в виде css properties: `--space-{size}`.

### Именованные

::: demo
```html
<template>
  <div>
    <div class="g-row g-row--appearance_spaced">
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--named_xs">
          <div class="t-content"><h4>Space (xs)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--named_sm">
          <div class="t-content"><h4>Space (sm)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--named_md">
          <div class="t-content"><h4>Space (md)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--named_lg">
          <div class="t-content"><h4>Space (lg)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--named_xl">
          <div class="t-content"><h4>Space (xl)</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Номерные

::: demo
```html
<template>
  <div>
    <div class="g-row g-row--appearance_spaced">
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_1">
          <div class="t-content"><h4>Space (1)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_2">
          <div class="t-content"><h4>Space (2)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_3">
          <div class="t-content"><h4>Space (3)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_4">
          <div class="t-content"><h4>Space (4)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_5">
          <div class="t-content"><h4>Space (5)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_6">
          <div class="t-content"><h4>Space (6)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_7">
          <div class="t-content"><h4>Space (7)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_8">
          <div class="t-content"><h4>Space (8)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_9">
          <div class="t-content"><h4>Space (9)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-space-display d-space-display--numbered_10">
          <div class="t-content"><h4>Space (10)</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Пространство элементов шаблона

Для разметки пространства шалбона используем переменные `$layout-{size}` размер которых варьируется от 1го до 10ти. Для размеров есть удобочитаемые алиасы: `xs`, `sm`, `md`, `lg`, `xl`.

Эти переменные доступны и в виде css properties: `--layout-{size}`.

### Именованные

::: demo
```html
<template>
  <div>
    <div class="g-row g-row--appearance_spaced">
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--named_xs">
          <div class="t-content"><h4>Layout (xs)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--named_sm">
          <div class="t-content"><h4>Layout (sm)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--named_md">
          <div class="t-content"><h4>Layout (md)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--named_lg">
          <div class="t-content"><h4>Layout (lg)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--named_xl">
          <div class="t-content"><h4>Layout (xl)</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Номерные

::: demo
```html
<template>
  <div>
    <div class="g-row g-row--appearance_spaced">
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_1">
          <div class="t-content"><h4>Layout (1)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_2">
          <div class="t-content"><h4>Layout (2)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_3">
          <div class="t-content"><h4>Layout (3)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_4">
          <div class="t-content"><h4>Layout (4)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_5">
          <div class="t-content"><h4>Layout (5)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_6">
          <div class="t-content"><h4>Layout (6)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_7">
          <div class="t-content"><h4>Layout (7)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_8">
          <div class="t-content"><h4>Layout (8)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_9">
          <div class="t-content"><h4>Layout (9)</h4></div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--12 g-cols--3-sm">
        <div class="d-layout-display d-layout-display--numbered_10">
          <div class="t-content"><h4>Layout (10)</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
