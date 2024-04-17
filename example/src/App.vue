<template>
	<div class="sta-wrap">
		<!-- <div class="section">
			<sta v-if="isVisible" class="cont">1</sta>
			<button type="button" @click="isVisible = false">클릭</button>
		</div> -->
		<div class="section"><sta class="cont">1</sta></div>
		<div class="section"><sta tagName="span" class="cont" distance="100" direction="rtl" delay="500">2</sta></div>
		<div class="section"><sta tagName="section" class="cont" duration="500" direction="ltr">3</sta></div>
		<div class="section"><sta tagName="article" class="cont" direction="ttb">4</sta></div>
		<!-- <div class="section"><sta class="cont">5</sta></div> -->
	</div>
</template>

<script setup>
// import { ref } from 'vue';
// const isVisible = ref(true);	// 컴포넌트 unMounted 테스트용
</script>

<style lang="scss" scoped>
.sta-wrap	{overflow:hidden;background-color:var(--nuxt-navy);
	.section	{height:100vh;position:relative;
		.cont	{
			--size: 300px;
			display:flex;justify-content:center;align-items:center;width:var(--size);height:var(--size);position:absolute;left:calc(50% - calc(var(--size) / 2));top:calc(50% - calc(var(--size) / 2));font-size:40px;font-weight:bold;color:var(--nuxt-navy);background-color:var(--nuxt-green);
		}
	}
}
</style>

<style lang="scss">
// reset
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;-webkit-overflow-scrolling:touch;}
body	{line-height:1.3;font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#000;}

:root	{
	--nuxt-navy: #020420;
	--nuxt-green: #00dc82;
}
</style>