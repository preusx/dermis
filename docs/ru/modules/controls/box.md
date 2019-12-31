# Базовая "коробка"

Все управляющие элементы в системе должны использовать общую, или хотя-бы схожую, структуру для формирования единой механики построения и задания размеров. В таком случае стилизация, например select'а не будет отличатся от стилизации кнопки, или какого-либо более сложного элемента, потому что база у них будет идентичная.

И эта база - набор миксин и placeholder'ов: `control-box`.

## API

### Mixns

- `control-box-type-line` - Установка размера шрифта, и интерлиньяжа для элемента.
- `control-box-definition` - Определение всех переменных в рамках текущего блока.
- `control-box-base` - Базовая "чистящая" стилизация корневого элемента коробки.
- `control-box-border` - Простой микс, обьявляющий стандартный бордюр.
- `control-box` - Полная стиизация блока с элементами. Де-факто - внутри набор наследований, и пользоваться миксом можно и даже нужно - лишнего кода не прибудет.

### Placeholders

- `%control-box-definition` - Идентичен соответствующему миксину.
- `%control-box-base` - Идентичен соответствующему миксину.
- `%control-box-border` - Идентичен соответствующему миксину.
- `%control-box-wrapper` - Контейнер(блок) должен наследовать этот placeholder.
- `%control-box-inner` - Конкретный управляющий элемент(input, например) должен наследовать этот placeholder.

### Переменные

- `--control-box-font-size` - Размер шрифта.
- `--control-box-line-height` - Высота линии.
- `--control-box-space-vertical` - Размер пространства от контента внутри блока до края блока по вертикали.
- `--control-box-space-horizontal` - Размер пространства от контента внутри блока до края блока по горизотали.
- `--control-box-border-width` - Ширина бордюра элемента.
- `--control-box-padding-vertical` - Вычисленный вертикальный padding на основе `--control-box-space-vertical`, учитывающий `--control-box-border-width`.
- `--control-box-padding-horizontal` - Вычисленный горизонтальный padding на основе `--control-box-space-vertical`, учитывающий `--control-box-border-width`.
- `--control-box-height` - Вычисленная итоговая высота элемента. важно знать, например для кроссбраузерной стилизации встроенных управляющих элементов, таких как select.

## Примеры

Для создания блока из примеров достаточно написать следущее:

```sass
.d-control-box-example
  +control-box()
```

И появится простой, легкий для изменений блок.

::: demo
```html
<template>
  <div>
    <div class="d-control-box-example">
      <div class="d-control-box-example__body">
        <div class="d-control-box-example__item d-control-box-example__item--primary">
          <div class="d-control-box-example__element">
            Control box example
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Append / prepend

::: demo
```html
<template>
  <div>
    <div class="d-control-box-example" style="--control-box-border-width: 1px; border-color: var(--theme-relief-3)">
      <div class="d-control-box-example__body">
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">add_box</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">directions_transit</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-control-box-example__item d-control-box-example__item--primary">
          <div class="d-control-box-example__element">
            With prepend/append
          </div>
        </div>
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_append">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">expand_more</div>
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


### Different border widths - equal heights

::: demo
```html
<template>
  <div>
    <div class="g-row">
      <div class="g-cell g-cols g-cols--6">
        <div class="d-control-box-example" style="--control-box-border-width: 1px; border-color: var(--theme-relief-3)">
          <div class="d-control-box-example__body">
            <div class="d-control-box-example__item">
              <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
                <div class="ds-inliner">
                  <div class="ds-inliner__body">
                    <div class="material-icons">directions_transit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-control-box-example__item d-control-box-example__item--primary">
              <div class="d-control-box-example__element">
                With prepend/append
              </div>
            </div>
            <div class="d-control-box-example__item">
              <div class="d-control-box-example__element d-control-box-example__element--attachment_append">
                <div class="ds-inliner">
                  <div class="ds-inliner__body">
                    <div class="material-icons">expand_more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-cell g-cols g-cols--6">
        <div class="d-control-box-example" style="--control-box-border-width: 3px; border-color: var(--theme-relief-3)">
          <div class="d-control-box-example__body">
            <div class="d-control-box-example__item">
              <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
                <div class="ds-inliner">
                  <div class="ds-inliner__body">
                    <div class="material-icons">directions_transit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-control-box-example__item d-control-box-example__item--primary">
              <div class="d-control-box-example__element">
                With prepend/append
              </div>
            </div>
            <div class="d-control-box-example__item">
              <div class="d-control-box-example__element d-control-box-example__element--attachment_append">
                <div class="ds-inliner">
                  <div class="ds-inliner__body">
                    <div class="material-icons">expand_more</div>
                  </div>
                </div>
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

### Space control

::: demo
```html
<template>
  <div>
    <div class="d-control-box-example" style="
      --control-box-border-width: 2px;
      --control-box-space-vertical: var(--space-md);
      --control-box-space-horizontal: var(--space-lg);
      border-color: var(--theme-relief-3)
    ">
      <div class="d-control-box-example__body">
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">add_box</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">directions_transit</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-control-box-example__item d-control-box-example__item--primary">
          <div class="d-control-box-example__element">
            With prepend/append
          </div>
        </div>
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_append">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">expand_more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="d-control-box-example" style="
      --control-box-border-width: 4px;
      --control-box-space-vertical: var(--space-xl);
      --control-box-space-horizontal: var(--space-6);
      border-color: var(--theme-relief-3)
    ">
      <div class="d-control-box-example__body">
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">add_box</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_prepend">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">directions_transit</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-control-box-example__item d-control-box-example__item--primary">
          <div class="d-control-box-example__element">
            With prepend/append
          </div>
        </div>
        <div class="d-control-box-example__item">
          <div class="d-control-box-example__element d-control-box-example__element--attachment_append">
            <div class="ds-inliner">
              <div class="ds-inliner__body">
                <div class="material-icons">expand_more</div>
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