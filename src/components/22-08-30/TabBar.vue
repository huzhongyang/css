<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted } from 'vue'

const liArr = ref() as Ref<HTMLLIElement[]>
onMounted(async () => {
  liArr.value = Array.from(document.querySelectorAll('li'))
})

function clickMe(id: number) {
  for (const li of liArr.value)
    li.classList.remove('active')

  liArr.value[id].classList.add('active')
}
</script>

<template>
  <div class="wrapper">
    <div class="tab-bar">
      <ul>
        <li class="active" @click="clickMe(0)">
          <a href="#">
            <span class="icon"><i-tabler-home /></span>
            <span class="text">Home</span>
          </a>
        </li>
        <li @click="clickMe(1)">
          <a href="#">
            <span class="icon"><i-tabler-user /></span>
            <span class="text">Profile</span>
          </a>
        </li>
        <li @click="clickMe(2)">
          <a href="#">
            <span class="icon"><i-tabler-message-circle /></span>
            <span class="text">Message</span>
          </a>
        </li>
        <li @click="clickMe(3)">
          <a href="#">
            <span class="icon"><i-tabler-photo /></span>
            <span class="text">Photo</span>
          </a>
        </li>
        <li @click="clickMe(4)">
          <a href="#">
            <span class="icon"><i-tabler-settings /></span>
            <span class="text">Setting</span>
          </a>
        </li>
        <div class="indicator" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
    svg {
        width: 24px;
        height: 24px;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .tab-bar {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 400px;
            height: 70px;
            background-color: #e4dccf;
            border-radius: 10px;

            ul {
                position: relative;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-evenly;
                align-items: center;
                gap: 10px;

                width: 350px;
                list-style: none;
                font-size: small;

                li {
                    width: 70px;
                    height: 70px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                li a {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;

                    .text {
                        opacity: 0;
                    }

                    .icon {
                        transition: all .5s;
                    }
                }

                .active {
                    .icon {
                        z-index: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 70px;
                        height: 70px;
                        position: relative;
                        transform: translateY(-30%);
                        transition: all .5s;
                    }

                    .text {
                        z-index: 1;
                        position: relative;
                        top: -30px;
                        font-size: 1em;
                        opacity: 1;
                        transform: translateY(50%);
                        transition: all .5s;
                    }
                }

                .indicator {
                    position: absolute;
                    top: -50%;
                    width: 70px;
                    height: 70px;
                    background: #d2ebcd;
                    border-radius: 50%;
                    border: 6px solid white;
                    transition: 0.5s;

                    &::before {
                        background-color: transparent;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: -22px;
                        width: 20px;
                        height: 20px;
                        border-top-right-radius: 20px;
                        box-shadow: 1px -10px 0 0 #fff;
                    }

                    &::after {
                        background-color: transparent;
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: -22px;
                        width: 20px;
                        height: 20px;
                        border-top-left-radius: 20px;
                        box-shadow: -1px -10px 0 0 #fff;
                    }
                }
            }
        }
    }

    ul li:nth-child(1).active ~ .indicator {
        transform: translateX(calc(70px * -2));
    }

    ul li:nth-child(2).active ~ .indicator {
        transform: translateX(calc(70px * -1));
    }

    ul li:nth-child(3).active ~ .indicator {
        transform: translateX(calc(70px * 0));
    }

    ul li:nth-child(4).active ~ .indicator {
        transform: translateX(calc(70px * 1));
    }

    ul li:nth-child(5).active ~ .indicator {
        transform: translateX(calc(70px * 2));
    }
</style>
