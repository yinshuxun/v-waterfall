#v-waterfall
A waterfall layout component for Vue.js(^2.0)

##Demo
[simple demo](https://yinshuxun.github.io/road-of-vue/index.html#/waterfallflow)

##Installation
```shell
npm install --save v-waterfall
```

### use

```js
/* in xxx.vue */
<template>
    <div>
        /*core code*/
        <Waterfall v-for="(item,index) in items"
                   :maxWidth='240'
                   :gapWidth='20'
                   :gapHeight='20'
                   :resize="true"
                   :height='Math.random() * 200 + 200'
                   :item="item"
                   :index="index"
                   :moduleStyle="$style"
                   uniqueId="xyx"
                   inline-template>
            <div :class="moduleStyle.item" :style="style">
                {{index}}
            </div>
        </Waterfall>
        </*core code*/>
    </div>
</template>
<script>
import Waterfall from 'v-waterfall'

export default {
  ...
  components: {
    Waterfall,
  }
  ...
}
</script>
```
##Api