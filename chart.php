<?php require_once("header.php"); ?>

<div id="container" style="min-width: 320px; max-width: 85%; height: 50%; margin: 0  "></div>


<?php require_once("footer.php"); ?>


<script src="js/highcharts.js"></script>
<script src="js/funnel.js"></script>
<script src="js/exporting.js"></script>



<script type="application/javascript">

    $(function () {

        $('#container').highcharts({
            chart: {
                type: 'funnel',
                marginRight: 100,
                backgroundColor: "#fafafa"

            },
            title: {
                text: 'Воронка продаж',
                x: -50
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> ({point.y:,.0f})',
                        //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        //color: "#7a7a7a",
                        softConnector: true
                    },
                    neckWidth: '30%',
                    neckHeight: '25%'

                    //-- Other available options
                    // height: pixels or percent
                    // width: pixels or percent
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Людей',
                data: [
                    ['Заходов на сайт',   15654],
                    ['Начало заполнения формы связи',       4064],
                    ['Заполнено форм связи', 1987],
                    ['Менеджер дозвонился',    976],
                    ['Менеджер договорился на оказание услуги',    846],
                    ['Клиент оплатил',    760],
                    ['Поиск исполнителя',    759],
                    ['Услуга оказана полностью',    759],
                    ['Повторная продажа',    346]

                ]
            }]
        });
    });
</script>