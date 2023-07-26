<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getMoviesByFilters } from "../api/kinopoiskDev";

const movies = ref<any>([]);

onMounted(async () => {
    const { data } = await getMoviesByFilters("2008-2023", "7.5-10");
    movies.value = data?.docs;
});
</script>

<template>
    <div class="page-wrap main-page">
        <NavBar />

        <div class="movie-cards-container">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
    </div>
</template>

<style lang="scss">
.movie-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(211px, 1fr));
    grid-gap: 22px;
    row-gap: 60px;
    justify-content: space-between;
}
</style>
