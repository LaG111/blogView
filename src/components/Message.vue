<template>
  <div class="message">
    <template v-for="(item, index) in $store.state.msgPool">
        <div class="d-flex justify-center" transition="slide-y-transition" :key="index">
          <template v-if="item.light == false" >
            <v-alert out-lined prominent text :type="item.type" transition="fade-transition">{{ item.message }}</v-alert>
          </template>
          <template v-if="item.light == true" >
            <v-alert out-lined prominent text :type="item.type"  transition="fade-transition">{{item.message}}</v-alert>
          </template>
        </div>
    </template>
  </div>
</template>
<style>
	.message {
	  left: 50%;
	  z-index: 9999;
	  display: flex;
	  position: fixed;
	  min-width: 300px;
	  max-width: 460px;
	  flex-direction: column;
	  transform: translateX(-50%);
	}
</style>
<script>
export default {
  name:"Message"
}
</script>
