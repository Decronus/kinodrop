import {
    KinopoiskDev,
    MovieQueryBuilder,
    SPECIAL_VALUE,
    SORT_TYPE,
    Filter,
    MovieFields,
} from "@openmoviedb/kinopoiskdev_client";

const kp = new KinopoiskDev("ZSH06JV-8HPM0PT-N7D4QGZ-4VR4KQ1");

export function getMovieById(id: number) {
    return kp.movie.getById(id);
}

export function getMoviesByFilters(years: string, rating: string) {
    const queryBuilder = new MovieQueryBuilder();

    const query: Filter<MovieFields> = {
        selectFields: ["id", "name", "rating", "poster", "year", "genres", "backdrop"],
        year: years,
        "rating.kp": rating,
        "poster.url": "!null",
        sortField: "rating.kp",
        sortType: "-1",
        page: 1,
        limit: 30,
    };

    return kp.movie.getByFilters(query);
}
