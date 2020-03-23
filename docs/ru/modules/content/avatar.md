# Аватар

Модуль **`avatar`**. Все модификаторы - адаптивны.

## Пример

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="g-row g-row--appearance_spaced g-row--align_center g-row--justify_between">
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_xs">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_sm">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_md">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_lg">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_xl">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_2xl">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
        </div>
      </div>
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="g-row g-row--appearance_spaced g-row--align_center g-row--justify_between">
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar">
              <div class="ds-avatar__label">D</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_xs">
              <div class="ds-avatar__label">xs</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_sm">
              <div class="ds-avatar__label">sm</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_md">
              <div class="ds-avatar__label">md</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_lg">
              <div class="ds-avatar__label">lg</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_xl">
              <div class="ds-avatar__label">xl</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_2xl">
              <div class="ds-avatar__label">2xl</div>
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

### Rounded

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="g-row g-row--appearance_spaced g-row--align_center g-row--justify_between">
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--appearance_rounded">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_xs ds-avatar--appearance_rounded">
              <div class="ds-avatar__label">xs</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_sm ds-avatar--appearance_rounded">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_md ds-avatar--appearance_rounded">
              <div class="ds-avatar__label">md</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_lg ds-avatar--appearance_rounded">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_xl ds-avatar--appearance_rounded">
              <div class="ds-avatar__label">xl</div>
            </div>
          </div>
          <div class="g-cell g-cols g-cols--narrow">
            <div class="ds-avatar ds-avatar--size_2xl ds-avatar--appearance_rounded">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
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

### Full width

::: demo
```html
<template>
  <div>
    <div class="ds-panel ds-panel--space_lg">
      <div class="ds-panel__element ds-panel__element--offset_vertical">
        <div class="g-row g-row--appearance_spaced g-row--align_center g-row--justify_between">
          <div class="g-cell g-cols g-cols--auto">
            <div class="ds-avatar ds-avatar--appearance_rounded ds-avatar--size_full">
              <img class="ds-avatar__image" src="https://picsum.photos/100" />
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
