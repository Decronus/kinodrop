<script lang="ts" setup>
const props = defineProps(["movie"]);
</script>

<template>
    <div class="movie-card">
        <div class="movie-card__image" :style="{ 'background-image': `url(${props.movie.poster.url})` }">
            <!-- <img :src="props.movie.poster.url" alt="Постер фильма" /> -->
        </div>
        <div class="movie-card__text">
            <span class="movie-card__movie-name">{{ props.movie.name }}</span>
            <span class="movie-card__movie-genre">{{ props.movie.genres[0].name }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;

    &:hover .movie-card__image {
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
    }
}
.movie-card__image {
    width: 211px;
    height: 314px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
}

.movie-card__text {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.movie-card__movie-name {
    font-size: 20px;
    max-width: 211px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.movie-card__movie-genre {
    font-size: 14px;
    color: #acacac;
}
</style>
