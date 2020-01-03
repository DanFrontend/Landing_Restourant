<template>
    <div class="popular">
        <div class="modal-menu"></div>
        <div class="animated infinite pulse delay-2s popular__title">
            Популярные блюда
        </div>
        <div class="popular__content">
             <div class="popular__item animated"
                  v-for="(item, i) in popular"
                  :key="i"
                  :class="{'rollIn': scrolled}"
             >
                <img class="img" :src="item.img">
                <div class="text">{{item.title}}</div>
                <div class="price">{{item.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PopularDishes',
    data() {
        return {
            popular: [
                {img: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Цезарь', price: '$20.0'},
                {img: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Жареный кролик', price: '$43.0'},
                {img: 'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', title: 'Портвейн', price: '$24.0'}
            ],
            scrolled: false,
        }
    },
    methods: {
        handleScroll() {
            let obj = document.querySelector('.popular__item');
            let {top,bottom} = obj.getBoundingClientRect();
            let height = document.documentElement.clientHeight;
            this.scrolled = top < height && bottom >0;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped lang="scss">
    .popular {
        background: url('https://media.giphy.com/media/6nkbMjyxmyVAQ/giphy.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: bottom;
        position: relative;

        & .modal-menu {
            z-index: 1;
            width: 100%;
            height: 100%;
            overflow: hidden;
            outline: 0;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
        }

        &__title {
            color: #F3BF0C;
            font-size: 42px;
            margin-bottom: 25px;
            position: relative;
            z-index: 1;
        }

        &__content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
            /*border: 50px solid white;*/
            /*border-image: url('../assets/img/giphy.gif');*/
            /*border-image-slice: 10%;*/
            /*box-shadow: 0 0 100px rgba(black, 0.4), inset 0 0 100px rgba(black, 0.4);*/
        }

        &__item {
            margin-bottom: 10px;
            z-index: 1;
        }

        .img {
            width: 300px;
            height: 400px;
            box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
            border-radius: 5px;
            transition: .3s;
            &:hover {
                transform: scale(.9);
            }
        }

        .text {
            text-align: center;
            padding-top: 5px;
            color: rgb(255, 163, 38);
            font-size: 20px;
        }
        .price {
            text-align: center;
            color: #FFF;
        }
    }
</style>