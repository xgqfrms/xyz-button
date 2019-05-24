# xyz-button

> An Vue UI Button Component!

```sh
# install cli
$ yarn global add @vue/cli
$ yarn global add @vue/cli-service-global

# uninstall cli
$ yarn global remove @vue/cli
$ yarn global remove @vue/cli-service-global

```

```sh
# dev build tools
$ yarn add -D bili rollup-plugin-vue vue-template-compiler

```

```js

// "devDependencies": {
//     "bili": "^3.4.2",
//     "rollup-plugin-vue": "^4.6.1",
//     "vue-template-compiler": "^2.5.22"
// }

```

## publish

```hs
$ npm list l
$ npm list --json

$ npm whoami

$ npm info

$ npm adduser

$ npm publish

```

## usage

```sh
# install
$ yarn add xyz-button
# OR
$ npm i xyz-button

```

```js
import Vue from "vue";
import XyzButton from "xyz-button";

Vue.use(XyzButton);

```

```js

<!-- error -->
<xyz-button
    corpObj=""
/>

<!-- OK -->
<xyz-button
    :corpObj="corpObj"
/>
<xyz-button
    :corpObj="corpObj2"
/>

```

```js
// events ???

<nice-handsome-button
    :rounded="true"
    color="red"
    size="large">
    My Button
</nice-handsome-button>


<nice-handsome-button
    @click="AutoSkipToPage(`newsinfo/iframe`)"
    :rounded="true"
    color="red"
    size="large">
    click Button 1
</nice-handsome-button>
<!-- dblclick & mobile bug -->
<nice-handsome-button
    @dblclick="AutoSkipToPage(`newsinfo/iframe`)"
    :rounded="true"
    color="red"
    size="large">
    dblclick Button 2
</nice-handsome-button>
<!-- dblclick & components -->
<nice-handsome-button
    @dblclick.native="AutoSkipToPage(`newsinfo/iframe`)"
    :rounded="true"
    color="red"
    size="large">
    dblclick Button 3
</nice-handsome-button>

```


## npm

https://www.npmjs.com/package/xyz-button

## refs

https://www.telerik.com/blogs/vuejs-how-to-build-your-first-package-publish-it-on-npm


## bili

> extractCSS

```js

module.exports = {
    banner: true,
    output: {
        extractCSS: true,
        // extractCSS: false,
    },
    plugins: {
        vue: {
            css: true
        },
    },
};


```
