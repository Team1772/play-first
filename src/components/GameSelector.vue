<template>
    <section class="section">
        <div class="container" id="selector">
            <div class="columns is-centered">
                <div class="column is-half" v-for="{ src, alt, name, button } in games" :key="name">
                    <figure class="image is-square">
                        <img v-lazy="src" :alt="alt">
                    </figure>
                    <Button class="mt-4" :disabled="button.disabled" :text="button.text" :event="() => goTo(`/${name.toLowerCase()}`)" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Button } from './'
import { fll, frc } from '../mock'
export default {
    name: "GameSelector",

    components: {
        Button,
    },

    data() {
        return {
            games: [ fll, frc ],
        }
    },

    methods: {
        goTo(route) {
            if (this.$route.path === route) return
            else this.$router.push(route)
        },
    },
}
</script>

<style scoped>
    .container#selector {
        max-width: 700px !important;
        margin-top: 10vh;
    }

    figure {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
    }

    figure > img {
        margin: auto;
    }
</style>