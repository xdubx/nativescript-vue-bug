<template>
    <Page class="page">
        <ActionBar title="Groceries" class="action-bar" />
        <ScrollView>
            <GridLayout rows="*" height="1000px">
                <RadCartesianChart row="0">
                    <BarSeries v-tkCartesianSeries :items="favoriteFruits"
                        categoryProperty="type" valueProperty="count" />
                    <CategoricalAxis v-tkCartesianHorizontalAxis />
                    <LinearAxis v-tkCartesianVerticalAxis />
                </RadCartesianChart>
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadChart from "nativescript-ui-chart/vue";
    Vue.use(RadChart);

    export default {
        data() {
            return {
                favoriteFruits: [{
                        type: "🍎",
                        count: 7
                    },
                    {
                        type: "🍌",
                        count: 15
                    },
                    {
                        type: "🍍",
                        count: 12
                    },
                    {
                        type: "🍒",
                        count: 30
                    },
                    {
                        type: "🍇",
                        count: 16
                    }
                ]
            };
        }
    };
</script>

<style scoped>
LinearAxis ChartAxisLabel {
    color:green;
}

</style>