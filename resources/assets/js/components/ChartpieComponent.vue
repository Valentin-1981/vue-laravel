<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <pie-chart :chart-data="data" :height="100" :options="{responsive: true, maintainAspectRatio: true}"></pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
    import PieChart from "./PieChart";

    export default {
        components:{
            PieChart,
        },
        data: function(){
            return{
                data: [],
            }
        },
        mounted() {
            this.update();
        },
        methods:{
            update: function() {
                this.is_refresh = true;
                axios.get('/start/data-chart-pie').then((response) => {
                    this.data = response.data;
                });
                // var app = this;
                // axios.get('/start/get-json').then(function(response) {
                //     console.log(response);
                //     app.urldata = response.data;
                //     app.is_refresh = false;
                //     app.id++;
                // });
            }
        }
    }
</script>
