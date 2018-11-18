<template>
    <mu-container>
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-header :title="username" :sub-title="date">
            <mu-avatar slot="avatar">
                <img :src="avatar">
            </mu-avatar>
        </mu-card-header>
        <mu-card-media :title="date" sub-title="Image Sub Title">
            <img src="@/assets/images/sun.jpg">
        </mu-card-media>
        <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
        <mu-card-text v-text="description"></mu-card-text>
        <mu-card-actions>
            <mu-button flat @click="changeLanguage">修改语言</mu-button>
            <mu-button flat>{{$t('buttom')}}</mu-button>
        </mu-card-actions>
        </mu-card>
    </mu-container>
</template>

<script>
import store from '@/store'
    let { avatar = '', username = '', date = '', description  = ''} = store.getters.user
export default {
    data(){
        return {
            avatar: avatar,
            username: username,
            date: date,
            description: description,
        }
    },
    methods: {
        changeLanguage () {
            this.$i18n.locale === 'en-US' ? this.$i18n.locale = 'zh-CN': this.$i18n.locale = 'en-US'
        }
    }
}
</script>


