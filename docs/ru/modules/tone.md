# Цвет

**`tone`** - Библиотека работы с цветом в проекте. Это набор утилит и базовая тема для работы.

Генерация темы достаточно ресурсоемкая для препроцессора, поэтому ее можно отменить с помощью флага: **`$TONE_GENERATE_THEME`**. По умолчанию тема ганерируется. Основную нагрузку несет в себе генерация цветовой палитры. Этот флаг это поведение отключит **`$TONE_GENERATE_PALETTES`**, но тема генерируется из предоставленной палитры. Поэтому, если хотите оставить генерацию темы - нужно будет вручную описать базовую палитру.

На основе базовой темы будут строится множество других компонентов.

## Миксины

#### `+tone-theme-apply($theme-map)`

Заменяет переменные `var(--theme-{name})` на существующие в `$theme-map` значения.

#### `+tone-color-palette-fill-gaps($colors-map, $specs: $TONE_GAPS_FILLER_SPECS)`

- `$colors-map` - Существующая у вас неполная палитра. На основании ее, и дополнительных настроек - пустые места точек палитры(`$TONE_PALETTE_MARKS`) будут заполнены сгенерированными цветами.
- `$specs` - Это map настроек генерации палитры.

Из этой, неполной, палитры:

```scss
$some-palette: tone-color-palette-fill-gaps((
  10: #d0e2ff,
  50: #1976e1,
));
```

В итоге получится:

```scss
$some-palette: : (
  0: #fdfeff,
  5: #e7f0ff,
  10: #d0e2ff,
  20: #a2c7f8,
  30: #75acf0,
  40: #4791e9,
  50: #1976e1,
  60: #1665c2,
  70: #1255a2,
  80: #0f4483,
  90: #0b3463
  100: #082344,
);
```

#### `+tone-color-palette-range($marks, $specs: $TONE_DEFAULT_SPECS)`

Генерирует палитру в рамках установленных в `$specs` диапазонов значений hue, brightness, saturation.

- `$marks` - Это точки интенсивности цветов в порядке следования от самого незаметного - до самого темного. Передавайте переменную `$TONE_PALETTE_MARKS` - это стандартный набор "точек".
- `$specs` - Это map настроек генерации палитры. Он будет "слит" с базовыми(`$TONE_DEFAULT_SPECS`) для получения новой палитры цветов.

Для генерации различных цветов по большому счету достаточно указать hue-range:

```scss
// Эта-же настройка генератора используется
// в стандартной палитре для генерации
// голубого цвета.
$some-palette: tone-color-palette-range(
  $TONE_PALETTE_MARKS,
  (hue-range: 220 212)
);
```

И выйдет:

```scss
$some-palette: (
  0: #f2f8ff,
  5: #d6e9ff,
  10: #bbdafe,
  20: #88befa,
  30: #5ca3f4
  40: #378bec,
  50: #1976e1,
  60: #0264d4,
  70: #0055b7,
  80: #00499c,
  90: #003e85
  100: #003470
);
```

## Тема

С помощью использования темы в работе - мы поддерживаем интерфейс консистентным. Поведение пользователя более предсказуемо, визуальное отображение элементов идентично друг другу, поддержка/переработка элементов визуально становиться значительно легче при использовании общего стиля.

Первичная проработка элементов дольше. Поддержка и переиспользование - значительно легче.

По умолчанию тема включает только базовые цвета: Рельефа и Текста. Остальные - на ваше рассуждение.

::: demo
```html
<template>
  <div class="d-theme-environment">
    <div class="g-row g-row--appearance_spaced">
      <div class="g-cell g-cols g-cols--12">
          <div class="t-content">
          <h2>Рельеф(слой 1)</h2>
          <p>
            С помощью использования темы в работе - мы поддерживаем интерфейс консистентным.
          </p>
            <h2>2 уровень <small class="d-theme-relief__text d-theme-relief__text--2">Облегченная версия текста</small></h2>
            <p>2 уровень <small class="d-theme-relief__text d-theme-relief__text--2">Облегченная версия текста</small></p>
            <h2>3 уровень <small class="d-theme-relief__text d-theme-relief__text--3">Облегченная версия текста</small></h2>
            <p>3 уровень <small class="d-theme-relief__text d-theme-relief__text--3">Облегченная версия текста</small></p>
            <h2>4 уровень <small class="d-theme-relief__text d-theme-relief__text--4">Облегченная версия текста</small></h2>
            <p>4 уровень <small class="d-theme-relief__text d-theme-relief__text--4">Облегченная версия текста</small></p>
            <h2>5 уровень <small class="d-theme-relief__text d-theme-relief__text--5">Облегченная версия текста</small></h2>
            <p>5 уровень <small class="d-theme-relief__text d-theme-relief__text--5">Облегченная версия текста</small></p>
            <h2>6 уровень <small class="d-theme-relief__text d-theme-relief__text--6">Облегченная версия текста</small></h2>
            <p>6 уровень <small class="d-theme-relief__text d-theme-relief__text--6">Облегченная версия текста</small></p>
        </div>

        <div class="d-theme-relief">
          <div class="t-content">
            <h2>Рельеф(слой 2)</h2>
            <p>
              С помощью использования темы в работе - мы поддерживаем интерфейс консистентным.
            </p>
              <h2>2 уровень <small class="d-theme-relief__text d-theme-relief__text--2">Облегченная версия текста</small></h2>
              <p>2 уровень <small class="d-theme-relief__text d-theme-relief__text--2">Облегченная версия текста</small></p>
              <h2>3 уровень <small class="d-theme-relief__text d-theme-relief__text--3">Облегченная версия текста</small></h2>
              <p>3 уровень <small class="d-theme-relief__text d-theme-relief__text--3">Облегченная версия текста</small></p>
              <h2>4 уровень <small class="d-theme-relief__text d-theme-relief__text--4">Облегченная версия текста</small></h2>
              <p>4 уровень <small class="d-theme-relief__text d-theme-relief__text--4">Облегченная версия текста</small></p>
              <h2>5 уровень <small class="d-theme-relief__text d-theme-relief__text--5">Облегченная версия текста</small></h2>
              <p>5 уровень <small class="d-theme-relief__text d-theme-relief__text--5">Облегченная версия текста</small></p>
              <h2>6 уровень <small class="d-theme-relief__text d-theme-relief__text--6">Облегченная версия текста</small></h2>
              <p>6 уровень <small class="d-theme-relief__text d-theme-relief__text--6">Облегченная версия текста</small></p>
          </div>
          <div class="d-theme-relief__layer d-theme-relief__layer--3">Слой 3</div>
          <div class="d-theme-relief__layer d-theme-relief__layer--4">Слой 4</div>
          <div class="d-theme-relief__layer d-theme-relief__layer--5">Слой 5</div>
          <div class="d-theme-relief__layer d-theme-relief__layer--6">Слой 6</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Цветовая палитра

::: demo
```html
<template>
  <div>
    <div class="g-row g-row--appearance_offset g-row--space_none">
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Red</small></div>
        <div class="d-palette-bg d-palette-bg--red_0">0</div>
        <div class="d-palette-bg d-palette-bg--red_5">5</div>
        <div class="d-palette-bg d-palette-bg--red_10">10</div>
        <div class="d-palette-bg d-palette-bg--red_20">20</div>
        <div class="d-palette-bg d-palette-bg--red_30">30</div>
        <div class="d-palette-bg d-palette-bg--red_40">40</div>
        <div class="d-palette-bg d-palette-bg--red_50">50</div>
        <div class="d-palette-bg d-palette-bg--red_60">60</div>
        <div class="d-palette-bg d-palette-bg--red_70">70</div>
        <div class="d-palette-bg d-palette-bg--red_80">80</div>
        <div class="d-palette-bg d-palette-bg--red_90">90</div>
        <div class="d-palette-bg d-palette-bg--red_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Orange</small></div>
        <div class="d-palette-bg d-palette-bg--orange_0">0</div>
        <div class="d-palette-bg d-palette-bg--orange_5">5</div>
        <div class="d-palette-bg d-palette-bg--orange_10">10</div>
        <div class="d-palette-bg d-palette-bg--orange_20">20</div>
        <div class="d-palette-bg d-palette-bg--orange_30">30</div>
        <div class="d-palette-bg d-palette-bg--orange_40">40</div>
        <div class="d-palette-bg d-palette-bg--orange_50">50</div>
        <div class="d-palette-bg d-palette-bg--orange_60">60</div>
        <div class="d-palette-bg d-palette-bg--orange_70">70</div>
        <div class="d-palette-bg d-palette-bg--orange_80">80</div>
        <div class="d-palette-bg d-palette-bg--orange_90">90</div>
        <div class="d-palette-bg d-palette-bg--orange_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Yellow</small></div>
        <div class="d-palette-bg d-palette-bg--yellow_0">0</div>
        <div class="d-palette-bg d-palette-bg--yellow_5">5</div>
        <div class="d-palette-bg d-palette-bg--yellow_10">10</div>
        <div class="d-palette-bg d-palette-bg--yellow_20">20</div>
        <div class="d-palette-bg d-palette-bg--yellow_30">30</div>
        <div class="d-palette-bg d-palette-bg--yellow_40">40</div>
        <div class="d-palette-bg d-palette-bg--yellow_50">50</div>
        <div class="d-palette-bg d-palette-bg--yellow_60">60</div>
        <div class="d-palette-bg d-palette-bg--yellow_70">70</div>
        <div class="d-palette-bg d-palette-bg--yellow_80">80</div>
        <div class="d-palette-bg d-palette-bg--yellow_90">90</div>
        <div class="d-palette-bg d-palette-bg--yellow_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Lite-green</small></div>
        <div class="d-palette-bg d-palette-bg--lite-green_0">0</div>
        <div class="d-palette-bg d-palette-bg--lite-green_5">5</div>
        <div class="d-palette-bg d-palette-bg--lite-green_10">10</div>
        <div class="d-palette-bg d-palette-bg--lite-green_20">20</div>
        <div class="d-palette-bg d-palette-bg--lite-green_30">30</div>
        <div class="d-palette-bg d-palette-bg--lite-green_40">40</div>
        <div class="d-palette-bg d-palette-bg--lite-green_50">50</div>
        <div class="d-palette-bg d-palette-bg--lite-green_60">60</div>
        <div class="d-palette-bg d-palette-bg--lite-green_70">70</div>
        <div class="d-palette-bg d-palette-bg--lite-green_80">80</div>
        <div class="d-palette-bg d-palette-bg--lite-green_90">90</div>
        <div class="d-palette-bg d-palette-bg--lite-green_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Green</small></div>
        <div class="d-palette-bg d-palette-bg--green_0">0</div>
        <div class="d-palette-bg d-palette-bg--green_5">5</div>
        <div class="d-palette-bg d-palette-bg--green_10">10</div>
        <div class="d-palette-bg d-palette-bg--green_20">20</div>
        <div class="d-palette-bg d-palette-bg--green_30">30</div>
        <div class="d-palette-bg d-palette-bg--green_40">40</div>
        <div class="d-palette-bg d-palette-bg--green_50">50</div>
        <div class="d-palette-bg d-palette-bg--green_60">60</div>
        <div class="d-palette-bg d-palette-bg--green_70">70</div>
        <div class="d-palette-bg d-palette-bg--green_80">80</div>
        <div class="d-palette-bg d-palette-bg--green_90">90</div>
        <div class="d-palette-bg d-palette-bg--green_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Turquoise</small></div>
        <div class="d-palette-bg d-palette-bg--turquoise_0">0</div>
        <div class="d-palette-bg d-palette-bg--turquoise_5">5</div>
        <div class="d-palette-bg d-palette-bg--turquoise_10">10</div>
        <div class="d-palette-bg d-palette-bg--turquoise_20">20</div>
        <div class="d-palette-bg d-palette-bg--turquoise_30">30</div>
        <div class="d-palette-bg d-palette-bg--turquoise_40">40</div>
        <div class="d-palette-bg d-palette-bg--turquoise_50">50</div>
        <div class="d-palette-bg d-palette-bg--turquoise_60">60</div>
        <div class="d-palette-bg d-palette-bg--turquoise_70">70</div>
        <div class="d-palette-bg d-palette-bg--turquoise_80">80</div>
        <div class="d-palette-bg d-palette-bg--turquoise_90">90</div>
        <div class="d-palette-bg d-palette-bg--turquoise_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Cyan</small></div>
        <div class="d-palette-bg d-palette-bg--cyan_0">0</div>
        <div class="d-palette-bg d-palette-bg--cyan_5">5</div>
        <div class="d-palette-bg d-palette-bg--cyan_10">10</div>
        <div class="d-palette-bg d-palette-bg--cyan_20">20</div>
        <div class="d-palette-bg d-palette-bg--cyan_30">30</div>
        <div class="d-palette-bg d-palette-bg--cyan_40">40</div>
        <div class="d-palette-bg d-palette-bg--cyan_50">50</div>
        <div class="d-palette-bg d-palette-bg--cyan_60">60</div>
        <div class="d-palette-bg d-palette-bg--cyan_70">70</div>
        <div class="d-palette-bg d-palette-bg--cyan_80">80</div>
        <div class="d-palette-bg d-palette-bg--cyan_90">90</div>
        <div class="d-palette-bg d-palette-bg--cyan_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Blue</small></div>
        <div class="d-palette-bg d-palette-bg--blue_0">0</div>
        <div class="d-palette-bg d-palette-bg--blue_5">5</div>
        <div class="d-palette-bg d-palette-bg--blue_10">10</div>
        <div class="d-palette-bg d-palette-bg--blue_20">20</div>
        <div class="d-palette-bg d-palette-bg--blue_30">30</div>
        <div class="d-palette-bg d-palette-bg--blue_40">40</div>
        <div class="d-palette-bg d-palette-bg--blue_50">50</div>
        <div class="d-palette-bg d-palette-bg--blue_60">60</div>
        <div class="d-palette-bg d-palette-bg--blue_70">70</div>
        <div class="d-palette-bg d-palette-bg--blue_80">80</div>
        <div class="d-palette-bg d-palette-bg--blue_90">90</div>
        <div class="d-palette-bg d-palette-bg--blue_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Deep-blue</small></div>
        <div class="d-palette-bg d-palette-bg--deep-blue_0">0</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_5">5</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_10">10</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_20">20</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_30">30</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_40">40</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_50">50</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_60">60</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_70">70</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_80">80</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_90">90</div>
        <div class="d-palette-bg d-palette-bg--deep-blue_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Purple</small></div>
        <div class="d-palette-bg d-palette-bg--purple_0">0</div>
        <div class="d-palette-bg d-palette-bg--purple_5">5</div>
        <div class="d-palette-bg d-palette-bg--purple_10">10</div>
        <div class="d-palette-bg d-palette-bg--purple_20">20</div>
        <div class="d-palette-bg d-palette-bg--purple_30">30</div>
        <div class="d-palette-bg d-palette-bg--purple_40">40</div>
        <div class="d-palette-bg d-palette-bg--purple_50">50</div>
        <div class="d-palette-bg d-palette-bg--purple_60">60</div>
        <div class="d-palette-bg d-palette-bg--purple_70">70</div>
        <div class="d-palette-bg d-palette-bg--purple_80">80</div>
        <div class="d-palette-bg d-palette-bg--purple_90">90</div>
        <div class="d-palette-bg d-palette-bg--purple_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Magenta</small></div>
        <div class="d-palette-bg d-palette-bg--magenta_0">0</div>
        <div class="d-palette-bg d-palette-bg--magenta_5">5</div>
        <div class="d-palette-bg d-palette-bg--magenta_10">10</div>
        <div class="d-palette-bg d-palette-bg--magenta_20">20</div>
        <div class="d-palette-bg d-palette-bg--magenta_30">30</div>
        <div class="d-palette-bg d-palette-bg--magenta_40">40</div>
        <div class="d-palette-bg d-palette-bg--magenta_50">50</div>
        <div class="d-palette-bg d-palette-bg--magenta_60">60</div>
        <div class="d-palette-bg d-palette-bg--magenta_70">70</div>
        <div class="d-palette-bg d-palette-bg--magenta_80">80</div>
        <div class="d-palette-bg d-palette-bg--magenta_90">90</div>
        <div class="d-palette-bg d-palette-bg--magenta_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--4 g-cols--3-sm g-cols--2-md">
        <div class="d-palette-bg"><small>Pink</small></div>
        <div class="d-palette-bg d-palette-bg--pink_0">0</div>
        <div class="d-palette-bg d-palette-bg--pink_5">5</div>
        <div class="d-palette-bg d-palette-bg--pink_10">10</div>
        <div class="d-palette-bg d-palette-bg--pink_20">20</div>
        <div class="d-palette-bg d-palette-bg--pink_30">30</div>
        <div class="d-palette-bg d-palette-bg--pink_40">40</div>
        <div class="d-palette-bg d-palette-bg--pink_50">50</div>
        <div class="d-palette-bg d-palette-bg--pink_60">60</div>
        <div class="d-palette-bg d-palette-bg--pink_70">70</div>
        <div class="d-palette-bg d-palette-bg--pink_80">80</div>
        <div class="d-palette-bg d-palette-bg--pink_90">90</div>
        <div class="d-palette-bg d-palette-bg--pink_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--6">
        <div class="d-palette-bg">Grey</div>
        <div class="d-palette-bg d-palette-bg--grey_0">0</div>
        <div class="d-palette-bg d-palette-bg--grey_5">5</div>
        <div class="d-palette-bg d-palette-bg--grey_10">10</div>
        <div class="d-palette-bg d-palette-bg--grey_20">20</div>
        <div class="d-palette-bg d-palette-bg--grey_30">30</div>
        <div class="d-palette-bg d-palette-bg--grey_40">40</div>
        <div class="d-palette-bg d-palette-bg--grey_50">50</div>
        <div class="d-palette-bg d-palette-bg--grey_60">60</div>
        <div class="d-palette-bg d-palette-bg--grey_70">70</div>
        <div class="d-palette-bg d-palette-bg--grey_80">80</div>
        <div class="d-palette-bg d-palette-bg--grey_90">90</div>
        <div class="d-palette-bg d-palette-bg--grey_100">100</div>
      </div>
      <div class="g-cell g-cols g-cols--6">
        <div class="d-palette-bg">Cold-grey</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_0">0</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_5">5</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_10">10</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_20">20</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_30">30</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_40">40</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_50">50</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_60">60</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_70">70</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_80">80</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_90">90</div>
        <div class="d-palette-bg d-palette-bg--cold-grey_100">100</div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
