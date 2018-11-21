
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
        title:{
        text: "Label 1 Explodes"
      },

      data: [
      {
       indexLabelPlacement: "outside",
       type: "doughnut",
       dataPoints: [
       {  y: 27.3, indexLabel:"label1", exploded: true },
       {  y: 16.8, indexLabel:"label2" },
       {  y: 15.4, indexLabel:"label3" },
       {  y: 15.4, indexLabel: "label4", exploded: true },
       {  y: 13.6, indexLabel:"label5" },
       {  y: 27.3, indexLabel: "label6" }


       ]
     }
     ]
   });

    chart.render();
  }
  </script>
  </head>
  <body>
   