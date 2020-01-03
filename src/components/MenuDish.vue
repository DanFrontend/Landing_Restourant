<template>
    <div class="menu animated" :class="{'bounceInLeft': scrolled}">
        <div class="menu__item"
             v-for="item in block"
             :class="item.id"
             :key="item.id"
             :id="item.id"
        >
            <div class="modal-menu"></div>
            <div class="title">{{item.title}}</div>
            <div class="dish" v-for="(d, i) in item.dish" :key="i">
                <div class="dish-text">{{d.text}}</div>
                <div>
                    <span class="dish-price">{{d.price}}</span>
                    <span class="dish-weight">{{d.weight}}</span>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: 'MenuDish',
    data() {
        return {
            block: [
                {
                    id: 'salad',
                    title: 'Салат',
                    dish: [
                        {text: 'Цезарь', price: '40 грн /', weight: '350гр'}
                    ]
                },
                {
                    id: 'meat',
                    title: 'Мясо',
                    dish: [
                        {text: 'Говяжий стейк', price: '90 грн /', weight: '500гр'}
                    ]
                },
                {
                    id: 'alcohol',
                    title: 'Алкоголь',
                    dish: [
                        {text: 'Кагор', price: '89 грн /', weight: '1л'}
                    ]
                },
                {
                    id: 'desert',
                    title: 'Десерты',
                    dish: [
                        {text: 'Мафин', price: '45 грн /', weight: '100гр'}
                    ]
                }
            ],
            scrolled: false
        }
    },
    methods: {
        handleScroll() {
            let obj = document.querySelector('.title');
            let {top} = obj.getBoundingClientRect();
            let height = document.documentElement.clientHeight;
            this.scrolled = top < height;
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
    .menu {
        &__item {
            height: 600px;
            background-size: cover !important;
            margin-top: 30px;
            position: relative;
            padding: 50px;

            & .modal-menu {
                z-index: 1;
                width: 100%;
                height: 100%;
                overflow: hidden;
                outline: 0;
                background: rgba(0, 0, 0, 0.5);
                position: absolute;
                left: 0;
                top: 0;
            }
        }

        & .title {
            color: rgb(255, 255, 255);
            font-size: 50px;
            padding-bottom: 50px;
            position: relative;
            z-index: 2;
            text-align: left;
        }

        & .dish {
            display: flex;
            color: #FFF;
            position: relative;
            z-index: 1;
            justify-content: space-between;
            transition: .3s;
            padding: 0 15px;
            border-radius: 20px;
            text-shadow: 1px 1px 2px black, 0 0 1em green;
            font-size: 20px;
            &:hover {
                background: rgba(14, 14, 14, .7);
            }
        }
    }
    .salad {
        /* fixed top center Это свойство тормозит*/
        background:url("../assets/img/appetizer.jpg");
    }
    .meat {
        background: url("../assets/img/barbecue.jpg");
    }
    .alcohol {
        background: url("../assets/img/alcohol.jpg");
    }
    .desert {
        background: url("../assets/img/swit.jpg");
    }
</style>