![vue-sta](logo.svg)

# **vue-sta(beta)**
STA Vue.js module

## **Features**
* Vue 3 Support
* Developed based on [STA](https://github.com/FE-jw/STA)
* Using the IntersectionObserver API
	* Android: 5+
	* iOS: 12.2+

## **Install**
```
npm install vue-sta
```

## **Setup**
```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import sta from 'vue-sta';	// Be sure to import 'vue-sta'

createApp(App)
	.use(sta)	// Use 'sta' in your app
	.mount('#app');
```

## **Usage**
```vue
<template>
	<!-- As a result, it is rendered as a div tag -->
	<sta>You can add text, tags, etc. here.</sta>

	<!-- By setting the tagName, you can change it to the desired tag -->
	<sta tagName="section">
		<span>Lorem ipsum dolor sit amet.</span>
	</sta>

	<!-- You can set the duration, direction, delay, and distance of the animation -->
	<sta duration="500">Lorem ipsum dolor sit amet.</sta>
	<sta direction="rtl">Lorem ipsum dolor sit amet.</sta>
	<sta delay="200">Lorem ipsum dolor sit amet.</sta>
	<sta distance="100">Lorem ipsum dolor sit amet.</sta>
</template>
```

## **Change Log**
* 0.1.0 (2024-04-14)
	* Release Beta Version