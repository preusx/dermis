# Стек управляющих элементов

Утилита для управления сплошным обьединением элементов друг с другом.

::: warning WIP
Пока доступна только горизонтальная версия обьединения.
:::

## API

### Mixns

- `control-stack-first-styling` - Слилизация для первого элемента в стеке.
- `control-stack-last-styling` - Стилизация для последнего элемента в стеке.
- `control-stack-elements($selectors)` - Внутренняя примесь. Адаптивно применяет павила из `@content` для списка селекторов.
- `control-stack($selectors)` - Формирует правила обьединения для переданной группы селекторов.
- `control-stack-add` - Более простая версия `control-stack` миксина, применяет правила группировки для текущего сложносоствного селектора.

Для втнутреннего элемента стека исопользуется одновременно стилизация первого и последнего элементов.

### Переменные

- `$control-stack-selectors` - Список селекторов, которые нужно внедрить в "стек". Лучше пользоваться этой переменной - она поможет избежать дублирования кода(политика наследования в sass не дает эффективно наследоваться).

## Примеры

Например при такой базовой стилизациии:

```sass
.d-control-input-example,
.d-control-button-example
  border-radius: 4px

.d-control-input-example
  +control-box()

  --control-box-border-width: 1px
  border-color: var(--theme-relief-3)

.d-control-button-example
  +control-box()

  background: var(--theme-primary-base)
  color: var(--theme-primary-text-inverse)
```

Элементы легко можно "подключить" к механизму стека.

Так:

```sass
.d-control-input-example
  +control-stack-add

.d-control-button-example
  +control-stack-add
```

Или добавить селекторы в настройки:

```scss
$control-stack-selectors: (
  '&.d-control-button-example',
  '&.d-control-input-example'
);
```

::: demo
```html
<template>
  <div>
    <div class="control-stack">
      <div class="g-row g-row--space_none">
        <div class="g-cell g-cols g-cols--narrow">
          <button type="button" class="d-control-button-example control-stack__element control-stack__element--position_first">
            <div class="d-control-button-example__body">
              <div class="d-control-button-example__item d-control-button-example__item--primary">
                <div class="d-control-button-example__element">
                  Button
                </div>
              </div>
            </div>
          </button>
        </div>
        <div class="g-cell g-cols g-cols--narrow">
          <button type="button" class="d-control-button-example d-control-button-example--variant_accent control-stack__element control-stack__element--position_inner">
            <div class="d-control-button-example__body">
              <div class="d-control-button-example__item d-control-button-example__item--primary">
                <div class="d-control-button-example__element">
                  <div class="ds-inliner">
                    <div class="ds-inliner__body">
                      <div class="material-icons">add_box</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div class="g-cell g-cols g-cols--auto">
          <div class="d-control-input-example control-stack__element control-stack__element--position_last">
            <div class="d-control-input-example__body">
              <div class="d-control-input-example__item d-control-input-example__item--primary">
                <input class="d-control-input-example__element" />
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

### Сложные селекторы

Если стилизован радиус не у корневого элемента блока, а у какого-либо внутреннего - нужно применять микстины для составного селектора. Например:

```sass
.d-control-input-example .d-control-input-example__element
  +control-stack-add
```

Или:

```scss
$control-stack-selectors: (
  '&.d-control-input-example .d-control-input-example__element'
);
```

### Адаптивность

::: demo
```html
<template>
  <div>
    <div class="control-stack">
      <div class="g-row g-row--space_none-md g-row--appearance_spaced">
        <div class="g-cell g-cols g-cols--12 g-cols--narrow-md">
          <div class="g-row g-row--space_none">
            <div class="g-cell g-cols g-cols--6 g-cols--narrow-md">
              <button type="button" class="
                d-control-button-example
                control-stack__element
                control-stack__element--position_first
              ">
                <div class="d-control-button-example__body">
                  <div class="d-control-button-example__item d-control-button-example__item--primary">
                    <div class="d-control-button-example__element">
                      Button
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="g-cell g-cols g-cols--6 g-cols--narrow-md">
              <button type="button" class="
                d-control-button-example
                d-control-button-example--variant_accent
                control-stack__element
                control-stack__element--position_inner-md
                control-stack__element--position_last-till-md
              ">
                <div class="d-control-button-example__body">
                  <div class="d-control-button-example__item d-control-button-example__item--primary">
                    <div class="d-control-button-example__element">
                      <div class="ds-inliner">
                        <div class="ds-inliner__body">
                          <div class="material-icons">add_box</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="g-cell g-cols g-cols--12 g-cols--auto-md">
          <div class="
            d-control-input-example
            control-stack__element
            control-stack__element--position_last-md
          ">
            <div class="d-control-input-example__body">
              <div class="d-control-input-example__item d-control-input-example__item--primary">
                <input class="d-control-input-example__element" />
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
