# Типографика

**`type`** - Библиотека для урегулирования отображения обычной верстки. И упрощает настройку типографики проекта.

Базовый префикс(**`$TYPE_PREFIX`**) блоков типографики: `t-`.

Для настройки и работы с типографикой есть большое количество переменных. Изучите их: `@dermis/typo/src/variables.sass`. Как и все остальные переменные - их нужно использовать в разработке. Также большинство из них есть в виде css custom properties.

## Размеры контента

Отображения контента, для более удобного чтения желательно ограничивать в занимаемой им ширине.

::: demo
```html
<template>
  <div>
    <section class="t-content t-words t-words--fill_sm">
      <h4>Малый контейнер(sm)</h4>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </section>
    <section class="t-content t-words t-words--fill_md">
      <h4>Средний контейнер(md)</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </section>
    <section class="t-content t-words t-words--fill_lg">
      <h4>Большой контейнер(lg)</h4>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::

## "Чистые" элементы

Это пример стилизации частой верстки в случае когда применение к ним классов достаточно сложно(контент из админ панели, например).

По умолчанию стилизации для html элементов в проекте нет, дабы не нарушать стилизацию конкретных блоков. Для их стилизации они должны находится в `t-content` блоке.

::: demo
```html
<template>
  <div class="t-content">
    <header>
      <h1>HTML</h1>
      <h2>Every html element in one place. Just waiting to be styled.</h2>
    </header>

    <header>
      <h1><a href="" title="Site title">Site title</a></h1>
      <nav>
        <ul>
          <li> <a href="#" title="Home">Home</a> </li>
          <li> <a href="#" title="About">About</a> </li>
          <li> <a href="#" title="Sign Up">Sign Up</a> </li>
          <li> <a href="#" title="Contact">Contact</a> </li>
          <li> <a href="#" title="Careers">Careers</a> </li>
        </ul>
      </nav>
    </header>

    <section>
      <h1>Headings &amp; Copy</h1>
      <h1>First Header h1</h1>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos.
      </p>
      <h2>Second header h2</h2>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
        ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
        qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
        ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
        qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
      <h3>Third header h3</h3>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint occaecati cupiditate non provident, similique sunt
        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga. Et harum quidem rerum facilis est et expedita distinctio.
      </p>
      <h4>Fourth header h4</h4>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
        ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
        qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
      <h5>Fifth header h5</h5>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
      <h6>Sixth header h6</h6>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos.
      </p>
    </section>
    <hr />
    <section>
      <h1>Links</h1>
      <a href="#">Sample text link</a>
      <a href="#">Sample button link</a>
    </section>
    <hr />
    <section>
      <h1>Lists</h1>
      <h2>Unordered list</h2>
      <ul>
        <li>Orange</li>
        <li>Apple</li>
        <li>Rhubarb</li>
        <li>Rasberry</li>
        <li>Blueberry</li>
        <li>Cherry</li>
      </ul>
      <h2>Ordered list</h2>
      <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
        <li>Fifth</li>
        <li>Sixth</li>
      </ol>
      <h2>Definition list</h2>
      <dl>
        <dt>
        Kick
        </dt>
        <dd>
        808
        </dd>
        <dt>
        Snare
        </dt>
        <dd>
        909
        </dd>
      </dl>
      <dl>
        <dt> Maine </dt>
        <dd> Augusta </dd>
        <dt> California </dt>
        <dd> Sacremento </dd>
        <dt> Oregon </dt>
        <dd> Salem </dd>
        <dt> New York </dt>
        <dd> Albany </dd>
      </dl>
      <dl>
        <dt> Ascender </dt>
        <dd> The part of certain lowercase letters that extends above the x-height of a font.  </dd>
        <dt> Font </dt>
        <dd> Traditionally, a complete set of characters for one typeface at
        one particular type size. Often used more loosely as a synonym for
        "typeface".
        </dd>
        <dt> Golden Section </dt>
        <dd>
        The ideal proportion according to the ancient Greeks. It is visualized as the
        division of a line into two unequal segments in such a way that the ratio of the
        smaller segment to the larger segment is equal to the ratio of the larger to the
        whole. It is usually defined as 21:34, that is, 21/34 and 34/(21+34) both equal
        approximately 0.618. A rectangle whose sides are of this proportion is called a
        "golden rectangle". Golden rectangles can be found in the proportions of the
        Parthenon and many medieval manuscripts.
        </dd>
      </dl>
    </section>

    <hr />

    <section>
      <h6>An Example Article</h6>
      <article>
        <h1 class="t-words t-words--sm">Some very long article title to describe content</h1>
        <p>
          Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud <em>exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat</em>. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote>
          <p>
            This is a GREAT pull quote.
          </p>
          &mdash; <a href="#">Author</a>
        </blockquote>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
          ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
          ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique sunt
          in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
          fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
      </article>
    </section>
    <hr />

    <section>
      <h1>Code examples</h1>
      <pre><code>sudo ipfw pipe 1 config bw 256KByte/s
sudo ipfw add 1 pipe 1 src-port 3000</code></pre>
    </section>
    <hr />
    <section>
      <h1>Footer</h1>
      <footer>
        <p>Copyright 2013. Made with love by <a href="http://mrmrs.cc" title="MRMRS - Designer">mrmrs</a>.</p>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://twitter.com" title=" on Twitter">Twitter</a>
          </li>
          <li>
            <a href="http://pinterest.com" title=" on Pinterest">Pinterest</a>
          </li>
          <li>
            <a href="http://instagram.com" title=" on Instagram">Instagram</a>
          </li>
          <li>
            <a href="http://dribbbble.com" title=" on Dribbble">Dribbble</a>
          </li>
          <li>
            <a href="http://github.com" title=" on Github">Github</a>
          </li>
        </ul>
      </footer>
    </section>

  <section>
    <header>
      <h1>Random Stuff</h1>
    </header>
    <small>This is for things like copyright info</small>
    <s>Content that isn't accurate or relevant anymore.</s>
    <span>Generic span wrapper</span>
    <abbr>HTML How to meet ladies</abbr>
    <p>This is inline text with <sub>subscript</sub> and <sup>superscript</sup> elements.</p>
    <p>
      <var>f</var>(<var>x</var>) = <var>a</var><sub>0</sub> + <var>a</var><sub>1</sub><var>x</var> +
      <var>a</var><sub>2</sub><var>x</var><sup>2</sup>, where <var>a</var><sup>2</sup> ≠ 0
    </p>
    <time datetime="2013-09-07" pubdate>07 September 2013</time>
  </section>

  <section>
    <figure>
      <img src="http://placekitten.com/g/960/320" alt="Figure Example">
      <figcaption>
        Photo of the sky at night. Original by <a href="http://flickr.com/photos/heyitsadam/">@mrmrs</a>
      </figcaption>
    </figure>
  </section>

  <section>
    <!--
    http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-samp-element
    -->
    <samp>
      <pre>/Sites/html master  ☠ ☢
$  <kbd>ls -gto</kbd>

total 104
-rw-r--r--   1   10779 Jun  5 16:24 index.html
-rw-r--r--   1    1255 Jun  5 16:00 _config.yml
drwxr-xr-x  11     374 Jun  5 15:57 _site
-rw-r--r--   1    1597 Jun  5 14:16 README.md
drwxr-xr-x   5     170 Jun  5 14:15 _sass
-rw-r--r--   1     564 Jun  4 15:59 Rakefile
drwxr-xr-x   6     204 Jun  4 15:59 _includes
drwxr-xr-x   4     136 Jun  4 15:59 _layouts
drwxr-xr-x   3     102 Jun  4 15:59 _resources
drwxr-xr-x   3     102 Jun  4 15:59 css
-rw-r--r--   1    1977 Jun  4 15:59 favicon.icns
-rw-r--r--   1    6518 Jun  4 15:59 favicon.ico
-rw-r--r--   1    1250 Jun  4 15:59 touch-icon-ipad-precomposed.png
-rw-r--r--   1    2203 Jun  4 15:59 touch-icon-ipad-retina-precomposed.png
-rw-r--r--   1    1046 Jun  4 15:59 touch-icon-iphone-precomposed.png
-rw-r--r--   1    1779 Jun  4 15:59 touch-icon-iphone-retina-precomposed.png</pre>
      </samp>
    </section>
    <section>
      <h1>Tables</h1>
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
            <td>#999-32ac</td>
            <td>First Name</td>
            <td>13 May, 2013</td>
            <td>999 Spruce Lane, Somewhere, CA 94101</td>
          </tr>
          <tr>
            <td>#888-32dd</td>
            <td>Sample Name</td>
            <td>17 May, 1984</td>
            <td>999 Spruce Lane, Somewhere, CA 94101</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h1>Footer</h1>
      <footer>
        <small>© 2014 Some company name</small>
        <address>email@email.com</address>
      </footer>
    </section>
  </div>
</template>
<script> export default {}; </script>
```
:::
