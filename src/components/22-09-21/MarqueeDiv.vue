<script setup lang="ts">

</script>

<template>
	<div class="container">
		<div class="marquee">
			<div class="content">
				1
			</div>
		</div>
	</div>
</template>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .marquee {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 200px;
        height: 300px;
        border-radius: 10px;
        font-size: 40px;

        position: relative;
        overflow: hidden;
    }

    .marquee::before {
        content: '';
        width: 200px;
        height: 300px;
        background: radial-gradient(#e66465, #9198e5);

        position: absolute;
        top: -50%;
        left: -50%;

        animation: rotate1 4s linear infinite;
    }

    .marquee::after {
        content: '';
        width: 200px;
        height: 300px;
        background: radial-gradient(salmon, slateblue);

        position: absolute;
        bottom: -50%;
        right: -50%;

        animation: rotate2 4s linear infinite -4s;
    }

    @keyframes rotate1 {
        0% {
            transform: rotate(0deg);
            transform-origin: bottom right;
        }
        100% {
            transform: rotate(360deg);
            transform-origin: bottom right;
        }
    }

    @keyframes rotate2 {
        0% {
            transform: rotate(0deg);
            transform-origin: top left;
        }
        100% {
            transform: rotate(360deg);
            transform-origin: top left;
        }
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #808080;
        border-radius: 10px;
        width: 190px;
        height: 290px;
        z-index: 1;
    }
</style>
