<template>
    <div class="box">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style>
.box {
    display : flex;
    justify-content : space-between;
}
</style>
