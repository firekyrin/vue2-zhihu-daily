<style>
    .list-container {

    }
    .more-btn {
        font-size: 1.5rem;
        padding: 1rem 0;
        width: 100%;
        border: 0;
        color: #fff;
        background-color: #252e39;
        border: none;
        margin: 10px 0;
        border-radius: .5rem;
        outline: none;
        cursor: pointer;
    }
    .more-btn:hover {
        background-color: #455569;
    }
</style>

<template>
    <div class="list-container">
        <!-- <cov-card :data="card" v-link="{'name': 'theme-list', 'params': {'id': card.id}}" v-for="card in themes"></cov-card> -->
        <router-link v-for="card in themes" :to="{'name': 'theme-list', 'params': {'id': card.id}}">
            <cov-card :data="card" >
            </cov-card>
        </router-link>
    </div>
</template>

<script>
    import covCard from './card.vue'
    // import {setThemes} from '../../vuex/index/action'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters([
            'themes'
        ]),
        components: {
            covCard
        },
        created() {
            this.fetchList()
        },
        methods: {
            ...mapActions([
                'setThemes'
            ]),
            fetchList() {
                this.$http.get(this.$Api('http://news-at.zhihu.com/api/4/themes'))
                    .then(response => {
                        const data = response.data
                        let arr = []
                        for (let theme of data.others) {
                            arr.push({
                                description: theme.description,
                                name: theme.name,
                                img: theme.thumbnail,
                                id: theme.id,
                                color: theme.color
                            })
                        }
                        this.setThemes(arr)
                    })
            }
        }
    }
</script>
