<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<aside>
			<router-link to="/">
				<h2>Learn CSS</h2>
			</router-link>
			<div class="link-list">
				<router-link :to="{name:'checkBrowser'}">check browser</router-link>
				<router-link :to="{name:'volumeBar'}">volume bar</router-link>
				<router-link :to="{name:'tabBar'}">tab bar</router-link>
				<router-link :to="{name:'marqueeDiv'}">marquee div</router-link>
			</div>
		</aside>
		<main>
			<!-- router-view 搭配 transition 写法 -->
			<router-view v-slot="{Component}">
				<transition>
					<component :is="Component"/>
				</transition>
			</router-view>
		</main>
	</div>
</template>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .wrapper {
        display: flex;
        flex-flow: row nowrap;
        gap: 10px;

        height: 100vh;
        border-radius: 10px;
    }

    aside {
        background-color: #dcc7c4;
        flex: 0 0 150px;
        padding: 15px;
    }

    .link-list {
        display: flex;
        flex-flow: column nowrap;
        gap: 5px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .link-list a {
        background-color: cornflowerblue;
        border-radius: 6px;
        padding: 4px;
    }

    main {
        flex: 1 0 auto;

        padding: 15px;
        overflow: scroll;
    }
</style>
