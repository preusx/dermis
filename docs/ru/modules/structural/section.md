# Секция

Модуль **`section`** добавляет элемент для оформления секций документа.

## Базовая

::: demo
```html
<template>
  <div>
    <section class="
      ds-section
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
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
      ds-section
    ">
      <div class="ds-section__element ds-section__element--indent_inside">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h4>Внутренний (.ds-section__element--indent_inside)</h4>
            <p>
              Элемент с внутренним отсупом.
            </p>
          </div>
        </div>
      </div>
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h4>Внешний(по умолчанию, .ds-section__element--indent_outside)</h4>
            <p>
              Элемент с внешним отсупом.
            </p>
          </div>
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
  <div class="d-section-example-container">
    <section class="
      ds-section
      ds-section--space_none
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_xs
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_sm
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_md
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_lg
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_xl
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_2xl
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_3xl
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_4xl
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="
      ds-section
      ds-section--space_5xl
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::

## Занимающая экран


::: demo
```html
<template>
  <div class="d-section-example-container">
    <section class="
      ds-section
      ds-section--space_screen
    ">
      <div class="ds-section__element">
        <div class="g-container g-container--fit_sm">
          <div class="t-content">
            <h2>Section</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::
