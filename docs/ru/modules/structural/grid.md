# Сетка

Сетка(**`grid`**) - это самый часто используемый механизм в разработке интерфейсов. В силу своей гибкости применение можно ему найти в любом месте приложении. И ее стоит применять в этом месте.

В Dermis сетка способна менять свои характеристики в очень большом диапазоне, что делает ее крайне гибкой.

::: tip Важно понимать!
Использование сетки оправдано только в случаях когда сложность блока не велика и стандартного функционала сетки достаточно для покрытия 100% его поведения.

В случае когда нужно более сложное выравнивание элементов в блоке - сильная модификация сетки не желательна, так как скорее усложнит разработку, чем упростит ее.
:::

## Составные части

Базовый префикс(**`$GRID_PREFIX`**) сетки: `g-`.

Сетка делится на 3 базовый блока и один вспомогательный:

- `row` - Строка.

  Контейнер относительно которого и строится сетка. Управляет ячейками задавая межячеечные отступы, выравнивая ячейки, располагая ячейки.
- `cell` - Ячейка.

  Блок распределения контента.
- `cols` - Колонка(и).

  Блок, который управляет размерами любого элемента(чаще ячейки) в рамках заданного количества занимаемым им колонок.
- `container` - Контейнер.

  Вспомогательный элемент, который создает фиксированного размера область для работы сетки.

  Применяется при наличии сетки внутри, или без оной. Основная цель - ограничение контента по ширине. Также защищает страницу от образования горизонтального скролла в случаях использования сетки на максимальную ширину контента.

## Отзывчивость

Механизм отзывчивости - стандартен. Постфиксы с указанием breakpoint'а вида: `-md`, `-sm` и так далее.

Используется для модификаторов:

- Размера отступов между ячейками/строками: `.g-row--space_{size}`
- Количества колонок занимаемого элементом: `.g-cols--{size}`
- Размера отступов контейнера: `.g-container--space_{size}`
- Размера контейнера: `.g-container--fit_{size}`

## Применение

По умолчанию она делится на 12 колонок `$grid-cols-columns-count`:

::: demo
```html
<template>
  <div class="g-row g-row--appearance_spaced">
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--3"><div class="d-cell">3</div></div>
    <div class="g-cell g-cols g-cols--3"><div class="d-cell">3</div></div>
    <div class="g-cell g-cols g-cols--3"><div class="d-cell">3</div></div>
    <div class="g-cell g-cols g-cols--3"><div class="d-cell">3</div></div>
    <div class="g-cell g-cols g-cols--4"><div class="d-cell">4</div></div>
    <div class="g-cell g-cols g-cols--4"><div class="d-cell">4</div></div>
    <div class="g-cell g-cols g-cols--4"><div class="d-cell">4</div></div>
    <div class="g-cell g-cols g-cols--5"><div class="d-cell">5</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--5"><div class="d-cell">5</div></div>
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">6</div></div>
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">6</div></div>
    <div class="g-cell g-cols g-cols--7"><div class="d-cell">7</div></div>
    <div class="g-cell g-cols g-cols--5"><div class="d-cell">5</div></div>
    <div class="g-cell g-cols g-cols--8"><div class="d-cell">8</div></div>
    <div class="g-cell g-cols g-cols--4"><div class="d-cell">4</div></div>
    <div class="g-cell g-cols g-cols--9"><div class="d-cell">9</div></div>
    <div class="g-cell g-cols g-cols--3"><div class="d-cell">3</div></div>
    <div class="g-cell g-cols g-cols--10"><div class="d-cell">10</div></div>
    <div class="g-cell g-cols g-cols--2"><div class="d-cell">2</div></div>
    <div class="g-cell g-cols g-cols--11"><div class="d-cell">11</div></div>
    <div class="g-cell g-cols g-cols--1"><div class="d-cell">1</div></div>
    <div class="g-cell g-cols g-cols--12"><div class="d-cell">12</div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Межячеечное расстояние

Бывает: `none`, `xs`, `sm`, `md`, `lg`, `xl`.

::: demo
```html
<template>
  <div class="g-row g-row--appearance_spaced g-row--space_none">
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">NONE</div></div>
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">NONE</div></div>
    <div class="g-cell g-cols g-cols--12"><div class="d-cell">NONE</div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

::: demo
```html
<template>
  <div class="g-row g-row--appearance_spaced g-row--space_xs">
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">XS</div></div>
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">XS</div></div>
    <div class="g-cell g-cols g-cols--12"><div class="d-cell">XS</div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

::: demo
```html
<template>
  <div class="g-row g-row--appearance_spaced">
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">MD(обычное)</div></div>
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">MD(обычное)</div></div>
    <div class="g-cell g-cols g-cols--12"><div class="d-cell">MD(обычное)</div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

::: demo
```html
<template>
  <div class="g-row g-row--appearance_spaced g-row--space_xl">
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">XL</div></div>
    <div class="g-cell g-cols g-cols--6"><div class="d-cell">XL</div></div>
    <div class="g-cell g-cols g-cols--12"><div class="d-cell">XL</div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Автоматические колонки

Также есть автоматические колонки, которые способны занимать максимальное и минимальное доступное пространство:

::: demo
```html
<template>
  <div class="g-row g-row--appearance_spaced">
    <div class="g-cell g-cols g-cols--narrow"><div class="d-cell">Narrow</div></div>
    <div class="g-cell g-cols g-cols--auto"><div class="d-cell">Auto</div></div>
    <div class="g-cell g-cols g-cols--narrow"><div class="d-cell">Narrow</div></div>
    <div class="g-cell g-cols g-cols--auto"><div class="d-cell">Auto</div></div>
    <div class="g-cell g-cols g-cols--auto"><div class="d-cell">Auto</div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Смещение

Вне зависимости от того заполнена-ли колонка или нет - она все также будет занимать причитающееся ей пространство, что можно использовать для расстановки пустого пространства вокруг нужных блоков:

::: demo
```html
<template>
  <div class="g-row g-row--space_none">
    <div class="g-cell g-cols g-cols--auto"></div>
    <div class="g-cell g-cols g-cols--narrow"><div class="d-cell">
      Centered
    </div></div>
    <div class="g-cell g-cols g-cols--auto"></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Выравнивание

Легко выравнивать ячейки вертикально:

::: demo
```html
<template>
  <div class="g-row g-row--alignment_center">
    <div class="g-cell g-cols g-cols--4"><div class="d-cell">
      Вертикальное выравнивание по центру
    </div></div>
    <div class="g-cell g-cols g-cols--auto"><div class="d-cell">
      Невысокая ячейка
    </div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

::: demo
```html
<template>
  <div class="g-row g-row--alignment_bottom">
    <div class="g-cell g-cols g-cols--4"><div class="d-cell">
      Вертикальное выравнивание по низу
    </div></div>
    <div class="g-cell g-cols g-cols--auto"><div class="d-cell">
      Невысокая ячейка
    </div></div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Inline

Также сетка может работать как inline элемент, занимая только требуемое пространство:

::: demo
```html
<template>
  <div>
    <div class="g-row g-row--appearance_inline g-row--appearance_nowrap">
      <div class="g-cell g-cols g-cols--auto"><div class="d-cell">Auto</div></div>
      <div class="g-cell g-cols g-cols--narrow"><div class="d-cell">Narrow</div></div>
    </div>
    Некий текст.
  </div>
</template>
<script> export default {}; </script>
```
:::

### Контейнер

::: demo
```html
<template>
  <div class="g-container g-container--fit_sm">
    <div class="g-row">
      <div class="g-cell g-cols g-cols--auto"><div class="d-cell">Auto</div></div>
      <div class="g-cell g-cols g-cols--narrow"><div class="d-cell">Narrow</div></div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Отзывчивый шаблон

::: demo
```html
<template>
  <div class="
    g-container
    g-container--fit_xs-md
    g-container--fit_sm-lg
  ">
    <div class="g-row g-row--appearance_spaced">
      <div class="g-cell g-cols g-cols--12">
          <div class="d-cell">
              <div class="g-row g-row--appearance_spaced">
                  <div class="g-cell g-cols g-cols--narrow">
                      <div class="d-cell">
                          Logo
                      </div>
                  </div>
                  <div class="g-cell g-cols g-cols--auto">
                      <div class="d-cell">Navigation</div>
                  </div>
              </div>
          </div>
      </div>

      <div class="g-cell g-cols g-cols--12">
          <div class="d-cell">
              <div class="g-row g-row--appearance_spaced">
                  <div class="g-cell g-cols g-cols--12 g-cols--3-md">
                      <div class="d-cell">
                          Sidebar
                      </div>
                  </div>
                  <div class="g-cell g-cols g-cols--12 g-cols--9-md">
                      <div class="d-cell">
                          <div class="g-row g-row--appearance_spaced">
                              <div class="g-cell g-cols g-cols--12">
                                  <div class="d-cell">
                                      Content
                                  </div>
                              </div>
                              <div class="g-cell g-cols g-cols--12 g-cols--4-sm">
                                  <div class="d-cell">
                                      Feature
                                  </div>
                              </div>
                              <div class="g-cell g-cols g-cols--12 g-cols--4-sm">
                                  <div class="d-cell">
                                      Feature
                                  </div>
                              </div>
                              <div class="g-cell g-cols g-cols--12 g-cols--4-sm">
                                  <div class="d-cell">
                                      Feature
                                  </div>
                              </div>
                              <div class="g-cell g-cols g-cols--12">
                                  <div class="d-cell">
                                      Content
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="g-cell g-cols g-cols--12">
          <div class="d-cell">
              <div class="g-row g-row--appearance_spaced">
                  <div class="g-cell g-cols g-cols--12 g-cols--4-md">
                      <div class="d-cell">
                          Links
                      </div>
                  </div>
                  <div class="g-cell g-cols g-cols--12 g-cols--4-md">
                      <div class="d-cell">
                          Links
                      </div>
                  </div>
                  <div class="g-cell g-cols g-cols--12 g-cols--4-md">
                      <div class="d-cell">
                          Links
                      </div>
                  </div>
                  <div class="g-cell g-cols g-cols--12">
                      <div class="d-cell">
                          Copyright notice
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
