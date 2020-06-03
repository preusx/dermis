# Таблицы

Модуль **`table`** добавляет стилизацию таблиц в типографике(флаг **`$TABLE_USE_IN_TYPE_CONTENT`** по умолчанию включает эту возможность), и отдельный элемент таблицы.

## Примеры

::: demo
```html
<template>
  <table class="ds-table">
    <caption class="ds-table__caption">
      <div class="ds-caption ds-caption--size_6 ds-caption--variant_secondary">Table caption</div>
      <div class="ds-caption ds-caption--size_3">Clear table with no styling</div>
    </caption>

    <thead class="ds-table__head">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Leader + Team</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head" width="1">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr class="ds-table__row" v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
        <td class="ds-table__cell">
          <div class="caption caption--size_5">
            {{['Frontend Design System', 'WebCase', 'Back-end', 'Front-end'][i%4]}}
          </div>
        </td>
        <td class="ds-table__cell">2018/10/09</td>
        <td class="ds-table__cell">Antony</td>
        <td class="ds-table__cell">
          {{['$ 1 003', '$ 4 870', '$ 10 954', '$ 1 000 000', 'P 3 294'][i%5]}}
        </td>
        <td class="ds-table__cell">
          Успешно
        </td>
        <td class="ds-table__cell">
          <button class="ds-link">Activate</button>
        </td>
      </tr>
    </tbody>

    <tfoot class="ds-table__footer">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Leader + Team</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head">Actions</th>
      </tr>
    </tfoot>
  </table>
</template>
<script> export default {}; </script>
```
:::

::: demo
```html
<template>
  <table class="ds-table ds-table--styling_default">
    <caption class="ds-table__caption">
      <div class="ds-caption ds-caption--size_6 ds-caption--variant_secondary">Table caption</div>
      <div class="ds-caption ds-caption--size_3">Default styling</div>
    </caption>

    <thead class="ds-table__head">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Leader + Team</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head" width="1">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr class="ds-table__row" v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
        <td class="ds-table__cell">
          <div class="caption caption--size_5">
            {{['Frontend Design System', 'WebCase', 'Back-end', 'Front-end'][i%4]}}
          </div>
        </td>
        <td class="ds-table__cell">2018/10/09</td>
        <td class="ds-table__cell">Antony</td>
        <td class="ds-table__cell">
          {{['$ 1 003', '$ 4 870', '$ 10 954', '$ 1 000 000', 'P 3 294'][i%5]}}
        </td>
        <td class="ds-table__cell">
          Успешно
        </td>
        <td class="ds-table__cell">
          <button class="ds-link">Activate</button>
        </td>
      </tr>
    </tbody>

    <tfoot class="ds-table__footer">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Leader + Team</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head">Actions</th>
      </tr>
    </tfoot>
  </table>
</template>
<script> export default {}; </script>
```
:::

::: demo
```html
<template>
  <table class="ds-table ds-table--styling_default ds-table--appearance_striped">
    <caption class="ds-table__caption">
      <div class="ds-caption ds-caption--size_6 ds-caption--variant_secondary">Table caption</div>
      <div class="ds-caption ds-caption--size_3">Striped table</div>
    </caption>

    <thead class="ds-table__head">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Leader + Team</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head" width="1">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr class="ds-table__row" v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
        <td class="ds-table__cell">
          <div class="caption caption--size_5">
            {{['Frontend Design System', 'WebCase', 'Back-end', 'Front-end'][i%4]}}
          </div>
        </td>
        <td class="ds-table__cell">2018/10/09</td>
        <td class="ds-table__cell">Antony</td>
        <td class="ds-table__cell">
          {{['$ 1 003', '$ 4 870', '$ 10 954', '$ 1 000 000', 'P 3 294'][i%5]}}
        </td>
        <td class="ds-table__cell">
          Успешно
        </td>
        <td class="ds-table__cell">
          <button class="ds-link">Activate</button>
        </td>
      </tr>
    </tbody>

    <tfoot class="ds-table__footer">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Leader + Team</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head">Actions</th>
      </tr>
    </tfoot>
  </table>
</template>
<script> export default {}; </script>
```
:::

### В типографике

::: demo
```html
<template>
  <div class="t-content">
    <table>
      <caption>This is a caption for a table</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Address</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="4">Table footer info</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>#999</td>
          <td>First Name</td>
          <td>13 May, 2013</td>
          <td>999 Spruce Lane, Somewhere, CA 94101</td>
        </tr>
        <tr>
          <td>#888</td>
          <td>Sample Name</td>
          <td>17 May, 1984</td>
          <td>999 Spruce Lane, Somewhere, CA 94101</td>
        </tr>
        <tr>
          <td>#492</td>
          <td>First Name</td>
          <td>13 May, 2013</td>
          <td>999 Spruce Lane, Somewhere, CA 94101</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Адаптивная(карточки)

#### Примитивные вертикальные карточки

::: demo
```html
<template>
  <table class="ds-table ds-table--styling_default ds-table--view_cards-till-md">
    <caption class="ds-table__caption">
      <div class="ds-caption ds-caption--size_6 ds-caption--variant_secondary">Table caption</div>
      <div class="ds-caption ds-caption--size_3">Project totalis</div>
    </caption>

    <thead class="ds-table__head">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Content</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head" width="1">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr class="ds-table__row" v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
        <td data-title="Project" class="ds-table__cell">
          <div class="caption caption--size_5">
            {{['Frontend Design System', 'WebCase', 'Back-end', 'Front-end'][i%4]}}
          </div>
        </td>
        <td data-title="Deadline" class="ds-table__cell">2018/10/09</td>
        <td data-title="Content" class="ds-table__cell">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </td>
        <td data-title="Budget" class="ds-table__cell">
          {{['$ 1 003', '$ 4 870', '$ 10 954', '$ 1 000 000', 'P 3 294'][i%5]}}
        </td>
        <td data-title="Status" class="ds-table__cell">
          Успешно
        </td>
        <td data-title="Actions" class="ds-table__cell">
          <button class="ds-link">Activate</button>
        </td>
      </tr>
    </tbody>

    <tfoot class="ds-table__footer">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Content</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head">Actions</th>
      </tr>
    </tfoot>
  </table>
</template>
<script> export default {}; </script>
```
:::

#### Автоматическая организация ячеек в карточке

::: demo
```html
<template>
  <table class="ds-table ds-table--styling_default ds-table--view_cards-till-md ds-table--appearance_autofill-card">
    <caption class="ds-table__caption">
      <div class="ds-caption ds-caption--size_6 ds-caption--variant_secondary">Table caption</div>
      <div class="ds-caption ds-caption--size_3">Project totalis</div>
    </caption>

    <thead class="ds-table__head">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Content</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head" width="1">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr class="ds-table__row" v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
        <td data-title="Project" class="ds-table__cell">
          <div class="caption caption--size_5">
            {{['Frontend Design System', 'WebCase', 'Back-end', 'Front-end'][i%4]}}
          </div>
        </td>
        <td data-title="Deadline" class="ds-table__cell">2018/10/09</td>
        <td data-title="Content" class="ds-table__cell">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </td>
        <td data-title="Budget" class="ds-table__cell">
          {{['$ 1 003', '$ 4 870', '$ 10 954', '$ 1 000 000', 'P 3 294'][i%5]}}
        </td>
        <td data-title="Status" class="ds-table__cell">
          Успешно
        </td>
        <td data-title="Actions" class="ds-table__cell">
          <button class="ds-link">Activate</button>
        </td>
      </tr>
    </tbody>

    <tfoot class="ds-table__footer">
      <tr class="ds-table__row ds-table__row--relief">
        <th class="ds-table__cell ds-table__cell--head">Project</th>
        <th class="ds-table__cell ds-table__cell--head">Deadline</th>
        <th class="ds-table__cell ds-table__cell--head">Content</th>
        <th class="ds-table__cell ds-table__cell--head">Budget</th>
        <th class="ds-table__cell ds-table__cell--head">Status</th>
        <th class="ds-table__cell ds-table__cell--head">Actions</th>
      </tr>
    </tfoot>
  </table>
</template>
<script> export default {}; </script>
```
:::
