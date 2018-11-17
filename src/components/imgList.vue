<template>
    <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
        <mu-appbar color="primary">
            <mu-button icon slot="left">
            <mu-icon value="menu"></mu-icon>
            </mu-button>
            Photo
        </mu-appbar>
        <mu-grid-list class="gridlist-demo">
            <mu-sub-header>December</mu-sub-header>
            <mu-grid-tile v-for="tile, index in list" :key="index">
            <img :src="tile.image" >
            <span slot="title">{{tile.title}}</span>
            <span slot="subTitle">by <b>{{tile.author}}</b></span>
            <mu-button slot="action" icon>
                <mu-icon value="star_border"></mu-icon>
            </mu-button>
            </mu-grid-tile>
        </mu-grid-list>
        </mu-paper>
    </mu-flex>
</template>

<script>
import breakfast from '@/assets/images/breakfast.jpg';
import burger from '@/assets/images/burger.jpg';
import camera from '@/assets/images/camera.jpg';
import hats from '@/assets/images/hats.jpg';
import honey from '@/assets/images/honey.jpg';
import morning from '@/assets/images/morning.jpg';
import vegetables from '@/assets/images/vegetables.jpg';
import waterPlant from '@/assets/images/water-plant.jpg';
export default {
  data () {
    return {
      list: [{
        image: breakfast,
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: burger,
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: camera,
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: hats,
        title: 'Hats',
        author: 'kakali'
      }, {
        image: honey,
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: morning,
        title: 'Morning',
        author: 'mokayi'
      }, {
        image: vegetables,
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }, {
        image: vegetables,
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }, {
        image: vegetables,
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>
<style>
.gridlist-demo{
  width: 360px;
  height: 100%;
  overflow-y: auto;
}
</style>