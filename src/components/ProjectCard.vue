<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>


<template>
    <div class="card col" style="width: 18rem;">
        <img :src="project.image" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <h5>{{ project.date }}</h5>
            <h5>{{ project.name }}</h5>
            <h5>{{ project.surname }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
</template>

<style lang="scss"></style>


