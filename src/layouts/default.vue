<script>
import HeaderNav from "../components/HeaderNav.vue";
export default {
    setup() {
    },
    components: { HeaderNav }
}
</script>
<template>
<div>
    <main>
        <HeaderNav />
        <slot></slot>
    </main>
</div>
</template>