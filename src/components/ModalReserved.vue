<template>
    <div class="modal-reserved">
<!--        <form action="/" method="post">-->
<!--            <input name="name" type="text" placeholder="Ваше имя и фамилия">-->
<!--            <input name="phone" type="text" placeholder="+380">-->
<!--            <input name="number" type="number" placeholder="Номер стола">-->
<!--            <button class="sumbit" type="submit">Отправить</button>-->
<!--        </form>-->
        <form
                @submit="checkForm"
                action="/"
                method="post"
        >
            <p>
                <label for="name">Имя</label>
                <input
                        id="name"
                        v-model="name"
                        type="text"
                        name="name"
                >
            </p>
            <p>
                <label for="age">Телефон</label>
                <input
                        id="age"
                        v-model="phone"
                        type="number"
                        name="age"
                        min="0"
                >
            </p>
            <p>
                <label for="age">Номер Столика</label>
                <input
                        id="num"
                        v-model="num"
                        type="number"
                        name="age"
                        min="0"
                >
            </p>

            <div v-if="errors.length">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                    <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
                </ul>
            </div>
            <p>
                <input
                        class="sumbit"
                        type="submit"
                        value="Отправить"
                >
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ModalReserved',
    data() {
        return {
            errors: [],
            name: null,
            phone: null,
            num: null
        }
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.phone && this.num) {
                return true;
            }

            this.errors = [];

            if (!this.name || typeof this.name === "number") {
                this.errors.push('Требуется указать имя.');
            }
            if (!this.phone) {
                this.errors.push('Требуется указать телефон.');
            }
            if (!this.num) {
                this.errors.push('Требуется указать номер столика.');
            }

            e.preventDefault();
        },
    }
}
</script>

<style scoped lang="scss">
    .modal-reserved {
        width: 600px;
        height: 500px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2000;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border-radius: 4px;
        background: rgb(255, 255, 255);
        padding: 40px;
    }
    form {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
    }
    input {
        width: 100%;
        height: 50px;
        display: block;
        border-radius: 10px;
        padding-left: 23px;
        border: 1px solid rgba(59, 67, 76, 0.3);
    }
    .sumbit {
        color: #FFF;
        background: #0e0e0e;
        border-radius: 5px;
        border: 1px solid #c1c1c1c1;
    }
</style>