<template>
    <div class="footer">
        <div class="footer__content">
            <div class="footer-text"> 
                <div>Телефон: +38 (044) 235-00-25</div>
                <div>Адресс: Киев, пр. Павла Тычины, 1в</div>
            </div>
            <div class="footer-map">
                <div style="overflow:hidden;width: 400px;position: relative;">
                    <iframe width="400" height="300" src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=%D0%9A%D0%B8%D0%B5%D0%B2%2C%20%D0%A2%D1%8B%D1%87%D1%8B%D0%BD%D1%8B%201%D0%B2+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
        <div class="sub__footer">
            <div>All RIghts Reserved - 2016 DesignCoon</div>
            <div>www.sellfy.com/designcoon</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
    
}
</script>

<style scoped lang="scss">
    .footer {
        &__content {
            display: flex;
            justify-content: space-around;
            background: rgb(13, 30, 45);
            padding: 20px
        }

        &-text {
            color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        & .sub__footer {
            height: 45px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: rgb(255, 163, 38);
            font-size: 12px;
            background: black;
        }
    }
</style>