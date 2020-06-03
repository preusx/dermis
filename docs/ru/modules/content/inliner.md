# Выравниватель

Модуль **`inliner`** добавляет блок который выравнивает относительно текущей "линии" текста любой обьект внутри него. Идея его создания - встраивание иконок в элементы. Помимо иконок разного типа можно вставлять любые другие элементы(например аватар пользователя, чекбокс итп).

## Примеры

::: demo
```html
<template>
  <div>
    <div>
      <div class="ds-inliner">
        <div class="ds-inliner__body">
          <input type="checkbox" />
        </div>
      </div>
      Checkbox aligned
    </div>
    <div>
      <div class="ds-inliner">
        <div class="ds-inliner__body">
          <input type="radio" />
        </div>
      </div>
      Radio aligned
    </div>
    <div>
      <div class="ds-inliner">
        <div class="ds-inliner__body">
          <div class="material-icons">accessibility</div>
        </div>
      </div>
      Icon aligned
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Размеры

Размеры основаны на размерах шрифтов из модуля `type`. Изменить их можно задав в переменной `$inliner-size-map` соответствующие ключ-значение.

Вне зависимости от размера элемента он будет встраиваться в текущую линию никак не искажая ее высоту. При этом он будет вытеснять окружающие элементы по ширине.

::: demo
```html
<template>
  <div>
    <div>
      <div class="ds-inliner ds-inliner--size_xs">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: XS
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_sm">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: SM
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_md">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: MD
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_lg">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: LG
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_xl">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: XL
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_2xl">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: 2XL
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_3xl">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: 3XL
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_4xl">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: 4XL
    </div>
    <div>
      <div class="ds-inliner ds-inliner--size_5xl">
        <div class="ds-inliner__body">
          <div class="material-icons">cloud</div>
        </div>
      </div>
      Inliner size: 5XL
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::
