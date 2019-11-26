# Панель

Модуль **`panel`** добавляет элемент для оформления панелей интерфейса.

## Базовая

::: demo
```html
<template>
  <div>
    <section class="
      ds-panel
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Внутренний/внешний отступ

::: demo
```html
<template>
  <div>
    <section class="
      ds-panel
    ">
      <div class="ds-panel__element ds-panel__element--offset_top ds-panel__element--offset_horizontal ds-panel__element--indent_inside">
        <div class="t-content">
          <h4>Внутренний (.ds-panel__element--indent_inside)</h4>
          <p>
            Элемент с внутренним отсупом.
          </p>
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <h4>Внешний(по умолчанию, .ds-panel__element--indent_outside)</h4>
          <p>
            Элемент с внешним отсупом.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Размеры

::: demo
```html
<template>
  <div class="d-panel-example-container">
    <section class="
      ds-panel
      ds-panel--space_none
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
    <section class="
      ds-panel
      ds-panel--space_xs
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
    <section class="
      ds-panel
      ds-panel--space_sm
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
    <section class="
      ds-panel
      ds-panel--space_md
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
    <section class="
      ds-panel
      ds-panel--space_lg
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
    <section class="
      ds-panel
      ds-panel--space_xl
    ">
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content"><h4>Section</h4></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Отступы элементов

С помощью панели можно соорудить, например карточку-превью поста с видео контентом.

::: demo
```html
<template>
  <div class="d-panel-example-container">
    <section class="
      ds-panel
    ">
      <div class="ds-panel__element">
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
      </div>
      <div class="ds-panel__element ds-panel__element--offset_horizontal ds-panel__element--offset_top">
        <div class="t-content"><h6>Title section</h6></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_horizontal">
        <div class="t-content"><h3>Section</h3></div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_horizontal ds-panel__element--offset_top">
        <div class="t-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_full">
        <div class="g-row">
          <div class="g-cell g-cols g-cols--narrow">
            <div class="t-content">
              <p><small>Copyright notice here</small></p>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--auto"></div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="t-content">
              <p>
                <small><time datetime="2013-09-07" pubdate="">07 September 2013</time></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::
