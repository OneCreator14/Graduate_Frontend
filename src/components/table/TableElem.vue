<template>
    <div class="table">
        <div class="tittle">
            <div>№</div>
            <div>Текущая стадия услуги</div>
            <div>Оставшееся время</div>
        </div>



        <div class="tableElem" v-for="request in requests" v-bind:key="request.id">
            <div class="header">

                <div class="grid_item">{{ request.id }}</div>
                <div class="grid_item">{{ request.stage }}</div>
                <div class="grid_item">{{ request.deadline }}</div>

            </div>

            <div class="body">
                <div>Услуга: </div>
                <div>{{ request.service }}</div>
                <div>Дата составления заявления: </div>
                <div>{{ request.startDate }}</div>
                <div>Заявитель: </div>
                <div>{{ request.applicant }}</div>
                <div>Необходимо рассмотреть до: </div>
                <div>{{ request.endDate }}</div>
            </div>

            <div class="footer">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        requests: {
            type: Array,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
$grid-border: 1px solid var(--primary-light-gray);

.table {
    background-color: var(--header-gray);
    width: 1000px;

}

.tittle{
    display: grid;
    grid-template-columns: 1fr 15fr 400px;
    text-align: center;
    background-color: var(--header-gray);
    border: #{$grid-border};
    margin-bottom: 10px;
}

.tittle > div{
    padding: 20px 0px;
    border-right: #{$grid-border};
    font-weight: 500;
    font-size: 20px;

    &:first-child{
        font-size: 18px;
        padding-left: 2px;
        padding-top: 21px;
    }
}

.tableElem {
    width: 1000px;
    height: 200px;
    background-color: white;
    border: #{$grid-border};
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
}

.header {
    display: grid;
    grid-template-columns: 1fr 15fr 400px;
}

.grid_item {
    text-align: center;
    padding: 10px;
    background-color: white;
    height: 100%;
    width: 100%;
    border-right: #{$grid-border};
    border-bottom: #{$grid-border};

    &:last-child {
        border-right: none;
    }
}

.body {
    display: grid;
    grid-template-columns: 90px auto 230px 150px;
    background-color: white;
    padding: 15px;

    div {
        padding: 10px;
    }
}

.footer {
    float: right;
    padding-right: 20px;
}
</style>