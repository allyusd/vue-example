<template>
    <div class="layout-box">
        <div class="inner-wrapper left">
            <slot name="left"></slot>
        </div>
        <div class="inner-wrapper center">
            <slot name="center"></slot>
        </div>
        <div class="inner-wrapper right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style scoped>
.layout-box {
    display : flex;
    justify-content : space-between;
}
.inner-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
}
.left {
    margin-right: auto;
}
.right {
    margin-left: auto;
}
</style>
