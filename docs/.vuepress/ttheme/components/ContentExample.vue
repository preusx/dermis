<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'content-example',
  mounted() {
    this.$el.querySelectorAll('*').forEach(el => el.classList.add('e-example'))
  }
};
</script>
