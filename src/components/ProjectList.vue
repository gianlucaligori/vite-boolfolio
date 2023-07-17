<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";

export default {
    components: {
        ProjectCard,
        store,
    },
    data() {
        return {
            ArrProjects: [],
            currentPage: 1,
            nPages: 0,
        };
    },
    created() {
        this.pageProject();
    },
    methods: {

        changePage(page) {
            this.currentPage = page;
            this.pageProject();
        },

        pageProject() {

            axios
                .get('http://localhost:8000/api/projects', {
                    params: {
                        page: this.currentPage,
                    }
                })
                .then(response => {
                    this.ArrProjects = response.data.data;
                    this.nPages = response.data.last_page;
                })

        }
    }
};
</script>




<template>
    <div class="container d-flex flex-wrap mt-3 gap-5">
        <ProjectCard v-for="project in ArrProjects" :key="project.id" :project="project" />
    </div>

    <nav class="mt-5">
        <div class="container">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>

                <li v-for="page in nPages" :key="page" class="page-item" :class="{ active: page == currentPage }">
                    <span class="page-link" @click="changePage(page)">
                        {{ page }}
                    </span>
                </li>

                <li class="page-item">
                    <a class="page-link" href="">Next</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="sass">

</style>