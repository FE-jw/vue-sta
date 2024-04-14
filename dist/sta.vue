<template>
	<component
		ref="sta"
		:is="tagName"
		:class="{ 'sta-trigger': isVisible, 'sta-complete': isComplete }"
		data-sta
	>
		<slot />
	</component>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const props = defineProps({
	tagName: {
		type: String,
		default: 'div'
	},
	delay: {
		type: String
	},
	duration: {
		type: String
	},
	distance: {
		type: String
	},
	direction: {
		type: String
	}
});

let IO;	//IntersectionObserver
const sta = ref(null);
const isVisible = ref(false);
const isComplete = ref(false);
const transHandler = () => {
	if(!isComplete.value){
		isComplete.value = true;
	}
};
const setCustom = () => {
	if(props.delay) sta.value.style.setProperty('--sta-delay', props.delay / 1000 + 's');
	if(props.duration) sta.value.style.setProperty('--sta-duration', props.duration / 1000 + 's');
	if(props.distance) sta.value.style.setProperty('--sta-distance', props.distance + 'px');
	if(props.direction) sta.value.dataset.staDirection = props.direction;
};

onMounted(() => {
	setCustom();

	// observe
	IO = new IntersectionObserver(entries => {
		if(entries[0].intersectionRatio <= 0) return;

		isVisible.value = true;
	});
	IO.observe(sta.value);
	
	sta.value.addEventListener('transitionend', transHandler);
});

onBeforeUnmount(() => {
	IO.disconnect(sta.value);

	sta.value.removeEventListener('transitionend', transHandler);
});
</script>

<style scoped>
[data-sta]	{
	--sta-distance: 60px;
	--sta-duration: 1s;
	--sta-delay: 0;
	opacity:0;transform:translate(0, var(--sta-distance));
}
[data-sta][data-sta-direction='ttb']	{transform:translate(0, calc(var(--sta-distance) * -1));}
[data-sta][data-sta-direction='ltr']	{transform:translate(calc(var(--sta-distance) * -1), 0);}
[data-sta][data-sta-direction='rtl']	{transform:translate(var(--sta-distance), 0);}
[data-sta].sta-trigger	{opacity:1;transform:translate(0);transition-property:opacity, transform;transition-duration:var(--sta-duration);transition-delay:var(--sta-delay);}
</style>